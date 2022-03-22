export const sendRespons = (status, message = null, body = null) => {
  return {
    status,
    message,
    body,
  };
};
