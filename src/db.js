const mongoose = require('mongoose');

mongoose.createConnection(process.env.MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log('Connected to database!')
);
