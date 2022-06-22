const homePath = 'projects'

export const state = () => ({
  styles: {
    homeAppBarHeight: 56
  },
  loggedIn: {
    homePath: {
      name: homePath
    }
  },
  project: {
    current: null,
    list: [
      { id: 1, name: 'MyProject01', updatedAt: '2020-04-01T12:00:00+09:00' },
      { id: 2, name: 'MyProject02MyProject02MyProject02MyProject02', updatedAt: '2020-04-01T12:00:00+09:00' },
      { id: 3, name: 'MyProject03', updatedAt: '2020-04-01T12:00:00+09:00' },
      { id: 4, name: 'MyProject04', updatedAt: '2020-04-01T12:00:00+09:00' },
      { id: 5, name: 'MyProject05', updatedAt: '2020-04-01T12:00:00+09:00' }
    ]
  },
  user: {
    current: null
  },
  auth: {
    token: null,
    expires: 0,
    payload: {}
  }
})

// 算出プロパティ
export const getters = {}

// stateの値を変更する場所
export const mutations = {
  setCurrentProject(state, payload) {
    state.project.current = payload
  },
  setCurrentUser(state, payload) {
    state.project.current = payload
  },
  setAuthToken(state, payload) {
    state.auth.token = payload
  },
  setAuthExpires(state, payload) {
    state.auth.expires = payload
  },
  setAuthPayload(state, payload) {
    state.auth.payload = payload
  }
}

// メソッド
export const actions = {
  getCurrentProject({ state, commit }, params) {
    const id = Number(params.id)
    const currentProject = state.project.list.find(project => project.id === id) || null
    commit('setCurrentProject', currentProject)
  },
  getCurrentUser({ commit }, user) {
    commit('setCurrentUser', user)
  },
  getAuthToken({ commit }, token) {
    commit('setAuthToken', token)
  },
  getAuthExpires({ commit }, expires) {
    expires = expires || 0
    commit('setAuthExpires', expires)
  },
  getAuthPayload({ commit }, jwtPayload) {
    jwtPayload = jwtPayload || {}
    commit('setAuthPayload', jwtPayload)
  }
}
