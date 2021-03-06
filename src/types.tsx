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
  backendTags?: Maybe<Array<Maybe<Tag>>>;
  frontendTags?: Maybe<Array<Maybe<Tag>>>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  tagsByWorkId?: Maybe<Array<Maybe<Tag>>>;
  workById?: Maybe<Work>;
  works?: Maybe<WorkConnection>;
  worksByTagIds?: Maybe<WorkConnection>;
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
};


export type QueriesWorksByTagIdsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['PaginationAmount']>;
  last?: Maybe<Scalars['PaginationAmount']>;
  tagIds?: Maybe<Array<Scalars['Int']>>;
};

export type Mutations = {
  __typename?: 'Mutations';
  addBackendTag?: Maybe<BackendTag>;
  addFrontendTag?: Maybe<FrontendTag>;
  connectTagAndWork?: Maybe<TagWork>;
  createAuthor?: Maybe<Author>;
  createTag?: Maybe<Tag>;
  createWork?: Maybe<Work>;
  deleteAuthor?: Maybe<Author>;
  deleteBackendTag?: Maybe<BackendTag>;
  deleteFrontendTag?: Maybe<FrontendTag>;
  deleteTag?: Maybe<Tag>;
  deleteWork?: Maybe<Work>;
  disconnectTagAndWork?: Maybe<TagWork>;
  updateAuthor?: Maybe<Author>;
  updateTag?: Maybe<Tag>;
  updateWork?: Maybe<Work>;
};


export type MutationsAddBackendTagArgs = {
  tagId: Scalars['Int'];
};


