const db = require("../models");

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
       const id = req.params.id
        db.Workout.update({_id:id}, {
            exercises:{$push:req.body}
        })
    })
    app.get("/api/workouts/range", function(req, res) {
        db.Workout.find().then(function(results){
            res.json(results)
        })

    })
}
module.exports = apiRoutes;