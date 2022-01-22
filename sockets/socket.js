const { io } = require('../index');
const Band = require('../models/band');
const Bands = require('../models/bands');

const bands = new Bands();

bands.addBand(new Band('Morat'));
bands.addBand(new Band('Heroes'));
bands.addBand(new Band('The Police'));
bands.addBand(new Band('Nirvana'));

// console.log(bands);

io.on('connection', client => {
  console.log('Client connected', client.id);


  client.emit('active-bands', bands.getBands());

  client.on('disconnect', () => { console.log('Client disconneted'); });

  client.on('mensaje', (payload) => {
    console.log('Llego el mensaje!', payload.nombre);
    io.emit('mensaje', { admin: 'Nuevo mensaje' })
  });

  client.on('vote-band', (payload) => {
    bands.voteBand(payload.id);
    io.emit('active-bands', bands.getBands());
  });

  client.on('add-band', (payload) => {
    bands.addBand(new Band(payload.name));
    io.emit('active-bands', bands.getBands());
  });

  client.on('delete-band', (payload) => {
    bands.deleteBand(payload.id);
    io.emit('active-bands', bands.getBands());
  });

  // client.on('nuevo-mensaje', (payload) => {
  //   console.log(payload);
  //   client.broadcast.emit('nuevo-mensaje', payload);
  // })
});