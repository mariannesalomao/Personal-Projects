import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'

import jobQuery from '../queries/fetchJob'
import JobDescriptionCreate from './JobDescriptionCreate'
import JobDescriptionList from './JobDescriptionList'

class JobDetail extends Component {
    render() {
        const { job } = this.props.data
        if(!job) {return null}

        return (
            <div>
                <Link to="/"> Back</Link>
                <h4>{job.title}</h4>
                <JobDescriptionList jobsDescription={job.jobsDescription}/>
                <JobDescriptionCreate jobId={this.props.match.params.id}/>
            </div>
        )
    }
}

export default graphql(jobQuery, {
    options: (props) => { return { variables: { id: props.match.params.id }}}
})(JobDetail)
