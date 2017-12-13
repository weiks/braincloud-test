// quarters example
const quarterOptions = {
  appKey: 'Lpk5sPrA7P59HFlN7obS',
  appSecret: '1s4x2v8h3b9ollw1pt2afj8knheamvmvv',
  // quartersURL: 'http://localhost:3000',
  // apiURL: 'http://localhost:8888/v1/'
  quartersURL: 'https://dev.pocketfulofquarters.com',
  apiURL: 'https://api.dev.pocketfulofquarters.com/v1/'
}

export default {
  quartersClient: new window.Quarters(quarterOptions)
}
