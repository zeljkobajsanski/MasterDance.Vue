import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/services/ApiProxy'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    competitions: []
  },
  mutations: {
    setCompetitions: (state, competitions) => {
      state.competitions = competitions;
    }
  },
  actions: {
    async getCompetitions({commit}) {
        const {data} = await api.getCompetitions();
        commit('setCompetitions', data);
    }
  }
})
