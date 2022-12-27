const http = require(`http`);

const server = http.createServer((request,response) =>{

response.setHeader(`Content-Type`,`text/html`);

let {method,url} = request;

response.statusCode = 200;

if(url === `/`){

if(method === `GET`) {
    response.statusCode =200;
    response.end("<h1> request GET berhasil </h1>")
}
if(method === `POST`) {
    let body = []
    request.on(`data`,(datanya)=>{

        body.push(datanya)
    })

    request.on('end',()=>{
        body = Buffer.concat(body).toString();
        response.statusCode = 200
        const {name} = JSON.parse(body)
        response.end(`<h1>perintah POST berhasil dijalankan,\n Hai ${name}</h1>`)
    })
}

}
else if(url === '/test') {
    if(method === `GET`) {
        response.statusCode =200;
        response.end("<h1> request GET ke /test berhasil </h1>")} 
    else if(method === `POST`){
        let body = [];

        request.on('data',(data01)=>{
        })
            body.push(data01);
        request.on(`end`,()=>{
            body = Buffer.concat(body).toString();
            const {pesan,value} = JSON.parse(body);

            response.statusCode = 200;

            response.end(`<h2> ${pesan}  \n dengan value ${value} </h2>`);
        })

    }
    else{
        response.statusCode = 400;
        response.end(`halaman /test tidak dapat diakses dengan method ${method}`)
    }

  
}
else{
    response.statusCode = 404;
    response.end("<h1> halaman tidak ditemukan </h1>")
}




})

const port = 5000;
const host = `localhost`;

server.listen(port,host);

