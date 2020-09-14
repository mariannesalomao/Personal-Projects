const mongoose = require('mongoose')
const graphql = require('graphql')
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql
const JobType = require('./job_type')
const JobDescriptionType = require('./job_description_type')
const JobDescription = mongoose.model('jobDescription')
const Job = mongoose.model('job')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    jobs: {
      type: new GraphQLList(JobType),
      resolve() {
        return Job.find({})
      }
    },
    job: {
      type: JobType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Job.findById(id)
      }
    },
    jobDescription: {
      type: JobDescriptionType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parnetValue, { id }) {
        return JobDescription.findById(id)
      }
    }
  })
})

module.exports = RootQuery
