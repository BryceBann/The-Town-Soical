import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      posts {
        _id
        postText
        postAuthor
        likeCount
        commentCount
        createdAt
        likes {
          _id
          liker
          createdAt
        }
        comments {
          commentAuthor
          commentText
          createdAt
          _id
        }
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query posts {
    posts {
      postText
      postAuthor
      _id
      createdAt
      likeCount
      commentCount
      likes {
        _id
        liker
        createdAt
      }
      comments {
        commentAuthor
        commentText
        createdAt
        _id
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      posts {
        _id
        postText
        postAuthor
        likeCount
        commentCount
        createdAt
        likes {
          _id
          liker
          createdAt
        }
        comments {
          commentAuthor
          commentText
          createdAt
          _id
        }
      }
    }
  }
`;

export const QUERY_LIKED = gql `
query likes {
  me {
    _id
    username
    email
    posts {
      _id
      postText
      postAuthor
      likeCount
      commentCount
      createdAt
  }
  likes {
    _id
    liker
    createdAt
  }
}
}
`;

export const QUERY_USERS = gql`
query{
  users {
    username
    _id
    email
    posts {
      _id
      postText
      postAuthor
      likes {
        _id
        liker
      }
      comments {
        _id
        commentText
        commentAuthor
      }
    }
  }
}
`;