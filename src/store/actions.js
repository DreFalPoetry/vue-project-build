import * as type from './mutation-types.js';

export default {
  resetRoot({commit}, payload) {
    console.log('resetRoot paylaod', payload);
    commit(type.ROOT, payload);
  }
}