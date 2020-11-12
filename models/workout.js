const mongoose = require("mongoose");


const Schema = mongoose.Schema;


//schema instructor
const workoutsSchema = new Schema(
      {
            day: {
                  type: Date,
                  default: () => new Date()
            },
            exercises: [
                  {
                        type: {
                              type: String,
                              trim: true,
                              required:true
                        },
                        name: {
                              type: String,
                              trim: true,
                              required:true
                        },
                        duration: {
                              type: Number,
                              required:true
                        },
                        weight: {
                              type: Number
                        },
                        reps: {
                              type: Number
                        },
                        sets: {
                              type: Number
                        },
                        distance: {
                              type: Number
                        }
                  }
            ]
      },

      {timestamps: true}

);


//remember the name shoud be singular it
//looks for plural inside the MondoDB
const Workout = mongoose.model("Workout", workoutsSchema);

module.exports = Workout;