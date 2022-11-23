const { v4: uuid } = require('uuid')
const Activity = require('../database/Activity')

const getAllActivities = () => {
  const allActivities = Activity.getAllActivities()
  return allActivities
}

const getOneActivity = (activityId) => {
  const activity = Activity.getOneActivity(activityId)
  return activity
}

const createNewActivity = (newActivity) => {
  const activityToInsert = {
    ...newActivity,
    id: uuid(),
    createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
  }
  const createdActivity = Activity.createNewActivity(activityToInsert)
  return createdActivity
}

const updateOneActivity = (activityId, changes) => {
  const updatedActivity = Activity.createNewActivity(activityId, changes)
  return updatedActivity
}

const deleteOneActivity = (activityId) => {
  Activity.deleteOneActivity(activityId)
}

module.exports = {
  getAllActivities,
  getOneActivity,
  createNewActivity,
  updateOneActivity,
  deleteOneActivity
}