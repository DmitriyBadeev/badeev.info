import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The multiplier path scalar represents a valid GraphQL multiplier path string. */
  MultiplierPath: any;
  PaginationAmount: any;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
};

export type Queries = {
  __typename?: 'Queries';
  authors?: Maybe<Array<Maybe<Author>>>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  tagsByWorkId?: Maybe<Array<Maybe<Tag>>>;
  workById?: Maybe<Work>;
  works?: Maybe<WorkConnection>;
};


export type QueriesAuthorsArgs = {
  where?: Maybe<AuthorFilter>;
};


export type QueriesTagsArgs = {
  where?: Maybe<TagFilter>;
};


export type QueriesTagsByWorkIdArgs = {
  workId: Scalars['Int'];
};


export type QueriesWorkByIdArgs = {
  id: Scalars['Int'];
};


export type QueriesWorksArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['PaginationAmount']>;
  last?: Maybe<Scalars['PaginationAmount']>;
  where?: Maybe<WorkFilter>;
};

export type Mutations = {
  __typename?: 'Mutations';
  connectTagAndWork?: Maybe<TagWork>;
  createAuthor?: Maybe<Author>;
  createTag?: Maybe<Tag>;
  createWork?: Maybe<Work>;
};


export type MutationsConnectTagAndWorkArgs = {
  inputTagWork?: Maybe<ConnectTagWorkInput>;
};


export type MutationsCreateAuthorArgs = {
  inputAuthor?: Maybe<CreateAuthorInput>;
};


export type MutationsCreateTagArgs = {
  inputTag?: Maybe<CreateTagInput>;
};


export type MutationsCreateWorkArgs = {
  inputWork?: Maybe<CreateWorkInput>;
};


