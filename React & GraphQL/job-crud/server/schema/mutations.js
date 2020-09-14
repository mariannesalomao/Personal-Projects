const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql
const mongoose = require('mongoose')
const Job = mongoose.model('job')
const JobDescription = mongoose.model('jobDescription')
const JobType = require('./job_type')
const JobDescriptionType = require('./job_description_type')

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addJob: {
      type: JobType,
      args: {
        title: { type: GraphQLString }
      },
      resolve(parentValue, { title }) {
        return (new Job({ title })).save()
      }
    },
    addJobDescriptionToJob: {
      type: JobType,
      args: {
        content: { type: GraphQLString },
        jobId: { type: GraphQLID }
      },
      resolve(parentValue, { content, jobId }) {
        return Job.addJobDescription(jobId, content)
      }
    },
    likeJobDescription: {
      type: JobDescriptionType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return JobDescription.like(id)
      }
    },
    deleteJob: {
      type: JobType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Job.remove({ _id: id })
      }
    }
  }
})

module.exports = mutation
