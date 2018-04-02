
const fs = require('fs')
const https = require('https')
const sio = require('socket.io')

// Options server https
const options = {
	key: fs.readFileSync('../certs/privkey.pem'),
	cert: fs.readFileSync('..//certs/fullchain.pem')
}

// Fichier statique html à servir
const staticHTML = fs.readFileSync('index.html')
let app = https.createServer(options, function(req, res) {
	res.writeHead(200)
	res.end(staticHTML)
})

// Initialisation Socket.io & server
const io = sio.listen(app)
app.listen(3000)

io.sockets.on('connection', function (socket) {
	console.log('ok')
});



