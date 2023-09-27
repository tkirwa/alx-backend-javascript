export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    const errorMessage = `${fileName} cannot be processed`;
    reject(new Error(errorMessage));
  });
}
