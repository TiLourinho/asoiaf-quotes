export function serverStart(error, port) {
  if (error) console.log(`Error in server setup => ${error}`);
  console.log(`Server is up and listening on port ${port}`);
}

export function errorHandler(status, message) {
  return { status, message };
}
