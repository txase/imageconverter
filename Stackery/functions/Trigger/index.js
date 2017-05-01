const stackery = require('stackery'),
      destBucket = process.env.DESTINATION_BUCKET.replace(/^arn:aws:s3:::/, '')

module.exports = function handler(message) {
  let uploadBucket = message.store.id.replace(/^arn:aws:s3:::/, ''),
      source = `s3://${uploadBucket}/${message.object.key}`,
      dest = `s3://${destBucket}/${message.object.key}`,
      dockerMessage = {
        command: [source, dest]
      }
      
  return stackery.output(dockerMessage)
}