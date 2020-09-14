import gql from 'graphql-tag'

export default gql`
    query JobQuery($id: ID!) {
        job(id: $id) {
            id,
            title
            jobsDescription {
                id
                content
                likes
            }
        }
    }
`
