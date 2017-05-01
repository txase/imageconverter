"use strict"

module.exports = function handler(request, output) {
  // Log the request to the console.
  console.dir(request)
  
  // Get the message sent in the endpoint path parameter
  let message = request.resourceParams.message

  // Send the message to other nodes connected to the first output.
  // Then finish with an HTTP response.
  return output(0, message)
    .then(function() {
      // Build a response.
      let responseBody = `
        <h4>You sent the following message:</h4>
        <p>${message}</p>
      `

      let response = {
        statusCode: 200,
        headers: {
          "Content-Type": "text/html"
        },
        body: responseBody
      }

      return response
    })
}