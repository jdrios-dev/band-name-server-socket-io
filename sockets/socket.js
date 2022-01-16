const { io } = require('../index');

io.on('connection', client => {
  console.log('Client connected');

  client.on('disconnect', () => { console.log('Client disconneted'); });

  client.on('mensaje', (payload) => {
    console.log('Llego el mensaje!', payload.nombre);
    io.emit('mensaje', { admin: 'Nuevo mensaje' })
  })
});