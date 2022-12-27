/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const handler01 = (h) => h.response('suksesss').code(202).type('text/plain').header('X-testing', 'asal asalan');
const handler02 = (message, request, h) => h.response(message).code(202).type('application/json').header('X-testing', 'asal asalan');

// // Detailed notation
// const handler = (request, h) => {
//     const response = h.response('success');
//     response.type('text/plain');
//     response.header('X-Custom', 'some-value');
//     return response;
// };

// // Chained notation
// const handler = (request, h) => {
//     return h.response('success')
//         .type('text/plain')
//         .header('X-Custom', 'some-value');
// };wewewe

const route = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => 'this is homepage',
  },
  {
    method: '*',
    path: '/',
    handler: (request, h) => `400 page is not accesible using method ${request.method}`,

  },
  {
    method: 'GET',
    path: '/about',
    handler: (request, h) => 'this is about page',
  },

  {
    // tambahkan ? pada akhir parameternya untuk menjadikanya opsional
    // curl -X GET http://localhost:5000/users/ehsan?"lang=id&provinsi=kalteng&manual=manual"
    method: 'GET',
    path: '/users/{username?}',
    handler: (request, reply) => {
      const { username = 'anonymous' } = request.params;
      const { lang, provinsi } = request.query;
      const manual = request.query;
      if (manual.manual === 'manual') return manual;
      if (provinsi === 'kalteng') return `salamat datang ikam ${username}`;
      if (lang === 'id') return `selamat datang ${username}`;
      return `welcome ${username} `;
    },
  },
  {
    //client mengirimkan konten json
    // curl -X POST -H"Content-Type:application/json" -d"{\"username\":\"ehsan\"}" http://localhost:5000/login
    method: 'POST',
    path: '/login',
    handler: (request, h) => {
      const { username } = request.payload;
      return `berhasil, welcome ${username}`;
    },

  },

  {
    method: 'GET',
    path: '/responseRequest',
    handler: (request, h) => {
      // h adalah hepi response
      const { handler } = request.query;
      if (handler === 'handler02') {
        return handler02({ nama: 'username' }, request, h);
      }
      if (handler === 'handler03') {
        return handler02('<h2>ini adalah handler03 2</h2>', request, h);
      }
      return handler01(h);
    },

  },

  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => '404 , not found',
  },
];

module.exports = route;
