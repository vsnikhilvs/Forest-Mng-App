require('rootpath')();

// function requireHTTPS(req, res, next) {
//     // The 'x-forwarded-proto' check is for Heroku
//     if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
//         return res.redirect('https://' + req.get('host') + req.url);
//     }
//     next();
// }

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const errorHandler = require('_middleware/error-handler');
const port = process.env.PORT || 3000;

// app.use(requireHTTPS);
// angular-role-based-authorization-example
// app.use(express.static('./dist/angular-role-based-authorization-example'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// app.get('/*', function(req, res) {
//     res.sendFile('index.html', {root: './dist/angular-role-based-authorization-example/’}
//   );
//   });
// allow cors requests from any origin and with credentials
app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }));

// api routes
app.use('/accounts', require('./accounts/accounts.controller'));
app.use('/form', require('./forms/forms.controller'));
app.use('/circle', require('./circles/circles.controller'));
app.use('/hoa', require('./hoa/hoa.controller'));

// swagger docs route
// app.use('/api-docs', require('_helpers/swagger'));

// global error handler
app.use(errorHandler);

// start server
// const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => {
    console.log('Server listening on port 8080 ');
});
