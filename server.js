const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require("cors")
const app = express();
app.use(express.json());
//app.use(bodyParser());
const bodyParser = require('body-parser');
app.use(bodyParser.json({ type: 'application/json' }));


//app.use(cors())

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
const PORT =  process.env.PORT || 5001;

const db = 'mongodb+srv://shoukri:A123A123@cluster0.51n2q.mongodb.net/TodoList';

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log('connected to MongoDB'))
  .catch((err) => console.log(err));

const todoSchema = new mongoose.Schema({
  title: String,
  complete: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model('todo', todoSchema);

app.get('/todos', (req, res) => {
  Todo.find().then((todo) => res.json(todo));
  //res.send('Hello World!');
});

app.post('/todos', (req, res) => {
  console.log(req.body, 'SDFSDF');
  const newTodo = new Todo({
    title: req.body.title,
  });
  newTodo.save();
  res.send(newTodo);
  console.log('done');
});

app.delete('/todos/:id', function (req, res) {
  Todo.findByIdAndDelete(req.params.id).then(() => res.json({ remove: true }));
});

app.put('/todos/:id', (req, res) => {
  var id = req.params.id;
  Todo.findOne({ _id: id }, (err, foundObject) => {
    if (err) {
      console.log(err);
    } else {
      foundObject.complete = !foundObject.complete;
      res.send(foundObject);
    }
    foundObject.save()
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
