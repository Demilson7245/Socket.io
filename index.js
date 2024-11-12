const path=require('path');
const express= require('express');
const app=express();

//settings
app.set('port', process.env.PORT || 3000);

//static file
// console.log(__dirname);
app.use(express.static(path.join(__dirname, 'public')))


//star the server
const server= app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});


const SocketIO=require("socket.io");
const io= SocketIO(server);

//web socket
io.on('connection', (socket)=>{
    console.log("Nueva conexion", socket.id);
});



