var ArtistController            = require('./controllers/artists'),
    AuthController            = require('./controllers/auth'),
    express                   = require('express'),
    passport                  = require('passport'),
    multer                    = require('multer');

var requireAuth = passport.authenticate('jwt', {session: false}),
    requireLogin = passport.authenticate('local', {session: false});

module.exports = (app) => {

    var apiRoutes     = express.Router(),
        authRoutes    = express.Router(),
        artistRoutes    = express.Router();

    // Auth Routes
    apiRoutes.use('/auth', authRoutes);
    authRoutes.post('/register', AuthController.register);

    // Artist Routes
    apiRoutes.use('/artists', artistRoutes);
    artistRoutes.get('/:artist_id', ArtistController.getArtist);
    artistRoutes.get('/', ArtistController.getTodos);
    artistRoutes.post('/', ArtistController.createArtist);
    artistRoutes.put('/:artist_id', ArtistController.updateArtist);
    artistRoutes.delete('/:artist_id', ArtistController.deleteArtist);

    // Set up routes
    app.use('/api/v1', apiRoutes);

    apiRoutes.use((req, res, next) => {
      res.status(404).send("Not found");
    });

    apiRoutes.get('/', (req, res) => {
      res.status(200).send('Basic Api V1');
    })

}
