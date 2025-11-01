const Workout = require('../models/workoutModel') // import the Workout model to interact with the workouts collection in the database
const mongoose = require('mongoose') // import mongoose library to work with MongoDB object IDs

// get all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({createdAt: -1})//.find({}) is used to get all workouts (SELECT * FROM workouts), and sort({createdAt: -1}) sorts them in descending order based on creation date

  res.status(200).json(workouts) // send back the workouts as JSON with a 200 OK status
}

// get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params // extract the id from the request parameters as a constant named id

  if (!mongoose.Types.ObjectId.isValid(id)) { // check if the provided id is a valid MongoDB ObjectId
    return res.status(404).json({error: 'No such workout'})
  }

  const workout = await Workout.findById(id)

  if (!workout) {
    return res.status(404).json({error: 'No such workout'})
  }

  res.status(200).json(workout)
}

// create a new workout
const createWorkout = async (req, res) => {
  const {title, load, reps} = req.body

  // track which fields are empty
  let emptyFields = [] 

  if (!title) {
    emptyFields.push('title')
  }
  if (!load) {
    emptyFields.push('load')
  }
  if (!reps) {
    emptyFields.push('reps')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  // add to the database
  try {
    const workout = await Workout.create({ title, load, reps })
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such workout'})
  }

  // delete the workout and is stored in a variable
  const workout = await Workout.findOneAndDelete({_id: id})
  //const workout = await Workout.findByIdAndDelete(id)

  // check if workout existed
  if(!workout) {
    return res.status(400).json({error: 'No such workout'})
  }

  // return the deleted workout to client for confirmation
  res.status(200).json(workout)
}

// update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such workout'})
  }

  const workout = await Workout.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!workout) {
    return res.status(400).json({error: 'No such workout'})
  }

  res.status(200).json(workout)
}

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
}