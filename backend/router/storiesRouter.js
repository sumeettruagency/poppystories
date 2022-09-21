const expres = require('express');
const storiesController = require('../controller/storiesController'); // stories controller file
const Route = expres.Router();
//for create new story
Route.route("/create_stories")
     .post(storiesController.addStorie);
//for get all stories
Route.route("/stories")
     .get(storiesController.getStorie);
//for get random story
Route.route("/random_story")
     .get(storiesController.getRandomStorie);
//for get,  update  and delete single  story
Route.route("/single_story/:id")
     .get(storiesController.getStorieDetails)
     .put(storiesController.updateStorieDetails)
     .delete(storiesController.deleteStoriey);

module.exports = Route
