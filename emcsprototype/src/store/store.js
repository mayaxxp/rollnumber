import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  	rootTimeout:0
  	,isloding:false    //
  	,loginstate:true
  	,logintime:0
    ,jjcount: 0
    ,allMenuRealign:[]
    ,ownerAllMenu: []
    ,slectedFirstmenu: {}
    ,secendmenu: []
    ,beslecendmenu:{}
    ,tirtedmenu: []
    ,centermainpage:{}
    ,secendtitle:''
  },
  mutations: {
    add (state, n) {
      if (state.jjcount >= 0) {
        state.jjcount = 0
      } else {
        state.jjcount += n
      }
    },
    reduction (state, t) {
    	
      if (state.jjcount <= t.minLeft) {
        state.jjcount = t.minLeft
      } else {
        state.jjcount -= t.step
      }
    },
    changeLeftMenu (state, list) {
      	state.secendmenu = list
    },
    setSecendMenu (state, item) {
      	state.beslecendmenu = item
    },
    changeThirdtmenu (state, list) {
      	state.tirtedmenu = list
    },
    changerightPageto (state, data) {
      	state.centermainpage = data
    },
    changeUserallMenuAs(state, data){
    	console.log(data)
    	state.allMenuRealign = data
    },
    setUserallMenuAs(state, data){ 
    	state.ownerAllMenu = data
    },
    setLeftTitlename(state,val){
      state.secendtitle=val
    },
    loginoutFun(state,time){
			state.isloding=false; 
	  		state.loginstate=true;
	  		state.logintime=time; 
	  		console.log("退出计时开始") 
		let clearInt = ()=>{
		    return new Promise((resolve, reject) => {
		        let wvf=setInterval(()=>{
		        	let newtimestep=new Date().getTime()-time;
		        	if(newtimestep > 30000){
		        		state.loginstate=false;
		        		console.log('退出了');
		        		resolve(wvf)  
		        	}
		        }, 20000)  
				
		    })
		} 
		clearInt().then(res => {
		    clearInterval(res)
		 		console.log('退出了2');
		});

    } 
  },
  actions: {
    addFun(context, n) {
			context.commit('add', n);//
		}
    , reductionFun(context, t) {
			context.commit('reduction', t);// 
		}
    , changeLeftMenuFun(context, leftmenulist) {
			context.commit('changeLeftMenu', leftmenulist); //
		}
    , changeSecendMenuFun(context, beslectedItem) {
			context.commit('setSecendMenu', beslectedItem)//
		}
    , changeTreMenuFun(context, thirdmenulist) {
			context.commit('changeThirdtmenu', thirdmenulist)//
		}
    , changerightPagesFun(context, data) {
			context.commit('changerightPageto', data)//
		}
    , changeUserallMenuFun(context, allmenus) {
			context.commit('changeUserallMenuAs', allmenus)//
		}
    , initUserallMenuFun(context, allmenus) {
			context.commit('setUserallMenuAs', allmenus)//
		}
    , setLeftTitlenameFun(context, val) {
			context.commit('setLeftTitlename', val)//
		},
		loginingStateChange(context, time){
				context.commit('loginoutFun', time)// 
		}
  }
})
export default store
