/* eslint-disable linebreak-style */
const hapi = require('@hapi/hapi');

const route = require('./route01');

const init = async () => {
  const server = hapi.server({
    port: 5000,
    host: 'localhost',
  });

  await server.start();
  console.log(`server berjalan pada ${server.info.uri}`);

  server.route(route);
  // install nodemon --save-dev
  // install eslint --save-dev
  // npx eslint --init
};

init();
