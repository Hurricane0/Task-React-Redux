export const checkCredentials = params => {
  if (params.username !== "admin@gmail.com" || params.password !== "0000") {
    return false;
  }
  return true;
};
