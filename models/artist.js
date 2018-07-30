var mongoose = require('mongoose');

var ArtistSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    identifier:{
        type:String,
        required:true
    },
   startDate:{
       type:Date,
       required:true
   },
   genres:{
       type:Array
   },
   images:{
       type:Array
   }
}, {
    timestamps: true
});

module.exports = mongoose.model('Artist', ArtistSchema);
