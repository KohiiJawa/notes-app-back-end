/* eslint-disable space-before-blocks */
/* eslint-disable linebreak-style */
const http = require('http');

const server =  http.createServer((request,response)=>{

const {url,method} = request;

response.setHeader('Content-Type','text/html');
response.setHeader('X-powered-By','NodeJS')

if(url === '/'){
    if(method ==='GET'){
response.statusCode = 200;
response.write('<html>');
response.write('<body>')
response.write('<h1>hello response</h1>')
response.write('</body>')
response.write('</html>')
    response.end(JSON.stringify({
        pesan : 'ini adalah homepage'
    }))
}
else{
    response.statusCode = 404
    response.end(JSON.stringify({
        pesan : 'halaman tidak ditemukan'
    }))
}

}
else{
    response.statusCode = 400
    response.end(JSON.stringify({
        pesan : `halaman tidak bisa diakses menggunakan method ${method}`
    }))
}
})

server.listen(5000,'localhost',()=>{console.log('server dijalankan')})