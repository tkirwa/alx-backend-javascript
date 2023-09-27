import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const [photoResponse, userResponse] = await Promise.all([uploadPhoto(), createUser()]);

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // If an error occurs in either of the async functions, return an empty object
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
