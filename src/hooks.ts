import { validate, v4 as uuidv4 } from "uuid";
import { parse, serialize, type CookieSerializeOptions } from "cookie";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function handle({ event, resolve }) {
    // if post is not valid, return 404
    if (
        event.params.slug !== undefined &&
        !(await slugs()).includes(event.params.slug)
    ) {
        return new Response(`Post not found: ${event.params.slug}`, {
            status: 404,
        });
    }

    // if user id is not valid, return 404
    if (
        event.params.id !== undefined &&
        !validate(event.params.id) &&
        (await prisma.user.findUnique({
            where: { id: event.params.id },
        })) !== null
    ) {
        return new Response(`User not found: ${event.params.id}`, {
            status: 404,
        });
    }

    // set id if user does not have one
    let cookie = parse(event.request.headers.cookie || "");
    let id = validate(cookie.id)
        ? cookie.id
        : (await prisma.user.create({ data: { id: uuidv4() } })).id;
    event.locals.user = await prisma.user.findUnique({ where: { id } });

    // resolve request
    const response = await resolve(event);

    // set cookie
    let cookieOptions: CookieSerializeOptions = {
        maxAge: 1000 * 60 * 60 * 24 * 365,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
    };
    let cookieHeader = serialize("id", id, cookieOptions);
    response.headers.set("Set-Cookie", cookieHeader);

    // return response
    return response;
}

/** @type {import('@sveltejs/kit').GetSession} */
export async function getSession(event) {
    return event.locals.user;
}

async function slugs() {
    const paths = import.meta.glob("$posts/*.md");
    let slugs: string[] = [];

    for (let path in paths) {
        slugs.push(path.slice(11, path.indexOf(".md")));
    }

    return slugs;
}
