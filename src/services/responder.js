const failed = error => {
  if (error.response && error.response.data && error.response.data.error) {
    return error.response.data.error.message || error.response.data.message;
  }
  return error.message;
};

const success = response => {
  return response.data;
};

export default { failed, success };
