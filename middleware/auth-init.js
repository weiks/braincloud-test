import app from '~/plugins/app'

// result cache
let result = null
export default function ({store}) {
  if (result) {
    return result
  }

  // auth init
  result = new Promise(async resolve => {
    const refreshToken = window.localStorage.getItem('refreshToken')
    store.commit('refreshToken', refreshToken)

    // if refresh token
    if (refreshToken) {
      await app.quartersClient.setRefreshToken(refreshToken)
      const user = await app.quartersClient.me()
      store.commit('user', user)
    }

    resolve()
  })

  return result
}
