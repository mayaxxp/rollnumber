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
    ,clearInt:{}
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
//  		let clearInt
    		let wvf 
    		try{
    			state.clearInt=null
    			clearInterval(wvf)
    		}catch(err){console.log(err)}
				state.isloding = false;
				state.loginstate = true;
				state.logintime = time;
				console.log("退出计时开始") 
				state.clearInt =  new Promise((resolve, reject) => {
						 wvf = setInterval((time) => {
						 	let newtime = new Date().getTime()
							let newtimestep = newtime - state.logintime;
//							console.log(newtime+"-"+state.logintime+"="+newtimestep);
								console.log("距上次请求数据："+Math.round(newtimestep/60000)+"分钟；超过10分钟将退出当前登录。");  
							if(newtimestep > 600000){
								state.loginstate = false; 
								console.log('退出了');
								resolve(wvf)
							}  
							
						}, 61000)
				
					}).then(res => {
					clearInterval(res)
					console.log('退出了');
				});
    }
    ,logOutSys(state){
				if(sessionStorage.getItem("token")) {
					let obj = {}
					let that = window.$vm;
					that.axios.post("/logout", obj).then((data) => {
						if(data.code == 200) {
							window.sessionStorage.clear();
							state.loginstate = true
							that.$router.push({
								path: '/login'
							});
							// that.$store.commit("clearLoginInterval")
						}
					})
				}
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
		,logoutState(context, time){
				context.commit('logOutSys')// 
		}
  }
})
export default store
