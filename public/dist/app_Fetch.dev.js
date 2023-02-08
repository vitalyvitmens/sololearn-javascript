"use strict";

// TODO: https://jsonplaceholder.typicode.com/
var requesrURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url) {
  var body,
      headers,
      response,
      error,
      e,
      _args = arguments;
  return regeneratorRuntime.async(function sendRequest$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          body = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;
          headers = {
            'Content-Type': 'application/json'
          };
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch(url, {
            method: method,
            body: JSON.stringify(body),
            headers: headers
          }));

        case 4:
          response = _context.sent;

          if (!response.ok) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", response.json());

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(response.json());

        case 9:
          error = _context.sent;
          e = new Error('Что-то пошло не так');
          e.data = error;
          throw e;

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
} // sendRequest('GET', requesrURL)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))


var body = [{
  name: 'Vladimir',
  age: 53,
  budget: 40000
}, {
  name: 'Iosif',
  age: 73,
  budget: 6900
}, {
  name: 'Lavrentiy',
  age: 54,
  budget: 50000
}, {
  name: 'Yuriy',
  age: 34,
  budget: 1800
}, {
  name: 'Egor',
  age: 14,
  budget: 300
}, {
  name: 'Arina',
  age: 20,
  budget: 1000
}];
sendRequest('POST', requesrURL, body).then(function (data) {
  return console.log(data);
})["catch"](function (err) {
  return console.log(err);
});