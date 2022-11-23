const DB = require('./db.json')
const { saveToDatabase } = require('./utils')

const getAllActivities = () => {
  return DB.activities
}

const getOneActivity = (activityId) => {
  const activity = DB.activities.find((activity) => activity.id === activityId)
  if (!activity) {
    return
  }
  return activity
}

const createNewActivity = (newActivity) => {
  const isAlreadyAdded = 
    DB.activities.findIndex((activity) => activity.name === newActivity.name) > -1
  if (isAlreadyAdded) {
    return
  }
  DB.activities.push(newActivity)
  saveToDatabase(DB)
  return newActivity
}

const updateOneActivity = (activityId, changes) => {
  const indexForUpdate =  DB.activities.findIndex(
    (activity) => activity.id === activityId
  )
  if (indexForUpdate === -1) {
    return
  }
  const updatedActivity = {
    ...DB.activities[indexForUpdate],
    ...changes,
    updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' })
  }
  DB.activities[indexForUpdate] = updatedActivity
  saveToDatabase(DB)
  return updatedActivity
}

const deleteOneActivity = (activityId) => {
  const indexForDeletion = DB.activities.findIndex(
    (activity) => activity.id === activityId
  )
  if (indexForDeletion === -1) {
    return
  }
  DB.activities.splice(indexForDeletion, 1)
  saveToDatabase(DB)
}

module.exports = { 
  getAllActivities,
  getOneActivity,
  createNewActivity,
  updateOneActivity,
  deleteOneActivity
}
