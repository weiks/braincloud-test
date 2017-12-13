<template>
  <section class="container my-5">
    <div class="row justify-content-md-center">
      <div class="col-md-4 text-center">
        <div>{{ user.displayName }}</div>
        <div class="my-1 small text-muted">{{ user.email }}</div>
      </div>
    </div>
  </section>
</template>

<script>
import app from '~/plugins/app'
import {mapState} from 'vuex'

export default {
  data() {
    return {
      loading: false,

      quartersClient: null
    }
  },
  middleware: 'auth',
  components: {},
  mounted() {},
  computed: {
    ...mapState(['user'])
  },
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
              this.loading = false
            })
            .catch(e => {
              console.log(e)
              this.loading = false
            })
        } else {
          this.loading = false
        }
      })
    }
  }
}
</script>

<style>
</style>
