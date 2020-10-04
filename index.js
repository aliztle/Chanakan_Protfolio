const express = require('express');
const router = require('./routes/index');
const hbs = require('express-handlebars');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.static(path.join(__dirname,'public')));
//Template engine 
app.engine('hbs',hbs({extname:'hbs'}));
app.set('view engine', 'hbs');

//router
app.use('/', router);

app.listen(
    PORT,
    () => {
      console.log(`Listening to port ${PORT}`);
    }
  );
  