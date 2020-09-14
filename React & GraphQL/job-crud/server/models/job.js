const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JobSchema = new Schema({
  title: { type: String },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  jobDescription: [{
    type: Schema.Types.ObjectId,
    ref: 'jobDescription'
  }]
})

JobSchema.statics.addJobDescription = function(id, content) {
  const JobDescription = mongoose.model('jobDescription')

  return this.findById(id)
    .then(job => {
      const jobDescription = new JobDescription({ content, job })
      job.jobsDescription.push(jobDescription)
      return Promise.all([jobDescription.save(), job.save()])
        .then(([jobDescription, job]) => job)
    })
}

JobSchema.statics.findJobsDescription = function(id) {
  return this.findById(id)
    .populate('jobsDescription')
    .then(job => job.jobsDescription)
}

mongoose.model('job', JobSchema)
