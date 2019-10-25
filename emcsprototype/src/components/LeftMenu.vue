<template>
	<div class="leftjia">
			<h3 class="hes">道路清洁车调度</h3>
			<div class="subNavBox">
				<!--{
					id:'GLBJCDD_MONITOR,'
					cnName:'作业状态监控',
					icoUrl:require('../assets/images/leftMenu/dlqj/monitor.png'),
					topageData:'/toMonitorMain.do?menusId=GLBJCDD_MONITOR',
					beselected:true
				}-->
				<div class="subNav" v-for="(item,index) in dataMenusNewdata" :key="item.id" :class="{'currentDt':item.beselected}">
					<div class="ertt">
						<img :src="item.icoUrl" >
					</div>
					<a :id="item.id"  href="javascript:void(0)" @click.stop="getRightContent(item.id,index,item.topageData)">
						{{item.cnName}}
					</a>
					<ul :id="(item.id + 'ul')"   :class="{'navContent':!item.beselected,'margin0':true}">
						<li v-for="(itemc,index) in item.childs" :key="itemc.id"  :class="{'el-icon-iconName':itemc.beselected,'selectedLi':itemc.beselected}" @click.stop="getRightContentChild(itemc.id,index,itemc.topageData,itemc.topageDemo)">{{itemc.cnName}}</li>
					</ul>
				</div>

				<div class="gsf"></div>
			</div>
			<div class="botdg"></div>

		</div>
</template>

<script>
import '@/assets/css/leftMenu/leftmenu.css'
export default {
  name: 'LeftMenu',
  data () {
    return {
      menulist: [],
      childList: []
    }
  },
  created () {
    // 加载完成之前，执行。执行顺序:父组件-子组件
  },
  mounted () { // 页面初始化方法   加载完成后执行。执行顺序:子组件-父组件
    this.menulist = this.dataMenusNewdata
    this.childList = (this.dataMenusNewdata)[0].childs
    var parthW = 1024// this.$refs.wrapbox.clientWidth;
    this.mlistlength = parseInt(parthW / 75)
  },
  methods: {
    getRightContent (eveid, index, toUrl, toPagedemo) {
      /* 获得右侧内容 */
      for (var i = 0; i < this.menulist.length; i++) {
				 		   this.menulist[i].beselected = false
      }
      var selnum = this.menulist[index]
      selnum.beselected = true
      if ((selnum.childs).length > 0) {
        this.$store.dispatch('changerightMenuFun', selnum.childs)
        var len = (selnum.childs).length
        for (var i = 0; i < len; i++) {
					 	(selnum.childs)[i].beselected = false
        }
        this.childList = selnum.childs
      } else {
        this.$store.dispatch('changerightPagesFun', { topageData: selnum.topageData, topageDemo: selnum.topageDemo })
        this.childList = []
      }
      return false
    },
    getRightContentChild (eveid, index, toUrl, toPagedemo) {
      /* 获得右侧内容 */
      var len = (this.childList).length
      for (var i = 0; i < len; i++) {
				 	(this.childList)[i].beselected = false
      }
      var selnum = (this.childList)[index]
      selnum.beselected = true

      this.$store.dispatch('changerightPagesFun', { topageData: toUrl, topageDemo: toPagedemo })

      this.axios.get('/ajax_info.json').then(function (response) {
										      	   console.log(response)
										      }).catch(function (error) {
										      	// 请求失败处理
										        console.log(error)
										      })

      return false
    }
  },
  computed: {
    dataMenusNewdata () {
      //				this.menulist=this.dataMenusNewdata;
      return (this.$store.state.secendmenu)
    }
  },
  watch: {
    '$store.state.secendmenu': {
      handler (newValue, oldValue) {
        // 根据检测状态管理器中的二三级按钮状态，刷新二三级按钮样式
        this.menulist = newValue
        this.childList = (newValue)[0].childs
      },
      deep: true
    }
  }
}
</script>

<style>
</style>
