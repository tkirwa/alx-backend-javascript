// Import the required functions
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Define an asynchronous function to handle the profile signup
export default async function handleProfileSignup(firstName, lastName, fileName) {
  // Initialize an empty array to store the results
  const res = [];

  try {
    // Call the signUpUser function and await its result
    const user = await signUpUser(firstName, lastName);

    // Push a fulfilled result object into the results array
    res.push({ status: 'fulfilled', value: user });

    // Call the uploadPhoto function and await it (no need to capture the result)
    await uploadPhoto(fileName);
  } catch (err) {
    // If an error occurs, push a rejected result object with an error message
    res.push({
      status: 'rejected',
      value: `Error: ${fileName} cannot be processed`,
    });
  }

  // Return the array of results
  return res;
}
