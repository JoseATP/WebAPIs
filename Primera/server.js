var express      = require('express'),
  app            = express(),
  logger         = require('morgan'),
  bodyParser     = require('body-parser'),
  cors           = require('cors'),
  router         = require('./routes');

var port = process.env.PORT || 8088;

app.listen(port);
console.log("App listening on port " + port);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());

router(app);
