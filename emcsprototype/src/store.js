import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    jjcount: 0,
    ownerAllMenu: [
        						{
        id: 'GLBJCDD',
        cnName: '道路清洁车调度',
        imgUrl: require('@/assets/images/mainTopbanner/e5.png'),
        beselected: true,
        childs: [
          {
            id: 'GLBJCDD_SSJK',
            cnName: '道路清洁实时监控',
            icoUrl: require('@/assets/images/leftMenu/dlqj/monitor.png'),
            topageData: '/roadclean/toMain.do?menusId=GLBJCDD_SSJK',
            beselected: true,
            childs: [
              {
                id: 'GLBJCDD_SSJKa',
                cnName: '道路清洁a',
                icoUrl: require('@/assets/images/leftMenu/dlqj/monitor.png'),
                topageDemo: 'Pageone',
                topageData: '/roadclean/toMain.do?menusId=GLBJCDD_SSJKg',
                beselected: true
              }, {
                id: 'GLBJCDD_SSJKb',
                cnName: '实时监控b',
                icoUrl: require('@/assets/images/leftMenu/dlqj/monitor.png'),
                topageDemo: 'Pagetwo',
                topageData: '/roadclean/toMain.do?menusId=GLBJCDD_SSJK',
                beselected: false
              }
            ]
          },
          {
            id: 'GLBJCDD_ROAD',
            cnName: '作业任务管理',
            icoUrl: require('@/assets/images/leftMenu/dlqj/assignment.png'),
            topageDemo: 'Pagetwo',
            topageData: '/toSectionList.do?menusId=GLBJCDD_ROAD',
            beselected: false,
            childs: []
          },
          {
            id: 'GLBJCDD_PLAN',
            cnName: '调度计划管理',
            icoUrl: require('@/assets/images/leftMenu/dlqj/plan.png'),
            topageDemo: 'Pagetwo',
            topageData: '/toPlanListMain.do?menusId=GLBJCDD_PLAN',
            beselected: false,
            childs: [
              {
                id: 'GLBJCDD_PLANa',
                cnName: '调度计划管理a',
                icoUrl: require('@/assets/images/leftMenu/dlqj/monitor.png'),
                topageData: '/roadclean/toMain.do?menusId=GLBJCDD_SSJK',
                beselected: true
              }, {
                id: 'GLBJCDD_PLANb',
                cnName: '调度计划管理b',
                icoUrl: require('@/assets/images/leftMenu/dlqj/monitor.png'),
                topageData: '/roadclean/toMain.do?menusId=GLBJCDD_SSJK',
                beselected: true
              }
            ]
          },
          {
            id: 'ROAD_WORK_REP',
            cnName: '调度计划完成情况',
            icoUrl: require('@/assets/images/leftMenu/dlqj/05.png'),
            topageData: '/listRoadcleanPlanExecution.do?menusId=ROAD_WORK_REP',
            beselected: false,
            childs: []
          },
          {
            id: 'GLBJCDD_MONITOR',
            cnName: '作业状态监控',
            icoUrl: require('@/assets/images/leftMenu/dlqj/monitor.png'),
            topageData: '/toMonitorMain.do?menusId=GLBJCDD_MONITOR',
            beselected: false,
            childs: []
          },
          {
            id: 'GLBJCDD_GJHF',
            cnName: '车辆轨迹管理',
            icoUrl: require('@/assets/images/leftMenu/dlqj/track.png'),
            topageData: '/toTrackPlay.do?carWorkType=8&amp;menusId=GLBJCDD_GJHF',
            beselected: false,
            childs: []
          },
          {
            id: 'GLBJCD_CAR_WORK',
            cnName: '作业历史管理',
            icoUrl: require('@/assets/images/leftMenu/dlqj/worklistg.png'),
            topageData: '/roadclean/toCarWorkList.do?menusId=GLBJCD_CAR_WORK',
            beselected: false,
            childs: []
          },
          {
            id: 'GLBJCDD_STATUS',
            cnName: '作业状态历史',
            icoUrl: require('@/assets/images/leftMenu/dlqj/work_state_hist.png'),
            topageData: '/toRoadCleanCarStatusList.do?menusId=GLBJCDD_STATUS',
            beselected: false,
            childs: []
          },
          {
            id: 'GLBJCDD_CLBJ',
            cnName: '车辆报警管理',
            icoUrl: require('@/assets/images/leftMenu/dlqj/garbage_truck_alarm.png'),
            topageData: '/toJSCarAlarm.do?flag=1&amp;menusId=GLBJCDD_CLBJ',
            beselected: false,
            childs: []
          },
          {
            id: 'GLBJ_DLZYQK',
            cnName: '道路作业情况',
            icoUrl: require('@/assets/images/leftMenu/dlqj/garbage_truck_alarm.png'),
            topageData: '/queryPageWorkMileList.do?menusId=GLBJ_DLZYQK',
            beselected: false,
            childs: []
          },
          {
            id: 'GLBJCDD_WATER',
            cnName: '加水点管理',
            icoUrl: require('@/assets/images/leftMenu/dlqj/water.png'),
            topageData: '/toWaterList.do?menusId=GLBJCDD_WATER',
            beselected: false,
            childs: []
          },
          {
            id: 'GLBJCDD_YYBB',
            cnName: '语音播报管理',
            icoUrl: require('@/assets/images/leftMenu/dlqj/voice.png'),
            topageData: '/GLVoice/toVoice.do?flag=1&amp;menusId=BJC_LSBB',
            beselected: false,
            childs: []
          },
          {
            id: 'GLBJCDD_ZS',
            cnName: '视频/图片管理',
            icoUrl: require('@/assets/images/leftMenu/dlqj/video_display.png'),
            topageData: '/GlVideoDisplay/toVideoDisplay.do?flag=1&amp;menusId=GLBJCDD_ZS',
            beselected: false,
            childs: []
          }
        ]
      },
      {
        id: 'CCDD',
        cnName: '垃圾车调度',
        imgUrl: require('@/assets/images/mainTopbanner/ljcdd.png'),
        beselected: false,
        childs: [
          { id: 'CCDD01',
            cnName: '垃圾车调度A',
            icoUrl: require('@/assets/images/leftMenu/dlqj/plan.png'),
            beselected: true,
            childs: [
              {
                id: 'GLBJCDD_ddqja',
                cnName: '道路清洁a',
                icoUrl: require('@/assets/images/leftMenu/dlqj/monitor.png'),
                topageDemo: 'Pagetwo',
                topageData: '/roadclean/toMain.do?menusId=GLBJCDD_SSJKg',
                beselected: true
              }, {
                id: 'GLBJCDD_ddqjb',
                cnName: '实时监控b',
                icoUrl: require('@/assets/images/leftMenu/dlqj/monitor.png'),
                topageDemo: 'Pageone',
                topageData: '/roadclean/toMain.do?menusId=GLBJCDD_SSJK',
                beselected: false
              }
            ] },
          { id: 'CCDD02',
            cnName: '垃圾车调度B',
            icoUrl: require('@/assets/images/leftMenu/dlqj/plan.png'),
            beselected: false,
            childs: [
            ] }
        ]
      },
      {
        id: 'FBCDD',
        cnName: '粪便车调度',
        imgUrl: require('@/assets/images/mainTopbanner/fbcdd.png'),
        beselected: false,
        childs: [
          { id: 'FBCDD01',
            cnName: '粪便车调度A',
            icoUrl: require('@/assets/images/leftMenu/dlqj/plan.png'),
            beselected: true,
            childs: []
          },
          { id: 'FBCDD02',
            cnName: '粪便车调度B',
            icoUrl: require('@/assets/images/leftMenu/dlqj/plan.png'),
            beselected: false,
            childs: [
            ] },
          { id: 'FBCDD03',
            cnName: '粪便车调度C',
            icoUrl: require('@/assets/images/leftMenu/dlqj/plan.png'),
            beselected: false,
            childs: [
            ] }
        ]
      },
      {
        id: 'JCCDD',
        cnName: '检查车调度',
        imgUrl: require('@/assets/images/mainTopbanner/jccdd.png'),
        beselected: false,
        childs: [
          { id: 'JCCDD01',
            cnName: '检查车调度A',
            icoUrl: require('@/assets/images/leftMenu/dlqj/plan.png'),
            beselected: true,
            childs: []
          },
          { id: 'JCCDD02',
            cnName: '检查车调度B',
            icoUrl: require('@/assets/images/leftMenu/dlqj/plan.png'),
            beselected: false,
            childs: [
            ] },
          { id: 'JCCDD03',
            cnName: '检查车调度C',
            icoUrl: require('@/assets/images/leftMenu/dlqj/plan.png'),
            beselected: false,
            childs: [
            ] }
        ]
      },
      {
        id: 'GCBJ',
        cnName: '公厕保洁',
        imgUrl: require('@/assets/images/mainTopbanner/e3.png'),
        beselected: false,
        childs: []
      },
      {
        id: 'ZYML',
        cnName: '资源目录',
        imgUrl: require('@/assets/images/mainTopbanner/menu/18resource/resource.png'),
        beselected: false,
        childs: []
      },
      {
        id: 'JZLJ',
        cnName: '建筑垃圾',
        imgUrl: require('@/assets/images/mainTopbanner/e4.png'),
        beselected: false,
        childs: []
      },
      {
        id: 'RCGZ',
        cnName: '日常工作',
        imgUrl: require('@/assets/images/mainTopbanner/e2.png'),
        beselected: false,
        childs: []
      },
      {
        id: 'CLBJ',
        cnName: '车辆报警',
        imgUrl: require('@/assets/images/mainTopbanner/ebj.png'),
        beselected: false,
        childs: []
      },
      {
        id: 'SPJG',
        cnName: '视频监管',
        imgUrl: require('@/assets/images/mainTopbanner/e6.png'),
        beselected: false,
        childs: []
      },
      {
        id: 'YJZH',
        cnName: '应急指挥',
        imgUrl: require('@/assets/images/mainTopbanner/e9.png'),
        beselected: false,
        childs: []
      },
      {
        id: 'ZDCZ',
        cnName: '终端处置',
        imgUrl: require('@/assets/images/mainTopbanner/e7.png'),
        beselected: false,
        childs: []
      },
      {
        id: 'ZYKH',
        cnName: '作业考核',
        imgUrl: require('@/assets/images/mainTopbanner/e8.png'),
        beselected: false,
        childs: []
      },
      {
        id: 'ZHTJ',
        cnName: '综合统计',
        imgUrl: require('@/assets/images/mainTopbanner/e10.png'),
        beselected: false,
        childs: []
      },
      {
        id: 'MHGL',
        cnName: '门户管理',
        imgUrl: require('@/assets/images/mainTopbanner/e1.png'),
        beselected: false,
        childs: []
      },
      {
        id: 'TCGL',
        cnName: '图层管理',
        imgUrl: require('@/assets/images/mainTopbanner/tc_mgr.png'),
        beselected: false,
        childs: []
      },
      {
        id: 'SYS',
        cnName: '系统管理',
        imgUrl: require('@/assets/images/mainTopbanner/sys.png'),
        beselected: false,
        childs: []
      }
    ],
    slectedFirstmenu: {
        	id: 'GLBJCDD',
      cnName: '道路清洁车调度',
      imgUrl: require('./assets/images/mainTopbanner/e5.png'),
      beselected: true,
        	leftmenu: {
	        	titlename: '',
	        	secendmenu: []
	        }
    },
    secendmenu: [],
    tirtedmenu: [],
    centermainpage: {}
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
    changeThirdtmenu (state, list) {
      	state.tirtedmenu = list
    },
    changerightPageto (state, data) {
      	state.centermainpage = data
    }
  },
  actions: {
    addFun (context, n) { context.commit('add', n) },
    reductionFun (context, t) { context.commit('reduction', t) },
    changeLeftMenuFun (context, leftmenulist) { context.commit('changeLeftMenu', leftmenulist) },
    changerightMenuFun (context, thirdmenulist) { context.commit('changeThirdtmenu', thirdmenulist) },
    changerightPagesFun (context, data) { context.commit('changerightPageto', data) }
  }
})
export default store
