const Stories = require('../model/storiesModel'); // storie model file 
const ErrorHander = require("../lib/errorhander"); // error file 
const tryCatchError = require('../middleware/tryCatchError'); // tryCatch error file 

//for new story create
exports.addStorie = tryCatchError(async (req, res, next) => {
     const getStories = await Stories.create(req.body);
     if (!getStories) {
          return next(new ErrorHander("Story is not found", 404));
     }
     res.status(201).json({
          success: true,
          getStories,
     });
});
//for get all stories
exports.getStorie = tryCatchError(async (req, res, next) => {
     const getStories = await Stories.find().sort({ title: 1 });
     if (getStories == "") {
          return next(new ErrorHander("Story is  not found", 404));
     }
     res.status(200).json({
          success: true,
          getStories,
     });
});
//for get random story
exports.getRandomStorie = tryCatchError(async (req, res, next) => {
     const getStories = await Stories.aggregate(
          [{ $sample: { size: 1 } }]
     );
     if (getStories == "") {
          return next(new ErrorHander("Story is not found", 404));
     }
     res.status(200).json({
          success: true,
          getStories,
     });
});
//for get single story
exports.getStorieDetails = tryCatchError(async (req, res, next) => {
     const getStorie = await Stories.findById(req.params.id);
     if (!getStorie) {
       return next(new ErrorHander("Story is not found", 404));
     }   
     res.status(200).json({
       success: true,
       getStorie,
     });
}); 
//for update single story
exports.updateStorieDetails = tryCatchError(async (req, res, next) => {
     const _id = req.params.id;
     const { title, discription } = req.body;
     const getStorie = await Stories.findByIdAndUpdate(_id, { title, discription }, {new: true} )
     if (!getStorie) {
       return next(new ErrorHander("Story is not found", 404));
     }   
     res.status(200).json({
       success: true,
       getStorie,
     });
}); 
//for delete  story
exports.deleteStoriey = tryCatchError(async (req, res, next) => {
     const getStorie = await Stories.findByIdAndRemove(req.params.id, {new: true});
     if (!getStorie) {
           return next(new ErrorHander("Story is not found", 404));
     }   
     res.status(200).json({
          success: true,
          getStorie,
     });
});