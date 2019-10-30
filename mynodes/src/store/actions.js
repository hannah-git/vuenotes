
export default {
  add_note({commit}) {
      commit('ADD_NOTE')
  },
  del_note({commit}) {
     commit('DEL_NOTE')
  },
  fav_note({commit}) {
    commit('FAV_NOTE')
  },
  select_note({commit},note) {
    commit('SELECT_NOTE',note)
  },
  switch_note({commit},type) {
     commit('SWITCH_NOTE',type)
  },
}
