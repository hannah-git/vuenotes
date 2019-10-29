
export default {
  add_note({commit}) {
      commit('ADD_NOTE')
  },
  DEL_NOTE({commit}) {
     commit('DEL_NOTE')
  },
  FAV_NOTE({commit}) {
    commit('FAV_NOTE')
  },
  SELECT_NOTE({commit}) {
    commit('SELECT_NOTE')
  },
  SWITCH_NOTE({commit}) {
     commit('SWITCH_NOTE')
  },
}
