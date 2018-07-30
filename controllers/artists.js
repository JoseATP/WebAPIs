var Artist = require('../models/artist');

exports.getTodos = (req, res, next) => {

  Artist.find({}, (err, artists) => {

      if(err){
          return res.send(err);
      }

      return res.status(200).json(artists);
  });

}

exports.getArtist = (req, res, next) => {

    let artistId =  req.params.artist_id;

    Artist.findOne({_id:artistId}, (err, artist) => {
        if(err){
            return res.send(err);
          }

          return res.status(200).json(artist);
    });

}

exports.updateArtist= (req, res, next) => {

    var artist =  req.params.artist_id;
    Artist.findByIdAndUpdate(artist,req.body, {new: true},(err, _artist) => {
        if(err)
        res.send(err);
        res.json("Artist "+ artist + " updated" +_artist);
    });
   

}

exports.createArtist = (req, res, next) => {

    let name = req.body.name;

    if(!name){
        return res.status(400).send({error: 'You must enter a name'});
    }

    let artist = new Artist(req.body);

    artist.save(function(err, _artist){

        if(err){
          return next(err);
        }

        res.status(201).json({
          artist: _artist
        });

      });

}

exports.deleteArtist = (req, res, next) => {

    var artist =  req.params.artist_id;
        
    Artist.findByIdAndRemove(artist,(err, _artist) => {
        if(err)
        res.send(err);
        res.json("Artist "+ artist +" deleted");
    });
    

}
