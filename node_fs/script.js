const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log('Async:', data.toString('utf8'));
})

const file = fs.readFileSync('./hello.txt');
console.log('Sync:', file.toString());

// APPEND
// fs.appendFile('./hello.txt', 'This is so cool!', err => {
//   if (err) {
//     console.error(err);
//   }
// })

// WRITE
// fs.writeFile('bye.txt', 'Sad to see you go\n', err => {
//   if (err) {
//     console.error(err);
//   }
// });

// DELETE
fs.unlink('./bye.txt', err => {
  if (err) {
    console.error(err);
  }
  console.log('Inception');
})
