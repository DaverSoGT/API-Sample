const bodyParser = require('body-parser')
const consumeService = require('../services/consumeService')

const getAllActivities = (req, res) => {
  const allActivities = consumeService.getAllActivities()
  res.send({ status: 'OK', data: allActivities})
}

const getOneActivity = (req, res) => {
  const {
    params: { activityId },
  } = req
  if (!activityId) {
    return
  }
  const activity = consumeService.getOneActivity(activityId)
  res.send({ status: 'OK', data: activity })
}

const createNewActivity = (req, res) => {
  const { body } = req
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return
  }
  const newActivity = {
    name: body.name,
    mode: body.mode,
    equimpent: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips
  }
  const createdActivity = consumeService.createNewActivity(newActivity)
  res.status(201).send({ status: 'OK', data: createdActivity })
}

const updateOneActivity = (req, res) => {
  const {
    body,
    params: { activityId },
  } = req
  if (!activityId) {
    return
  }
  const updatedActivity = consumeService.updateOneActivity(activityId, body)
  res.send({ status: 'OK', data: updatedActivity })
}

const deleteOneActivity = (req, res) => {
  const {
    params: { activityId },
  } = req
  if (!activityId) {
    return
  }
  consumeService.deleteOneActivity(activityId)
  res.status(204).send({ status: 'OK' })
}

module.exports = {
  getAllActivities,
  getOneActivity,
  createNewActivity,
  updateOneActivity,
  deleteOneActivity
}