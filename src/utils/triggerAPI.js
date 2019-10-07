const triggerAPI = (url, options = {}) => {
  const baseURL = 'http://localhost:8000/';

  return fetch(`${baseURL}${url}`, options)
}

export default triggerAPI;