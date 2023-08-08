import { gql } from 'apollo-angular'

export const GetArticles = gql`
  query {
    Articles {
    items {
      _id
      _slug
      title
    }
  }
 }
`
