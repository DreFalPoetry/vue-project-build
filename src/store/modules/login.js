import {SET_NAME} from '../mutation-types'

const state = {
  name:'ranran',
  age:25
}

const mutations = {
  [SET_NAME](state,name){
    state.name = name
  }
}

const actions = {
  setName({commit},payload){
    commit(SET_NAME,payload)
  }
}

export default {
  namespaced:true,
  state,
  mutations,
  actions
}