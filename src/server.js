const hapi = require('@hapi/hapi');
const routes = require('./routes');
const handler = require('./handler');
const notes = require('./notes');

const init = async () => {
  const server = hapi.server({
    port: 5000,
    host: 'localhost',
    routes : { cors : {origin : [`*`]} }
    //same control allow origin : adalah mengakses/berbagi resource yang diijinkan walau portnya tidak saama ctoh 5000 dan 80
  });
  await server.start();
console.log(`server .js telah dijalankan pada ${server.info.uri} || terletak pada ./src`);

  server.route(routes);
  
};

init();
