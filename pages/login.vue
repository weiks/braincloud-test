<template>
  <section class="container my-5">
    <div class="row justify-content-md-center">
      <div class="col-md-4">
        <div
          v-if="loading"
          class="d-flex justify-content-center btn btn-primary btn-block">
          <div class="spinner inverse"></div>
        </div>
        <button
          @click="login"
          v-if="!loading"
          class="btn btn-primary cursor-pointer btn-block"
          role="button"
          type="submit">
          Login with Quarters
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import app from '~/plugins/app'

export default {
  data() {
    return {
      refreshToken: null,
      accessToken: null,
      loading: false
    }
  },
  components: {},
  mounted() {},
  methods: {
    async login() {
      this.loading = true

      // authorize with iframe
      app.quartersClient.authorize('iframe', data => {
        if (data.code) {
          app.quartersClient
            .setAuthCode(data.code)
            .then(response => {
              this.refreshToken = response.refresh_token
              this.accessToken = response.access_token
              this.loading = false

              // refresh token
              this.done(this.refreshToken)
            })
            .catch(e => {
              console.log(e)
              this.loading = false
            })
        } else {
          this.loading = false
        }
      })
    },

    async done(refreshToken) {
      window.localStorage.setItem('refreshToken', refreshToken)
      const user = await app.quartersClient.me()
      this.$store.commit('refreshToken', refreshToken)
      this.$store.commit('user', user)

      // Call the script
      app.brainCloudWrapper.authenticateExternal(
        user.userId,
        this.accessToken,
        'External',
        true,
        (...args) => {
          console.log(args)
        }
      )
      // app.brainCloudClient.script.runScript(
      //   'Login',
      //   JSON.stringify({
      //     accessToken: this.accessToken,
      //     userId: user.userId
      //   }),
      //   (...args) => {
      //     console.log(args)
      //   }
      // )
    }
  }
}
</script>

<style>
</style>
