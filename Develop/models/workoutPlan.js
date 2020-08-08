const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutPlanSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a workout type"
  },
  value: {
    type: String,
    trim: true,
    required: "Enter workout name"
  },
  duration: {
    type: Number,
    require: "Enter workout duration i minutes"
  },
  weight: {
      type: Number
  },
  reps: {
      type: Number
  },
  Sets: {
      type: Number
  },
  distance: {
      type: Number
  }
},


{
    toJSON: {
      // include any virtual properties when data is requested
    virtuals: true
    }
  }
);
// adds a dynamially-created property to schema
workoutPlanSchema.virtual("totalDuration").get(function () {
    // "reduces" array of workout down to sum of duration
    return this.workouts.reduce((total, exercise) => {
        return total + workouts.duration;
    }, 0);
});
const Transaction = mongoose.model("workoutPlan", workoutPlanSchema);

module.exports = workoutPlan;
