const express = require('express')
const consumeController = require('../../controllers/consumeController')
const { getAllActivities, getOneActivity, createNewActivity, updateOneActivity, deleteOneActivity } = consumeController

const router = express.Router()

router.get("/", getAllActivities);

router.get("/:activityId", getOneActivity);

router.post("/", createNewActivity);

router.patch("/:activityId", updateOneActivity);

router.delete("/:activityId", deleteOneActivity);

module.exports = router;