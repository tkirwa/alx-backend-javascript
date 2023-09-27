import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const promises = [];

  // Create an array of promises
  promises.push(uploadPhoto());
  promises.push(createUser());

  // Use Promise.all to collectively resolve all promises
  Promise.all(promises)
    .then((results) => {
      results.forEach((result) => {
        const { body, firstName, lastName } = result;
        console.log(`${body} ${firstName} ${lastName}`);
      });
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
