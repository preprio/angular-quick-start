export const GetPosts = `
query {
    Posts {
        items {
            _id
            _slug
            title
        }
    }
}
`