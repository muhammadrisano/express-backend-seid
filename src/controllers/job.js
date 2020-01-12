const jobModels = require('../models/job')
const MiscHelper = require('../helpers/helpers')

module.exports = {
  getJob: (req, res) => {
    jobModels.getJob()
      .then((resultJob) => {
        const result = resultJob
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  insertJob: (req, res) => {
    const { 
      skill_id,
      requestor_name,
      date,
      start_time,
      duration,
      talent_quantity,
      location_latitude,
      loation_longitude,
      location_name,
      location_note,
      description,
    }
    const data = {
      skill_id,
      requestor_name,
      date,
      start_time,
      duration,
      talent_quantity,
      location_latitude,
      loation_longitude,
      location_name,
      location_note,
      description,
      modified_by: new Date(),
      created_by: new Date(),
    }
    jobModels.insertJob(data)
      .then((resultJob) => {
        const result = resultJob
        MiscHelper.response(res, result, 201, data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateJob: (req, res) => {
    const job_id = req.params.job_id
    const {
      skill_id,
      requestor_name,
      date,
      start_time,
      duration,
      talent_quantity,
      location_latitude,
      loation_longitude,
      location_name,
      location_note,
      description,
    }
    const data = {
      skill_id,
      requestor_name,
      date,
      start_time,
      duration,
      talent_quantity,
      location_latitude,
      loation_longitude,
      location_name,
      location_note,
      description,
      modified_by: new Date(),
    }
    jobModels.updateJob(job_id, data)
      .then((resultJob) => {
        const result = resultJob
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteJob: (req, res) => {
    const job_id = req.params.job_id
    jobModels.deleteJob(job_id)
      .then((resultJob) => {
        const result = resultJob
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
