// Write a welcome message to the console
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input
process.stdin.on('readable', () => {
  // Read the user's input
  const chunk = process.stdin.read();

  // If the user provided input (i.e., the input is not null)
  if (chunk) {
    // Write the user's name to the console
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

// Listen for the end of the input stream (i.e., when the user stops providing input)
process.stdin.on('end', () => {
  // Write a closing message to the console
  process.stdout.write('This important software is now closing\n');
});
