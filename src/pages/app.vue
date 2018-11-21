<template>
	<div class="fullHeight main-pagetation">
		<SysHeader @getUserId="getUserId"></SysHeader>
		<el-row class="fullHeight scroll-menu mt60">
			<div class="v-menu">
				<SysMenu :userId="userId"></SysMenu>
			</div>
			<div class="v-content">
				<SysCrumb></SysCrumb>
				<div class="v-page">
					<transition>
						<!--<keep-alive>-->
							<router-view></router-view>
						<!--</keep-alive>-->
					</transition>
				</div>
			</div>
		</el-row>
	</div>
</template>

<script>
	import SysHeader from '../components/sys-header.vue'
	import SysMenu from '../components/sys-menu.vue'
	import SysCrumb from '../components/sys-crumb.vue'

	export default {
		data() {
			return {
                userId: ''
            }
		},
		components: {
			SysHeader,
			SysMenu,
			SysCrumb
		},
        computed: {
            height() {
                return window.screen.availHeight - 148 + 'px'
            }
        },
        methods:{
            getUserId(val){
                this.userId = val
                console.log(this.userId,'userId==00')
            }
        }
	}
</script>
<style lang="scss">
	body, button, input, select, textarea {
		font: 13px/1 Tahoma,Helvetica,Arial,”\5b8b\4f53”,sans-serif;
	}
    body{
        margin:0px !important;
        height:100%;
		background: #eee;
    }
    html{
        height:100%;
    }
    .fullHeight{
        height:100%;
    }
	.mt60{margin-top: 59px}
	.v-menu {
        float: left;
        position: relative;
		top:0;
		left:0;
		z-index: 100;
        max-width:200px;
        height:calc(100% - 82px);
        padding-bottom:5rem;
		margin-right: 5px;
		background: -webkit-linear-gradient(right top, #5A95DE , #8A8BF2); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(bottom left, #5A95DE, #8A8BF2); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(bottom left, #5A95DE, #8A8BF2); /* Firefox 3.6 - 15 */
        background: linear-gradient(to bottom left, #5A95DE , #8A8BF2);
        .el-submenu .el-menu-item {
            min-width: 0;
			background: -webkit-linear-gradient(right top, #5A95DE , #8A8BF2); /* Safari 5.1 - 6.0 */
			background: -o-linear-gradient(bottom left, #5A95DE, #8A8BF2); /* Opera 11.1 - 12.0 */
			background: -moz-linear-gradient(bottom left, #5A95DE, #8A8BF2); /* Firefox 3.6 - 15 */
			background: linear-gradient(to bottom left, #5A95DE , #8A8BF2);
        }
	}
	.v-page {
		padding: 15px;
		overflow-y: auto;
		height: calc(100% - 130px);
	}
	.v-content{
		height:100%;
        position: relative;
		z-index: 0;
        overflow-y: auto;
		background: #fff;
  }
  .scroll-menu .el-col-4{
    overflow-y: scroll;
  }
</style>

