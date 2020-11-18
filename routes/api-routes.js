const db = require("../models");

module.exports = (app) => {
    // read all
    app.get("/api/workouts", (request, response) => {
        db.Workout.find({})
        .then((dbWorkouts) => { response.json(dbWorkouts); })
        .catch((err) => response.json(err));
    });

    // create
    app.post("/api/workouts", (request, response) => {
        db.Workout.create({})
        .then((workout) => { response.json(workout); })
        .catch((err) => { response.json(err); });
    });

    // update route
    // app.put("/api/workouts/:id", (request, response) => {
    //     db.Workout.updateOne({ _id: request.params.id }, )
    // })
};