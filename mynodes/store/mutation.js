import { ADD_NOTE , DEL_NOTE ,FAV_NOTE,SELECT_NOTE,SWITCH_NOTE} form "./mutation-type.js";

export default {
  [ADD_NOTE](state,note = {}) {
      state.notes.push(note);
      state.activeNote = note;
  }, 
  [DEL_NOTE](state) {
      for(let i = 0; i < state.notes.length;i++) {
        if(state.notes[i].id == state.activeNote.id ) {
            state.notes.splice(i,1);
            // 删除之后需要把当前选中的数据上移或者下移
            state.activeNote = state.notes[i] || state.notes[i-1] || {};
            return;
        }
      }
  },
  [FAV_NOTE](state) {
      state.activeNote.fav = ! state.activeNote.fav;
  },
  [SELECT_NOTE](state,note) {
    state.activeNote = note
  },
  [SWITCH_NOTE](state,type) {
    // 切换类型，显示全部或者收藏
    state.show = type;
  }
}

