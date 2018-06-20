export const responseErrorObject = ({ message = 'something went wrong', code = undefined }) => { 
  return {
    err: {
      code,
      message
    }
  }
}

export const axiosResponseError = (err) => {
  if (err.response && err.response.data) {
    return responseErrorObject(err.response.data)
  }

  return responseErrorObject(err)
}

export default {
  axiosResponseError
}
