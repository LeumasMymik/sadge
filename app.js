const express = require('express')
require('dotenv').config();
const path = require('path');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser'); 
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const app = express()
const https = require('https');


// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// Data parsing
app.use(express.urlencoded({
    extended: false
  }));
  app.use(express.json());

//view engine 
app.set('view engine', 'ejs');


// database connection
const dbURI = 'mongodb+srv://david:test1234@cluster0.04lp8.mongodb.net/Cluster0';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(process.env.PORT))
  .catch((err) => console.log(err));

app.get('*', checkUser);
app.get('/', (req, res) => res.render('index', {title: "Homepage"})); 
app.get('/legal/tos', (req, res) => res.render('legal/tos', {title: "Terms"})); 
app.get('/login', (req, res) => res.render('login', {title: "Login"})); 


//exclusive pages
app.get('/merch', requireAuth, (req, res) => res.render('merch', {title: "Merch"}));
app.get('/blogs', requireAuth, (req, res) => res.render('blogs', {title: "Blogs"}));
app.get('/news', requireAuth, (req, res) => res.render('news', {title: "News"}));

app.use(authRoutes);
