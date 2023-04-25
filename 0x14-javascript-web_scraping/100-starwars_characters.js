#!/usr/bin/node
const request = require('request');
const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request(apiUrl, function (error, response, body) {
  if (error) {
    console.error(error);
  }
  const charactersUrls = JSON.parse(body).characters;
  let charactersCount = charactersUrls.length;
  const characters = [];

  charactersUrls.forEach(function (url) {
    request(url, function (error, response, body) {
      if (error) {
        console.error(error);
      }
      characters.push(JSON.parse(body).name);
      charactersCount--;
      if (charactersCount === 0) {
        characters.forEach(function (character) {
          console.log(character);
        });
      }
    });
  });
});
