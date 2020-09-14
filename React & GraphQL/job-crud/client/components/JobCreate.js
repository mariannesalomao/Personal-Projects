import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import query from '../queries/fetchJobsList'

class JobCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const {title} = this.state
        const { history } = this.props

        this.props.mutate({
            variables: { title },
            refetchQueries: [{ query }]
        }).then(() =>  history.push('/'))
    }
    render() {
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>Create a new Job!</h3>
                <form onSubmit={this.handleSubmit}>
                <label>Job Title:</label>
                    <input
                        label="Job Title:"
                        onChange={e => this.setState({title: e.target.value})}
                        value={this.state.title}
                    />
                </form>
            </div>
        )
    }
}

const mutation = gql`
    mutation AddJob($title: String){
        addJob(title: $title) {
            id,
            title,
        }
    }
`
export default graphql(mutation)(JobCreate)
