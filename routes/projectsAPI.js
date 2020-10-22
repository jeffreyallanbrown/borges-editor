const WritingProject = require('../mongo-schema/projectSchema');

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false,
  poolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4
};

module.exports = function(app){

  app.get('/api/projects', (req, res) => {
    WritingProject.find({}, function (err, projects) {
      if (err) return console.error(err);
      res.send(projects);
    });
  });

}
