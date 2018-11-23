/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateBookInput = {
  id?: string | null,
  title: string,
  programCode?: string | null,
  classCode?: string | null,
};

export type UpdateBookInput = {
  id: string,
  title?: string | null,
  programCode?: string | null,
  classCode?: string | null,
};

export type DeleteBookInput = {
  id?: string | null,
};

export type CreatePostInput = {
  id?: string | null,
  title: string,
  ownerID: string,
  description?: string | null,
  postBookId?: string | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  ownerID?: string | null,
  description?: string | null,
  postBookId?: string | null,
};

export type DeletePostInput = {
  id?: string | null,
};

export type ModelBookFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  programCode?: ModelStringFilterInput | null,
  classCode?: ModelStringFilterInput | null,
  and?: Array< ModelBookFilterInput | null > | null,
  or?: Array< ModelBookFilterInput | null > | null,
  not?: ModelBookFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  ownerID?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type CreateBookMutationVariables = {
  input: CreateBookInput,
};

export type CreateBookMutation = {
  createBook:  {
    __typename: "Book",
    id: string,
    title: string,
    programCode: string | null,
    classCode: string | null,
    posts:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        ownerID: string,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateBookMutationVariables = {
  input: UpdateBookInput,
};

export type UpdateBookMutation = {
  updateBook:  {
    __typename: "Book",
    id: string,
    title: string,
    programCode: string | null,
    classCode: string | null,
    posts:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        ownerID: string,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteBookMutationVariables = {
  input: DeleteBookInput,
};

export type DeleteBookMutation = {
  deleteBook:  {
    __typename: "Book",
    id: string,
    title: string,
    programCode: string | null,
    classCode: string | null,
    posts:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        ownerID: string,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
};

export type CreatePostMutation = {
  createPost:  {
    __typename: "Post",
    id: string,
    title: string,
    ownerID: string,
    description: string | null,
    book:  {
      __typename: "Book",
      id: string,
      title: string,
      programCode: string | null,
      classCode: string | null,
    } | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
};

export type UpdatePostMutation = {
  updatePost:  {
    __typename: "Post",
    id: string,
    title: string,
    ownerID: string,
    description: string | null,
    book:  {
      __typename: "Book",
      id: string,
      title: string,
      programCode: string | null,
      classCode: string | null,
    } | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
};

export type DeletePostMutation = {
  deletePost:  {
    __typename: "Post",
    id: string,
    title: string,
    ownerID: string,
    description: string | null,
    book:  {
      __typename: "Book",
      id: string,
      title: string,
      programCode: string | null,
      classCode: string | null,
    } | null,
  } | null,
};

export type GetBookQueryVariables = {
  id: string,
};

export type GetBookQuery = {
  getBook:  {
    __typename: "Book",
    id: string,
    title: string,
    programCode: string | null,
    classCode: string | null,
    posts:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        ownerID: string,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListBooksQueryVariables = {
  filter?: ModelBookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBooksQuery = {
  listBooks:  {
    __typename: "ModelBookConnection",
    items:  Array< {
      __typename: "Book",
      id: string,
      title: string,
      programCode: string | null,
      classCode: string | null,
      posts:  {
        __typename: "ModelPostConnection",
        items:  Array< {
          __typename: "Post",
          id: string,
          title: string,
          ownerID: string,
          description: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost:  {
    __typename: "Post",
    id: string,
    title: string,
    ownerID: string,
    description: string | null,
    book:  {
      __typename: "Book",
      id: string,
      title: string,
      programCode: string | null,
      classCode: string | null,
    } | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      ownerID: string,
      description: string | null,
      book:  {
        __typename: "Book",
        id: string,
        title: string,
        programCode: string | null,
        classCode: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateBookSubscription = {
  onCreateBook:  {
    __typename: "Book",
    id: string,
    title: string,
    programCode: string | null,
    classCode: string | null,
    posts:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        ownerID: string,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateBookSubscription = {
  onUpdateBook:  {
    __typename: "Book",
    id: string,
    title: string,
    programCode: string | null,
    classCode: string | null,
    posts:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        ownerID: string,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteBookSubscription = {
  onDeleteBook:  {
    __typename: "Book",
    id: string,
    title: string,
    programCode: string | null,
    classCode: string | null,
    posts:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        ownerID: string,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost:  {
    __typename: "Post",
    id: string,
    title: string,
    ownerID: string,
    description: string | null,
    book:  {
      __typename: "Book",
      id: string,
      title: string,
      programCode: string | null,
      classCode: string | null,
    } | null,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost:  {
    __typename: "Post",
    id: string,
    title: string,
    ownerID: string,
    description: string | null,
    book:  {
      __typename: "Book",
      id: string,
      title: string,
      programCode: string | null,
      classCode: string | null,
    } | null,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost:  {
    __typename: "Post",
    id: string,
    title: string,
    ownerID: string,
    description: string | null,
    book:  {
      __typename: "Book",
      id: string,
      title: string,
      programCode: string | null,
      classCode: string | null,
    } | null,
  } | null,
};
