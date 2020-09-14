const mongoose = require('mongoose')
const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql
const JobDescriptionType = require('./job_description_type')
const Job = mongoose.model('job')

const JobType = new GraphQLObjectType({
  name:  'JobType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    jobsDescription: {
      type: new GraphQLList(JobDescriptionType),
      resolve(parentValue) {
        return Job.findJobsDescription(parentValue.id)
      }
    }
  })
})

module.exports = JobType
