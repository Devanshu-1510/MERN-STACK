const mongoose = require('mongoose');
// Allow Promises
mongoose.Promise = global.Promise;
// Connection
mongoose.connect('mongodb+srv://devanshusaini2580:devanshu@cluster0.xdwifqc.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });
// Validation
mongoose.connection
  .once('open', () => console.log('Connected to the database!'))
  .on('error', err => console.log('Error with the database!', err));