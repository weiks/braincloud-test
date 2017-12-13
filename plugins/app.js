// quarters example
const quarterOptions = {
  appKey: 'Lpk5sPrA7P59HFlN7obS',
  appSecret: '1s4x2v8h3b9ollw1pt2afj8knheamvmvv',
  // quartersURL: 'http://localhost:3000',
  // apiURL: 'http://localhost:8888/v1/'
  quartersURL: 'https://dev.pocketfulofquarters.com',
  apiURL: 'https://api.dev.pocketfulofquarters.com/v1/'
}

window.brainCloudClient.initialize(
  '11754',
  '2fb68375-eac8-4201-8da5-8cef94059c4f',
  '1.0.0'
)

export default {
  quartersClient: new window.Quarters(quarterOptions),
  brainCloudClient: window.brainCloudClient,
  brainCloudWrapper: window.brainCloudWrapper
}
