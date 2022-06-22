export default ({ $axios }) => {
  $axios.onRequest((config) => {
    config.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    // eslint-disable-next-line no-console
    console.log(config)
  })
  $axios.onResponse((config) => {
    // eslint-disable-next-line no-console
    console.log(config)
  })
  $axios.onError((e) => {
    // eslint-disable-next-line no-console
    console.log(e.Response)
  })
}
