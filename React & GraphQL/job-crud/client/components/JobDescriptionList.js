import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class JobDescriptionList extends Component {

    onLike(id, likes) {
        this.props.mutate({
            variables: {id},
            optimisticResponse: {
                __typename: 'mutation',
                likeJobDescription: {
                    __typename: 'JobDescriptionType',
                    id,
                    likes: likes + 1
                }
            }
        })
    }
    renderJobsDescription() {
        const {jobsDescription} =  this.props
        return jobsDescription.map(({id, content, likes}) => (
            <li key={id} className="collection-item">
                {content}
                <div className="vote-box">
                    <i className="material-icons" onClick={() => this.onLike(id, likes)}>thumb_up</i>
                    {likes}
                </div>
            </li>
        ))
    }
    render() {
        return (
            <ul className="collection">
                {this.renderJobsDescription()}
            </ul>
        )
    }
}

const mutation = gql`
    mutation LikeJobDescription($id: ID) {
        likeJobDescription(id: $id) {
        id
        likes
        }
    }
`
export default graphql(mutation)(JobDescriptionList)