export type Work = {
  __typename?: 'Work';
  authors?: Maybe<Array<Maybe<Author>>>;
  countViews: Scalars['Int'];
  date: Scalars['DateTime'];
  html?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  imgPath?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<TagWork>>>;
  task?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type WorkFilter = {
  AND?: Maybe<Array<WorkFilter>>;
  countViews?: Maybe<Scalars['Int']>;
  countViews_gt?: Maybe<Scalars['Int']>;
  countViews_gte?: Maybe<Scalars['Int']>;
  countViews_in?: Maybe<Array<Scalars['Int']>>;
  countViews_lt?: Maybe<Scalars['Int']>;
  countViews_lte?: Maybe<Scalars['Int']>;
  countViews_not?: Maybe<Scalars['Int']>;
  countViews_not_gt?: Maybe<Scalars['Int']>;
  countViews_not_gte?: Maybe<Scalars['Int']>;
  countViews_not_in?: Maybe<Array<Scalars['Int']>>;
  countViews_not_lt?: Maybe<Scalars['Int']>;
  countViews_not_lte?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['DateTime']>;
  date_gt?: Maybe<Scalars['DateTime']>;
  date_gte?: Maybe<Scalars['DateTime']>;
  date_in?: Maybe<Array<Scalars['DateTime']>>;
  date_lt?: Maybe<Scalars['DateTime']>;
  date_lte?: Maybe<Scalars['DateTime']>;
  date_not?: Maybe<Scalars['DateTime']>;
  date_not_gt?: Maybe<Scalars['DateTime']>;
  date_not_gte?: Maybe<Scalars['DateTime']>;
  date_not_in?: Maybe<Array<Scalars['DateTime']>>;
  date_not_lt?: Maybe<Scalars['DateTime']>;
  date_not_lte?: Maybe<Scalars['DateTime']>;
  html?: Maybe<Scalars['String']>;
  html_contains?: Maybe<Scalars['String']>;
  html_ends_with?: Maybe<Scalars['String']>;
  html_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  html_not?: Maybe<Scalars['String']>;
  html_not_contains?: Maybe<Scalars['String']>;
  html_not_ends_with?: Maybe<Scalars['String']>;
  html_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  html_not_starts_with?: Maybe<Scalars['String']>;
  html_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_gt?: Maybe<Scalars['Int']>;
  id_gte?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Scalars['Int']>>;
  id_lt?: Maybe<Scalars['Int']>;
  id_lte?: Maybe<Scalars['Int']>;
  id_not?: Maybe<Scalars['Int']>;
  id_not_gt?: Maybe<Scalars['Int']>;
  id_not_gte?: Maybe<Scalars['Int']>;
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  id_not_lt?: Maybe<Scalars['Int']>;
  id_not_lte?: Maybe<Scalars['Int']>;
  imgPath?: Maybe<Scalars['String']>;
  imgPath_contains?: Maybe<Scalars['String']>;
  imgPath_ends_with?: Maybe<Scalars['String']>;
  imgPath_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  imgPath_not?: Maybe<Scalars['String']>;
  imgPath_not_contains?: Maybe<Scalars['String']>;
  imgPath_not_ends_with?: Maybe<Scalars['String']>;
  imgPath_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  imgPath_not_starts_with?: Maybe<Scalars['String']>;
  imgPath_starts_with?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  link_contains?: Maybe<Scalars['String']>;
  link_ends_with?: Maybe<Scalars['String']>;
  link_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  link_not?: Maybe<Scalars['String']>;
  link_not_contains?: Maybe<Scalars['String']>;
  link_not_ends_with?: Maybe<Scalars['String']>;
  link_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  link_not_starts_with?: Maybe<Scalars['String']>;
  link_starts_with?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<WorkFilter>>;
  shortDescription?: Maybe<Scalars['String']>;
  shortDescription_contains?: Maybe<Scalars['String']>;
  shortDescription_ends_with?: Maybe<Scalars['String']>;
  shortDescription_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  shortDescription_not?: Maybe<Scalars['String']>;
  shortDescription_not_contains?: Maybe<Scalars['String']>;
  shortDescription_not_ends_with?: Maybe<Scalars['String']>;
  shortDescription_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  shortDescription_not_starts_with?: Maybe<Scalars['String']>;
  shortDescription_starts_with?: Maybe<Scalars['String']>;
  task?: Maybe<Scalars['String']>;
  task_contains?: Maybe<Scalars['String']>;
  task_ends_with?: Maybe<Scalars['String']>;
  task_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  task_not?: Maybe<Scalars['String']>;
  task_not_contains?: Maybe<Scalars['String']>;
  task_not_ends_with?: Maybe<Scalars['String']>;
  task_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  task_not_starts_with?: Maybe<Scalars['String']>;
  task_starts_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type WorkConnection = {
  __typename?: 'WorkConnection';
  /** A list of edges. */
  edges?: Maybe<Array<WorkEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<Work>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};


export type TagFilter = {
  AND?: Maybe<Array<TagFilter>>;
  description?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_gt?: Maybe<Scalars['Int']>;
  id_gte?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Scalars['Int']>>;
  id_lt?: Maybe<Scalars['Int']>;
  id_lte?: Maybe<Scalars['Int']>;
  id_not?: Maybe<Scalars['Int']>;
  id_not_gt?: Maybe<Scalars['Int']>;
  id_not_gte?: Maybe<Scalars['Int']>;
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  id_not_lt?: Maybe<Scalars['Int']>;
  id_not_lte?: Maybe<Scalars['Int']>;
  OR?: Maybe<Array<TagFilter>>;
  title?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
};

export type AuthorFilter = {
  AND?: Maybe<Array<AuthorFilter>>;
  id?: Maybe<Scalars['Int']>;
  id_gt?: Maybe<Scalars['Int']>;
  id_gte?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Scalars['Int']>>;
  id_lt?: Maybe<Scalars['Int']>;
  id_lte?: Maybe<Scalars['Int']>;
  id_not?: Maybe<Scalars['Int']>;
  id_not_gt?: Maybe<Scalars['Int']>;
  id_not_gte?: Maybe<Scalars['Int']>;
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  id_not_lt?: Maybe<Scalars['Int']>;
  id_not_lte?: Maybe<Scalars['Int']>;
  link?: Maybe<Scalars['String']>;
  link_contains?: Maybe<Scalars['String']>;
  link_ends_with?: Maybe<Scalars['String']>;
  link_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  link_not?: Maybe<Scalars['String']>;
  link_not_contains?: Maybe<Scalars['String']>;
  link_not_ends_with?: Maybe<Scalars['String']>;
  link_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  link_not_starts_with?: Maybe<Scalars['String']>;
  link_starts_with?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<AuthorFilter>>;
  role?: Maybe<Scalars['String']>;
  role_contains?: Maybe<Scalars['String']>;
  role_ends_with?: Maybe<Scalars['String']>;
  role_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  role_not?: Maybe<Scalars['String']>;
  role_not_contains?: Maybe<Scalars['String']>;
  role_not_ends_with?: Maybe<Scalars['String']>;
  role_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  role_not_starts_with?: Maybe<Scalars['String']>;
  role_starts_with?: Maybe<Scalars['String']>;
  workId?: Maybe<Scalars['Int']>;
  workId_gt?: Maybe<Scalars['Int']>;
  workId_gte?: Maybe<Scalars['Int']>;
  workId_in?: Maybe<Array<Scalars['Int']>>;
  workId_lt?: Maybe<Scalars['Int']>;
  workId_lte?: Maybe<Scalars['Int']>;
  workId_not?: Maybe<Scalars['Int']>;
  workId_not_gt?: Maybe<Scalars['Int']>;
  workId_not_gte?: Maybe<Scalars['Int']>;
  workId_not_in?: Maybe<Array<Scalars['Int']>>;
  workId_not_lt?: Maybe<Scalars['Int']>;
  workId_not_lte?: Maybe<Scalars['Int']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** An edge in a connection. */
export type WorkEdge = {
  __typename?: 'WorkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Work>;
};

export type Tag = {
  __typename?: 'Tag';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  works?: Maybe<Array<Maybe<TagWork>>>;
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['Int'];
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  work?: Maybe<Work>;
  workId: Scalars['Int'];
};

export type CreateWorkInput = {
  date: Scalars['DateTime'];
  html?: Maybe<Scalars['String']>;
  imgPath?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  task?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type CreateTagInput = {
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ConnectTagWorkInput = {
  tagId: Scalars['Int'];
  workId: Scalars['Int'];
};

export type TagWork = {
  __typename?: 'TagWork';
  id: Scalars['Int'];
  tag?: Maybe<Tag>;
  tagId: Scalars['Int'];
  work?: Maybe<Work>;
  workId: Scalars['Int'];
};

export type CreateAuthorInput = {
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  workId: Scalars['Int'];
};


export type LastWorksQueryVariables = Exact<{
  count?: Maybe<Scalars['PaginationAmount']>;
}>;


export type LastWorksQuery = (
  { __typename?: 'Queries' }
  & { works?: Maybe<(
    { __typename?: 'WorkConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Work' }
      & Pick<Work, 'id' | 'title' | 'shortDescription' | 'date' | 'imgPath'>
    )>>> }
  )> }
);

export type TagsByWorkIdQueryVariables = Exact<{
  workId: Scalars['Int'];
}>;


export type TagsByWorkIdQuery = (
  { __typename?: 'Queries' }
  & { tagsByWorkId?: Maybe<Array<Maybe<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id' | 'title'>
  )>>> }
);

export type WorksQueryVariables = Exact<{ [key: string]: never; }>;


export type WorksQuery = (
  { __typename?: 'Queries' }
  & { works?: Maybe<(
    { __typename?: 'WorkConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Work' }
      & Pick<Work, 'id' | 'title' | 'shortDescription' | 'date' | 'imgPath'>
    )>>> }
  )> }
);

