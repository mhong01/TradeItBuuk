// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateBook = `subscription OnCreateBook {
  onCreateBook {
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
export const onUpdateBook = `subscription OnUpdateBook {
  onUpdateBook {
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
export const onDeleteBook = `subscription OnDeleteBook {
  onDeleteBook {
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
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
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
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
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
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
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
