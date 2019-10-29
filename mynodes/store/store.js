import Vue from 'vue';
import Vuex from 'vueX';
import mutations from './mutation.js';
import actions from './actions.js';
import getters from './getter.js';

Vue.use(Vuex);

//  eS6 函数的一种写法，中括号 + 常量 作为函数名，这里常量从其它文件引入

let defalutNode = { // 提供默认数据
      id: +new Date(),    
      title: '新建笔记' + new Date().getMilliseconds(),    // 加时间是为了做一下区分
      content: '笔记内容',
      fav: false
  };
  
// 需要维护的状态
const state = {
  notes:[defalutNode],
  activeNote:defalutNode,
  show:'all', // 默认是全部
};


export default new Vuex.Store({
   state,
   mutations,
   actions,
   getters
})
