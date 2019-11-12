const express = require('express');
const app = express();

const store = {
  home: {
    page: 'My Super Awesome App',
    content: 'Home, sweet home'
  },
  about: {
    page: 'About Page',
    content: 'Personal stuff'
  },
  downloads: {
    page: 'Downloads Page',
    content: 'Downloads'
  },
  profile: {
    page: 'Profile Page',
    content: 'This is your profile, friend...'
  },
};

app.disable('x-powered-by');
app.set('view engine', 'pug');

app.use(function(req, res, next) {
  console.log('%s %s', req.method, req.url);
  next();
});

app.use(express.static(__dirname + '/public'))

app.get('/:page?', function(req, res) {
  let page = req.params.page, data;
  if (!page) {
    page = 'home'; 
  }
  data = store[page];
  data.links = Object.keys(store);
  res.render('main', data);
});

let server = app.listen(process.env.PORT || 5000, function() {
  console.log('Listening on port 3000');
});
