// tslint:disable
// this is an auto generated file. This will be overwritten

export const createBook = `mutation CreateBook($input: CreateBookInput!) {
  createBook(input: $input) {
    id
    title
    programCode
    classCode
    posts {
      items {
        id
        title
        ownerID
        description
      }
      nextToken
    }
  }
}
`;
export const updateBook = `mutation UpdateBook($input: UpdateBookInput!) {
  updateBook(input: $input) {
    id
    title
    programCode
    classCode
    posts {
      items {
        id
        title
        ownerID
        description
      }
      nextToken
    }
  }
}
`;
export const deleteBook = `mutation DeleteBook($input: DeleteBookInput!) {
  deleteBook(input: $input) {
    id
    title
    programCode
    classCode
    posts {
      items {
        id
        title
        ownerID
        description
      }
      nextToken
    }
  }
}
`;
export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    title
    ownerID
    description
    book {
      id
      title
      programCode
      classCode
    }
  }
}
`;
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
    id
    title
    ownerID
    description
    book {
      id
      title
      programCode
      classCode
    }
  }
}
`;
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
    id
    title
    ownerID
    description
    book {
      id
      title
      programCode
      classCode
    }
  }
}
`;
