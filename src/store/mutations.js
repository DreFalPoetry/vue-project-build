import * as type from './mutation-types.js'

export default {
  [type.ROOT](state, payload) {
    console.log('payload', payload);
    state.root = payload;
  },
}