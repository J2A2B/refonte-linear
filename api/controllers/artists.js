'use strict';

const ArtistModel = require('../../database').artists;

const artistController = {
  find : (req, res) => {
  ArtistModel.find()
  .then(data =>{
  	res.send('Success :::' + data);
  	console.log(data)
  })
  .catch(err =>{
  	res.send('Failed :::' + err);
  })
  },
  add :(req,res) =>{
    const newArtist = new ArtistModel(req.body);
    newArtist.save()
    .then( data => {
      res.send('Operation success ::: ' + data);
    })
    .catch( err => {
      res.send('Operation failed ::: ' + err);
    });
  }
}

// const artistPostController = {
//   find : (req, res) => {
//   ArtistModel.find()
//   .then(data =>{
//     res.send('Success :::' + data);
//     console.log(data)
//   })
//   .catch(err =>{
//     res.send('Failed :::' + err);
//   })
//   },
// }

module.exports = artistController;