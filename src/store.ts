import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/services/ApiProxy'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    competitions: [],
    memberGroups: []
  },
  mutations: {
    setCompetitions: (state, competitions) => {
      state.competitions = competitions;
    },
    setMemberGroups: (state, memberGroups) => {
      state.memberGroups = memberGroups;
    }
  },
  actions: {
    async getCompetitions({commit}) {
        const {data} = await api.getCompetitions();
        commit('setCompetitions', data);
    },
    async getMemberGroups({commit}) {
      const {data} = await api.getMemberGroups();
      commit('setMemberGroups', data);
    }
  }
})
