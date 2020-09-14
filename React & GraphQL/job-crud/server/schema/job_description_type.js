const mongoose = require('mongoose')
const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql
const JobDescription = mongoose.model('jobDescription')

const JobDescriptionType = new GraphQLObjectType({
  name:  'JobDescriptionType',
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
    jobDescription: {
      type: require('./job_type'),
      resolve(parentValue) {
        return JobDescription.findById(parentValue).populate('jobDescription')
          .then(jobDescription => {
            return jobDescription.jobDescription
          })
      }
    }
  })
})

module.exports = JobDescriptionType
