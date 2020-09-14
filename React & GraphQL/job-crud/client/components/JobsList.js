import React, {Component} from 'react'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import { Link } from 'react-router-dom'

import query from '../queries/fetchJobsList'

class JobList extends Component {

    deleteJob(id) {
        this.props.mutate({
            variables: { id },
            refetchQueries: [{ query }]
        }).then(() =>  this.props.data.refetch())
    }
    renderJobs() {
        const {jobs} = this.props.data
        return jobs.map(({id, title}) => (
            <li key={id} className="collection-item">
                    <Link to={`/jobs/${id}`}>
                        {title}
                    </Link>
                <i
                    className="material-icons"
                    onClick={() => this.deleteJob(id)}
                >
                    delete
                </i>
            </li>
        ))
    }
    render() {
        const {loading} = this.props.data
        if(loading) { return <div>Loading....</div> }
        return (
            <div>
                <h3 className="headline">List of Jobs</h3>
                <ul className="collection">
                    {this.renderJobs()}
                </ul>
                <Link to="/jobs/new" className="btn-floating btn-large red right">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        )
    }
}

const mutation = gql`
    mutation DeleteJob($id: ID) {
        deleteJob(id: $id) {
            id
        }
    }
`
export default compose(
    graphql(mutation),
    graphql(query))(JobList)
