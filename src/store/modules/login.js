
const state = {
  device: 'desktop'
}

const types = {
  LOGIN: 'LOGIN'
} 

const mutations = {
  [types.LOGIN](state, payload) {
    state.device = payload;
  },
}

const actions = {
  toggleDevice({
    commit,
    dispatch
  }, device) {
    commit(types.LOGIN, device);
    dispatch('moduleResetRoot', 'edit')
  },
  // 在模块中修改根root mutation
  moduleResetRoot({dispatch}, payload) {
    dispatch('resetRoot', payload, {root:true})
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}