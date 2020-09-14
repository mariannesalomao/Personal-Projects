const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JobDescriptionSchema = new Schema({
  job: {
    type: Schema.Types.ObjectId,
    ref: 'job'
  },
  likes: { type: Number, default: 0 },
  content: { type: String }
})

JobDescriptionSchema.statics.like = function(id) {
  const JobDescription = mongoose.model('jobDescription')

  return JobDescription.findById(id)
    .then(jobDescription => {
      ++jobDescription.likes
      return jobDescription.save()
    })
}

mongoose.model('jobDescription', JobDescriptionSchema)
