import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store= new Vuex.Store({
  state: {
        jjcount:0
  },
  mutations: {
      add(state,n){
        if(state.jjcount>=0){
          state.jjcount=0
        }else{
            state.jjcount+=n
        }  
      },
      reduction(state,t){
        if(state.jjcount<=t.minLeft){
          state.jjcount=t.minLeft
        }else{
          state.jjcount-=t.step
        }           
      }
  },
  actions: {
    addFun(context,n){context.commit('add',n)},
    reductionFun(context,t){context.commit('reduction',t)}
  }
})
export default store;