export type MutationsAddFrontendTagArgs = {
  tagId: Scalars['Int'];
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


export type MutationsDeleteAuthorArgs = {
  authorId: Scalars['Int'];
};


export type MutationsDeleteBackendTagArgs = {
  tagId: Scalars['Int'];
};


export type MutationsDeleteFrontendTagArgs = {
  tagId: Scalars['Int'];
};


export type MutationsDeleteTagArgs = {
  tagId: Scalars['Int'];
};


export type MutationsDeleteWorkArgs = {
  workId: Scalars['Int'];
};


export type MutationsDisconnectTagAndWorkArgs = {
  inputTagWork?: Maybe<ConnectTagWorkInput>;
};


export type MutationsUpdateAuthorArgs = {
  inputAuthor?: Maybe<UpdateAuthorInput>;
};


export type MutationsUpdateTagArgs = {
  inputTag?: Maybe<UpdateTagInput>;
};


export type MutationsUpdateWorkArgs = {
  inputWork?: Maybe<UpdateWorkInput>;
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

export type UpdateWorkInput = {
  date?: Maybe<Scalars['DateTime']>;
  html?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
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

export type UpdateTagInput = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
};

export type TagWork = {
  __typename?: 'TagWork';
  id: Scalars['Int'];
  tag?: Maybe<Tag>;
  tagId: Scalars['Int'];
  work?: Maybe<Work>;
  workId: Scalars['Int'];
};

export type FrontendTag = {
  __typename?: 'FrontendTag';
  id: Scalars['Int'];
  tag?: Maybe<Tag>;
  tagId: Scalars['Int'];
};

export type BackendTag = {
  __typename?: 'BackendTag';
  id: Scalars['Int'];
  tag?: Maybe<Tag>;
  tagId: Scalars['Int'];
};

export type CreateAuthorInput = {
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  workId: Scalars['Int'];
};

export type UpdateAuthorInput = {
  id: Scalars['Int'];
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  workId?: Maybe<Scalars['Int']>;
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

export type WorksByTagIdsQueryVariables = Exact<{
  tagIds?: Maybe<Array<Scalars['Int']>>;
  count?: Maybe<Scalars['PaginationAmount']>;
}>;


export type WorksByTagIdsQuery = (
  { __typename?: 'Queries' }
  & { worksByTagIds?: Maybe<(
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

export type BackendTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type BackendTagsQuery = (
  { __typename?: 'Queries' }
  & { backendTags?: Maybe<Array<Maybe<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id' | 'title'>
  )>>> }
);

export type FrontendTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type FrontendTagsQuery = (
  { __typename?: 'Queries' }
  & { frontendTags?: Maybe<Array<Maybe<(
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

export type CountQueryVariables = Exact<{ [key: string]: never; }>;


export type CountQuery = (
  { __typename?: 'Queries' }
  & { works?: Maybe<(
    { __typename?: 'WorkConnection' }
    & Pick<WorkConnection, 'totalCount'>
  )> }
);

export type TagsQueryVariables = Exact<{ [key: string]: never; }>;


export type TagsQuery = (
  { __typename?: 'Queries' }
  & { tags?: Maybe<Array<Maybe<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id' | 'title'>
  )>>> }
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
      & Pick<Author, 'id' | 'name' | 'link' | 'role'>
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
export const WorksByTagIdsDocument = gql`
    query worksByTagIds($tagIds: [Int!], $count: PaginationAmount) {
  worksByTagIds(tagIds: $tagIds, first: $count) {
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
 * __useWorksByTagIdsQuery__
 *
 * To run a query within a React component, call `useWorksByTagIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorksByTagIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorksByTagIdsQuery({
 *   variables: {
 *      tagIds: // value for 'tagIds'
 *      count: // value for 'count'
 *   },
 * });
 */
export function useWorksByTagIdsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<WorksByTagIdsQuery, WorksByTagIdsQueryVariables>) {
        return ApolloReactHooks.useQuery<WorksByTagIdsQuery, WorksByTagIdsQueryVariables>(WorksByTagIdsDocument, baseOptions);
      }
export function useWorksByTagIdsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<WorksByTagIdsQuery, WorksByTagIdsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<WorksByTagIdsQuery, WorksByTagIdsQueryVariables>(WorksByTagIdsDocument, baseOptions);
        }
export type WorksByTagIdsQueryHookResult = ReturnType<typeof useWorksByTagIdsQuery>;
export type WorksByTagIdsLazyQueryHookResult = ReturnType<typeof useWorksByTagIdsLazyQuery>;
export type WorksByTagIdsQueryResult = ApolloReactCommon.QueryResult<WorksByTagIdsQuery, WorksByTagIdsQueryVariables>;
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
export const BackendTagsDocument = gql`
    query backendTags {
  backendTags {
    id
    title
  }
}
    `;

/**
 * __useBackendTagsQuery__
 *
 * To run a query within a React component, call `useBackendTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBackendTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBackendTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useBackendTagsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BackendTagsQuery, BackendTagsQueryVariables>) {
        return ApolloReactHooks.useQuery<BackendTagsQuery, BackendTagsQueryVariables>(BackendTagsDocument, baseOptions);
      }
export function useBackendTagsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BackendTagsQuery, BackendTagsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<BackendTagsQuery, BackendTagsQueryVariables>(BackendTagsDocument, baseOptions);
        }
export type BackendTagsQueryHookResult = ReturnType<typeof useBackendTagsQuery>;
export type BackendTagsLazyQueryHookResult = ReturnType<typeof useBackendTagsLazyQuery>;
export type BackendTagsQueryResult = ApolloReactCommon.QueryResult<BackendTagsQuery, BackendTagsQueryVariables>;
export const FrontendTagsDocument = gql`
    query frontendTags {
  frontendTags {
    id
    title
  }
}
    `;

/**
 * __useFrontendTagsQuery__
 *
 * To run a query within a React component, call `useFrontendTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFrontendTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFrontendTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFrontendTagsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FrontendTagsQuery, FrontendTagsQueryVariables>) {
        return ApolloReactHooks.useQuery<FrontendTagsQuery, FrontendTagsQueryVariables>(FrontendTagsDocument, baseOptions);
      }
export function useFrontendTagsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FrontendTagsQuery, FrontendTagsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FrontendTagsQuery, FrontendTagsQueryVariables>(FrontendTagsDocument, baseOptions);
        }
export type FrontendTagsQueryHookResult = ReturnType<typeof useFrontendTagsQuery>;
export type FrontendTagsLazyQueryHookResult = ReturnType<typeof useFrontendTagsLazyQuery>;
export type FrontendTagsQueryResult = ApolloReactCommon.QueryResult<FrontendTagsQuery, FrontendTagsQueryVariables>;
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
export const CountDocument = gql`
    query Count {
  works {
    totalCount
  }
}
    `;

/**
 * __useCountQuery__
 *
 * To run a query within a React component, call `useCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CountQuery, CountQueryVariables>) {
        return ApolloReactHooks.useQuery<CountQuery, CountQueryVariables>(CountDocument, baseOptions);
      }
export function useCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CountQuery, CountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CountQuery, CountQueryVariables>(CountDocument, baseOptions);
        }
export type CountQueryHookResult = ReturnType<typeof useCountQuery>;
export type CountLazyQueryHookResult = ReturnType<typeof useCountLazyQuery>;
export type CountQueryResult = ApolloReactCommon.QueryResult<CountQuery, CountQueryVariables>;
export const TagsDocument = gql`
    query tags {
  tags {
    id
    title
  }
}
    `;

/**
 * __useTagsQuery__
 *
 * To run a query within a React component, call `useTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTagsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TagsQuery, TagsQueryVariables>) {
        return ApolloReactHooks.useQuery<TagsQuery, TagsQueryVariables>(TagsDocument, baseOptions);
      }
export function useTagsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TagsQuery, TagsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TagsQuery, TagsQueryVariables>(TagsDocument, baseOptions);
        }
export type TagsQueryHookResult = ReturnType<typeof useTagsQuery>;
export type TagsLazyQueryHookResult = ReturnType<typeof useTagsLazyQuery>;
export type TagsQueryResult = ApolloReactCommon.QueryResult<TagsQuery, TagsQueryVariables>;
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
      id
      name
      link
      role
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