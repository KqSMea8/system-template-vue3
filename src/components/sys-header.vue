<template>
	<header class="header">
		<el-row>
			<el-col :span="10">
                <!-- <el-dropdown v-if="changeSystem">
                    <i class="fa fa-th-list system-list" aria-hidden="true"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item><a href="javascript:;" style="font-size: 14px;margin-left: 10px;color: #409eff"><i class="fa fa-check" aria-hidden="true"></i> 后台1</a></el-dropdown-item>
                        <el-dropdown-item><a :href="systemUrl" target="_blank" style="font-size: 14px;margin-left: 25px;">后台2</a></el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown> -->
				
				<div class="logo"><img class="logocss" src="../assets/img/eleme.png" alt=""></div>
			</el-col>
			<el-col :span="13" class="mid">
				<div class="user-info">
					<img src="">
					<span><i class="fa fa-user-circle-o"></i> Hi, {{user.userName}} | {{user.date}} {{user.week | weekMap}}</span>
				</div>
				<div class="right mr10" v-if="showStore">
					<el-select class="search-shop" v-model="shop" clearable filterable placeholder="请选择门店" @change="storeChange">
						<el-option v-for="(item,index) in shops" :key="index" :label="item.storeName" :value="item.storeId">
						</el-option>
					</el-select>
				</div>
			</el-col>
			<el-col :span="1" class="quit">
				<a @click="quitFn"><i class="fa fa-sign-out" aria-hidden="true"></i>退出</a>
			</el-col>
		</el-row>
	</header>
</template>
<script>
    import {API_HOST} from '../api/constants'
	import Controller from '../api/controller'
	import dateFormat from 'dateformat'
	import Bus from '@/components/Bus'
	import {SSO_EQUIT_HOST} from '../api/constants'
	export default {
		data() {
			return {
				changeSystem:true,
				showStore:true,
				user: {
					userName: '',
					date: dateFormat(new Date(), 'yyyy-mm-dd'),
					week: dateFormat(new Date(), 'N'),
				},
				systemUrl:'',
				shop:'',
				shops:[],
			}
		},
		components: {
			Bus,
		},
        mounted(){
        },
		created() {
			this.getHeadBaseData()
		},

		filters: {
			weekMap(val) {
				return {
					'1':'周一',
					'2':'周二',
					'3':'周三',
					'4':'周四',
					'5':'周五',
					'6':'周六',
					'7':'周日',
				}[val]
			}
		},
		methods: {
			async getHeadBaseData() {
				Promise.all([
					await Controller.getUserInfo()
				]).then(([userRes, storeRes]) => {
					sessionStorage.setItem("user", JSON.stringify(userRes.data))
                    this.$emit('getUserId',userRes.data.id)
					this.user.userName = userRes.data.name
				}, res => {
				})
			},
			storeChange(){

			},
			quitFn() {
				window.location.href = SSO_EQUIT_HOST
			}
		}
	}
</script>
<style lang="scss" scoped>
	.mr10{margin-right: 10px}
	.header {
		position: fixed;
		top: 0;
		left:64px;
		background-color: #fff;
		width:calc(100% - 63px);
		height: 58px;
		color: #9a9a9a;
		z-index: 99;
		box-shadow: 3px 3px 13px -6px #0a3f95;
		// padding: 0 20px;
		
		.system-list{
			color: #4083d1;
			font-size:20px;
			margin-left:15px; 
			cursor: pointer;
		}
        .logo {
			margin-left:15px;
			.logocss{
				height:40px;
				vertical-align: middle;
			}
		}
		.mid{
			justify-content: flex-end;
		}
        .user-info {
			padding-right: 10px;
        }
        .quit {
            text-align: right;
            a {
                cursor: pointer;
            }
	    }
	}
	.el-row{
		height: 100%;
	}
	.el-col{
		display: flex;
		align-items: center;
		height: 100%;
	}
</style>
