const fetch = require('node-fetch');
// Given the array of URLs, fetch the data with asynchronous JS

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
];

// This is one way to do it with promises
// Promise.all(urls.map(url =>
//   fetch(url).then(resp => resp.json())
// )).then(data => {
//   console.log('users', data[0]);
//   console.log('posts', data[1]);
//   console.log('albums', data[2]);
// }).catch('oops');

// This is how you might do it with async/await
const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
    ));
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch (err) {
    console.log('oops', err);
  }
}

// Async/await is just syntactic surgar for promises, so just use the one
// that is easiest to read for you or your team.
