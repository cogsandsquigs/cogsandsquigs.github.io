//@ts-nocheck
  // DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
  export function gql(strings: TemplateStringsArray, ...args: string[]): string {
    let str = ''
    strings.forEach((string, i) => {
      str += string + (args[i] || '')
    })
    return str
  }
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** References another document, used as a foreign key */
  Reference: any;
  JSON: any;
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  breadcrumbs: Array<Scalars['String']>;
  path: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  template: Scalars['String'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']>;
};

export type Folder = {
  __typename?: 'Folder';
  name: Scalars['String'];
  path: Scalars['String'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Document = {
  id: Scalars['ID'];
  _sys?: Maybe<SystemInfo>;
  _values: Scalars['JSON'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float'];
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: 'Query';
  getOptimizedQuery?: Maybe<Scalars['String']>;
  collection: Collection;
  collections: Array<Collection>;
  node: Node;
  document: DocumentNode;
  blog: Blog;
  blogConnection: BlogConnection;
  pages: Pages;
  pagesConnection: PagesConnection;
};


export type QueryGetOptimizedQueryArgs = {
  queryString: Scalars['String'];
};


export type QueryCollectionArgs = {
  collection?: InputMaybe<Scalars['String']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryBlogArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryBlogConnectionArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<BlogFilter>;
};


export type QueryPagesArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryPagesConnectionArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PagesFilter>;
};

export type DocumentFilter = {
  blog?: InputMaybe<BlogFilter>;
  pages?: InputMaybe<PagesFilter>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String'];
  slug: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  format?: Maybe<Scalars['String']>;
  matches?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<DocumentFilter>;
  folder?: InputMaybe<Scalars['String']>;
};

export type DocumentNode = Blog | Pages | Folder;

export type Blog = Node & Document & {
  __typename?: 'Blog';
  draft: Scalars['Boolean'];
  title: Scalars['String'];
  description: Scalars['String'];
  date: Scalars['String'];
  tags: Array<Scalars['String']>;
  series?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  _sys: SystemInfo;
  _values: Scalars['JSON'];
};

export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
};

export type StringFilter = {
  startsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DatetimeFilter = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type RichTextFilter = {
  startsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
};

export type BlogFilter = {
  draft?: InputMaybe<BooleanFilter>;
  title?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  date?: InputMaybe<DatetimeFilter>;
  tags?: InputMaybe<StringFilter>;
  series?: InputMaybe<StringFilter>;
  body?: InputMaybe<RichTextFilter>;
};

export type BlogConnectionEdges = {
  __typename?: 'BlogConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<Blog>;
};

export type BlogConnection = Connection & {
  __typename?: 'BlogConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<BlogConnectionEdges>>>;
};

export type Pages = Node & Document & {
  __typename?: 'Pages';
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  _sys: SystemInfo;
  _values: Scalars['JSON'];
};

export type PagesFilter = {
  title?: InputMaybe<StringFilter>;
  body?: InputMaybe<RichTextFilter>;
};

export type PagesConnectionEdges = {
  __typename?: 'PagesConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<Pages>;
};

export type PagesConnection = Connection & {
  __typename?: 'PagesConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<PagesConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  deleteDocument: DocumentNode;
  createDocument: DocumentNode;
  updateBlog: Blog;
  createBlog: Blog;
  updatePages: Pages;
  createPages: Pages;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String'];
  relativePath: Scalars['String'];
  template?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentUpdateMutation;
};


export type MutationDeleteDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationUpdateBlogArgs = {
  relativePath: Scalars['String'];
  params: BlogMutation;
};


export type MutationCreateBlogArgs = {
  relativePath: Scalars['String'];
  params: BlogMutation;
};


export type MutationUpdatePagesArgs = {
  relativePath: Scalars['String'];
  params: PagesMutation;
};


export type MutationCreatePagesArgs = {
  relativePath: Scalars['String'];
  params: PagesMutation;
};

export type DocumentUpdateMutation = {
  blog?: InputMaybe<BlogMutation>;
  pages?: InputMaybe<PagesMutation>;
  relativePath?: InputMaybe<Scalars['String']>;
};

export type DocumentMutation = {
  blog?: InputMaybe<BlogMutation>;
  pages?: InputMaybe<PagesMutation>;
};

export type BlogMutation = {
  draft?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  series?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['JSON']>;
};

export type PagesMutation = {
  title?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['JSON']>;
};

export type BlogPartsFragment = { __typename?: 'Blog', draft: boolean, title: string, description: string, date: string, tags: Array<string>, series?: string | null, body?: any | null };

export type PagesPartsFragment = { __typename?: 'Pages', title?: string | null, body?: any | null };

export type BlogQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type BlogQuery = { __typename?: 'Query', blog: { __typename?: 'Blog', id: string, draft: boolean, title: string, description: string, date: string, tags: Array<string>, series?: string | null, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type BlogConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<BlogFilter>;
}>;


export type BlogConnectionQuery = { __typename?: 'Query', blogConnection: { __typename?: 'BlogConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'BlogConnectionEdges', cursor: string, node?: { __typename?: 'Blog', id: string, draft: boolean, title: string, description: string, date: string, tags: Array<string>, series?: string | null, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export type PagesQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type PagesQuery = { __typename?: 'Query', pages: { __typename?: 'Pages', id: string, title?: string | null, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type PagesConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PagesFilter>;
}>;


export type PagesConnectionQuery = { __typename?: 'Query', pagesConnection: { __typename?: 'PagesConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'PagesConnectionEdges', cursor: string, node?: { __typename?: 'Pages', id: string, title?: string | null, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export const BlogPartsFragmentDoc = gql`
    fragment BlogParts on Blog {
  draft
  title
  description
  date
  tags
  series
  body
}
    `;
export const PagesPartsFragmentDoc = gql`
    fragment PagesParts on Pages {
  title
  body
}
    `;
export const BlogDocument = gql`
    query blog($relativePath: String!) {
  blog(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...BlogParts
  }
}
    ${BlogPartsFragmentDoc}`;
export const BlogConnectionDocument = gql`
    query blogConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: BlogFilter) {
  blogConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...BlogParts
      }
    }
  }
}
    ${BlogPartsFragmentDoc}`;
export const PagesDocument = gql`
    query pages($relativePath: String!) {
  pages(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PagesParts
  }
}
    ${PagesPartsFragmentDoc}`;
export const PagesConnectionDocument = gql`
    query pagesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PagesFilter) {
  pagesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PagesParts
      }
    }
  }
}
    ${PagesPartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      blog(variables: BlogQueryVariables, options?: C): Promise<{data: BlogQuery, variables: BlogQueryVariables, query: string}> {
        return requester<{data: BlogQuery, variables: BlogQueryVariables, query: string}, BlogQueryVariables>(BlogDocument, variables, options);
      },
    blogConnection(variables?: BlogConnectionQueryVariables, options?: C): Promise<{data: BlogConnectionQuery, variables: BlogConnectionQueryVariables, query: string}> {
        return requester<{data: BlogConnectionQuery, variables: BlogConnectionQueryVariables, query: string}, BlogConnectionQueryVariables>(BlogConnectionDocument, variables, options);
      },
    pages(variables: PagesQueryVariables, options?: C): Promise<{data: PagesQuery, variables: PagesQueryVariables, query: string}> {
        return requester<{data: PagesQuery, variables: PagesQueryVariables, query: string}, PagesQueryVariables>(PagesDocument, variables, options);
      },
    pagesConnection(variables?: PagesConnectionQueryVariables, options?: C): Promise<{data: PagesConnectionQuery, variables: PagesConnectionQueryVariables, query: string}> {
        return requester<{data: PagesConnectionQuery, variables: PagesConnectionQueryVariables, query: string}, PagesConnectionQueryVariables>(PagesConnectionDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { createClient, TinaClient } from "tinacms/dist/client";

const generateRequester = (client: TinaClient) => {
  const requester: (
    doc: any,
    vars?: any,
    options?: any,
    client
  ) => Promise<any> = async (doc, vars, _options) => {
    const data = await client.request({
      query: doc,
      variables: vars,
    });

    return { data: data?.data, query: doc, variables: vars || {} };
  };

  return requester;
};

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = () =>
  getSdk(
    generateRequester(createClient({ url: "https://content.tinajs.io/1.4/content/c591f1cb-333e-43b2-bf08-9598be096e5e/github/main", queries }))
  );

export const queries = (client: TinaClient) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};

  