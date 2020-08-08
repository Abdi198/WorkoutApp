const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutPlanSchema = new Schema({
  day: {
    type: Date, 
    default: new Date().setDate(new Date().getDate())
  },
  exercises: Array
})
 
const workoutPlan = mongoose.model("workoutPlan", workoutPlanSchema);

module.exports = workoutPlan;
