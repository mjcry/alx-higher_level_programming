#!/usr/bin/node
const request = require('request');
const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request(apiUrl, function (error, response, body) {
  if (error) {
    console.error(error);
  }
  const charactersUrls = JSON.parse(body).characters;
  const charactersPromises = charactersUrls.map(url => new Promise((resolve, reject) => {
    request(url, function (error, response, body) {
      if (error) {
        reject(error);
      }
      const character = JSON.parse(body).name;
      resolve(character);
    });
  }));

  Promise.all(charactersPromises)
    .then(characters => {
      for (const character of characters) {
        console.log(character);
      }
    })
    .catch(error => console.error(error));
});
