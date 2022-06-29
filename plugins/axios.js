export default ({ $axios, $auth, isDev }) => {
  $axios.onRequest((config) => {
    config.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    if ($auth.token) {
      config.headers.common.Authorization = `Bearer ${$auth.token}`
    }
    if (isDev) {
      // eslint-disable-next-line no-console
      console.log(config)
    }
  })
  $axios.onResponse((config) => {
    if (isDev) {
      // eslint-disable-next-line no-console
      console.log(config)
    }
  })
  $axios.onError((e) => {
    // eslint-disable-next-line no-console
    console.log(e.Response)
  })
}
