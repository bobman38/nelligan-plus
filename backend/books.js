'use strict';
var api = require('nelligan-api')

module.exports.books = async event => {
  try {
    let books = await api.books(event.queryStringParameters)
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify(
        books
      ),
    }
  }
  catch(e) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify({
        message: e
      }),
    }
  }
};
