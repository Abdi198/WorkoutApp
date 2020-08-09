const db = require("../models");
const mongoose = require("mongoose")
function apiRoutes(app) {
    app.get("/api/workouts", function(req, res) {
        db.Workout.find().then(function(results){
            res.json(results)
        })
    })

    app.post("/api/workouts", function(req, res) {
        console.log(req.body)
        db.Workout.create(req.body).then(function(results){
            res.json(results)
        })
    })
    app.put("/api/workouts/:id", function(req, res) {
       const id =  mongoose.Types.ObjectId(req.params.id) 
       console.log(id)
       console.log(req.body)
        db.Workout.updateOne({_id:  id}, {
            $push:{exercises:req.body}
        },function(results){
            res.json(results)
        })
    })
    app.get("/api/workouts/range", function(req, res) {
        db.Workout.find().then(function(results){
            res.json(results)
        })

    })
}
module.exports = apiRoutes;