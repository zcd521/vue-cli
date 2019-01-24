import Vue from 'vue'
import Vuex from 'vuex'
//注册Vue实例
Vue.use(Vuex)

//创建Vue实例对象
export default new Vuex.Store({
  //状态
  state: { 
				islogo:'1'
  },
  //用于改变状态
  mutations: {
  	
  },
  //获取
  getters:{
  	isLogin:function(state){
		  return state.isLogin; //返回共享数据
		  sessionStorage.getItem('isLogin');
//			console.log(state.isLogin)
		},
  },
  //可包含异步操作的mutation
  actions: {
		
  }
})
