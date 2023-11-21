process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  let chunk;
  while ((chunk = process.stdin.read()) !== null) {
    console.log(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
  process.exit();
});