export type WorkByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type WorkByIdQuery = (
  { __typename?: 'Queries' }
  & { workById?: Maybe<(
    { __typename?: 'Work' }
    & Pick<Work, 'id' | 'title' | 'date' | 'imgPath' | 'html' | 'link' | 'task'>
    & { authors?: Maybe<Array<Maybe<(
      { __typename?: 'Author' }
      & Pick<Author, 'name' | 'link' | 'role'>
    )>>>, tags?: Maybe<Array<Maybe<(
      { __typename?: 'TagWork' }
      & Pick<TagWork, 'tagId'>
    )>>> }
  )> }
);


export const LastWorksDocument = gql`
    query lastWorks($count: PaginationAmount) {
  works(first: $count) {
    nodes {
      id
      title
      shortDescription
      date
      imgPath
    }
  }
}
    `;

/**
 * __useLastWorksQuery__
 *
 * To run a query within a React component, call `useLastWorksQuery` and pass it any options that fit your needs.
 * When your component renders, `useLastWorksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLastWorksQuery({
 *   variables: {
 *      count: // value for 'count'
 *   },
 * });
 */
export function useLastWorksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LastWorksQuery, LastWorksQueryVariables>) {
        return ApolloReactHooks.useQuery<LastWorksQuery, LastWorksQueryVariables>(LastWorksDocument, baseOptions);
      }
