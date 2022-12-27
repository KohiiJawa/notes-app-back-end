/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable padded-blocks */
const http = require('http');

const requestListener = (request, response) => {

    response.setHeader('Content-Type', 'text/html');

    // const method = request.method;
    const { method } = request;

    response.statusCode = 200;
    if (method === 'GET') response.end('<h1> response GET berhasil</h1>');
    if (method === 'POST') response.end('<h1> response POST berhasil</h1>');
    if (method === 'PUT') response.end('<h1> response PUT berhasil</h1>');
    if (method === 'DELETE') response.end('<h1> response DELETE berhasil</h1>');

};

const server = http.createServer(requestListener);

/*
Method listen() dapat menerima 4 parameter, berikut detailnya:

port (number) : jalur yang digunakan untuk mengakses HTTP server.
hostname (string) : nama domain yang digunakan oleh HTTP server.
backlog (number) : maksimal koneksi yang dapat ditunda (pending) pada HTTP server.
listeningListener (fn) callback yang akan terpanggil ketika HTTP server sedang bekerja (listening).
Namun, keempat parameter di atas bersifat opsional. Kita bisa memberikan nilai port
saja, atau kombinasi apa pun dari keempatnya. Hal itu tergantung terhadap kebutuhan Anda.
 Namun lazimnya, ketika memanggil method listen() kita memberikan nilai port,
 hostname, dan listeningListener.
*/

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`server berjalan pada http://${host} : ${port}`);
});
