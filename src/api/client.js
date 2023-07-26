
// this file will simulate the api CRUD calls 

export const client = async(endpoint, {body, ...customConfig} = {}) => {
  // declare the header of the request
  // which holds the content-type and authorzition
  const headers = {'Content-Type': 'application/json'}
  // 
  const config = {
    // if it has body so its POST request alse it is GET
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      headers,
      ...customConfig.headers,
    }
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  let data
  try {
    // const response = await window.fetch(endpoint, config).unwarp()
    const response = await window.fetch(endpoint, config)
    data = await response.json()
    if (response.ok) {
      return {
        status: response.status,
        data,
        headers: response.headers,
        url: response.url
      }
    }
    throw new Error(response.statusText)
  } catch (err) {
    return Promise.reject(err.message ? err.message : data)
  }

}

// in case get request
client.get = (endpoint, customConfig = {}) => {
  return client(endpoint, {...customConfig, method: 'GET'})
}
// in case post request
client.post = (endpoint, body, customConfig = {}) => {
  return client(endpoint, { body, ...customConfig})
}
