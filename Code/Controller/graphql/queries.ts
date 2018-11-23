// tslint:disable
// this is an auto generated file. This will be overwritten

export const getBook = `query GetBook($id: ID!) {
  getBook(id: $id) {
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
export const listBooks = `query ListBooks(
  $filter: ModelBookFilterInput
  $limit: Int
  $nextToken: String
) {
  listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
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
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