export function useLastWorksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LastWorksQuery, LastWorksQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LastWorksQuery, LastWorksQueryVariables>(LastWorksDocument, baseOptions);
        }
export type LastWorksQueryHookResult = ReturnType<typeof useLastWorksQuery>;
export type LastWorksLazyQueryHookResult = ReturnType<typeof useLastWorksLazyQuery>;
export type LastWorksQueryResult = ApolloReactCommon.QueryResult<LastWorksQuery, LastWorksQueryVariables>;
export const TagsByWorkIdDocument = gql`
    query tagsByWorkId($workId: Int!) {
  tagsByWorkId(workId: $workId) {
    id
    title
  }
}
    `;

/**
 * __useTagsByWorkIdQuery__
 *
 * To run a query within a React component, call `useTagsByWorkIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagsByWorkIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagsByWorkIdQuery({
 *   variables: {
 *      workId: // value for 'workId'
 *   },
 * });
 */
export function useTagsByWorkIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TagsByWorkIdQuery, TagsByWorkIdQueryVariables>) {
        return ApolloReactHooks.useQuery<TagsByWorkIdQuery, TagsByWorkIdQueryVariables>(TagsByWorkIdDocument, baseOptions);
      }
export function useTagsByWorkIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TagsByWorkIdQuery, TagsByWorkIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TagsByWorkIdQuery, TagsByWorkIdQueryVariables>(TagsByWorkIdDocument, baseOptions);
        }
export type TagsByWorkIdQueryHookResult = ReturnType<typeof useTagsByWorkIdQuery>;
export type TagsByWorkIdLazyQueryHookResult = ReturnType<typeof useTagsByWorkIdLazyQuery>;
export type TagsByWorkIdQueryResult = ApolloReactCommon.QueryResult<TagsByWorkIdQuery, TagsByWorkIdQueryVariables>;
export const WorksDocument = gql`
    query works {
  works {
    nodes {
      id
      title
      shortDescription
      date
      imgPath
    }
  }
}
    `;

/**
 * __useWorksQuery__
 *
 * To run a query within a React component, call `useWorksQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorksQuery({
 *   variables: {
 *   },
 * });
 */
export function useWorksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<WorksQuery, WorksQueryVariables>) {
        return ApolloReactHooks.useQuery<WorksQuery, WorksQueryVariables>(WorksDocument, baseOptions);
      }
export function useWorksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<WorksQuery, WorksQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<WorksQuery, WorksQueryVariables>(WorksDocument, baseOptions);
        }
export type WorksQueryHookResult = ReturnType<typeof useWorksQuery>;
export type WorksLazyQueryHookResult = ReturnType<typeof useWorksLazyQuery>;
export type WorksQueryResult = ApolloReactCommon.QueryResult<WorksQuery, WorksQueryVariables>;
export const WorkByIdDocument = gql`
    query workById($id: Int!) {
  workById(id: $id) {
    id
    title
    date
    imgPath
    html
    link
    task
    authors {
      name
      link
      role
    }
    tags {
      tagId
    }
  }
}
    `;

/**
 * __useWorkByIdQuery__
 *
 * To run a query within a React component, call `useWorkByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useWorkByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<WorkByIdQuery, WorkByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<WorkByIdQuery, WorkByIdQueryVariables>(WorkByIdDocument, baseOptions);
      }
export function useWorkByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<WorkByIdQuery, WorkByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<WorkByIdQuery, WorkByIdQueryVariables>(WorkByIdDocument, baseOptions);
        }
export type WorkByIdQueryHookResult = ReturnType<typeof useWorkByIdQuery>;
export type WorkByIdLazyQueryHookResult = ReturnType<typeof useWorkByIdLazyQuery>;
export type WorkByIdQueryResult = ApolloReactCommon.QueryResult<WorkByIdQuery, WorkByIdQueryVariables>;