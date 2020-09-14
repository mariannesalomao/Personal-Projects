import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class JobDescriptionCreate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            content: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { content } = this.state
        const { jobId } = this.props
        this.props.mutate({
            variables: {
                content,
                jobId
            }
        }).then(() => this.setState({content: ''}))
    }
    render() {
        const { content } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Add a description job</label>
                <input
                    value={content}
                    onChange={evt => this.setState({content: evt.target.value})}
                />
            </form>
        )
    }
}

const mutation = gql`
    mutation AddJobDescription($content: String, $jobId: ID) {
        addJobDescriptionToJob(content: $content, jobId: $jobId) {
            id
            jobsDescription {
                id
                content
                likes
            }
        }
    }
`

export default graphql(mutation)(JobDescriptionCreate)
