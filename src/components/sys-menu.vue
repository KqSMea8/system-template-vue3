<template>
    <div class="menu-style">
        <el-menu text-color="#fff"
                 active-text-color="#ffd04b"
                 default-active="inventory"
                 :collapse="isCollapse"
                 :unique-opened="true"
                 class="el-menu-new el-menu-vertical"
                 :default-active="$route.path"
                 @open="handleOpen"
                 @close="handleClose"
                 :router="true">
            <el-submenu v-for="(topmenu, index) in menus" :key="topmenu.id" :index="index+'m1'">
                <template slot="title">
                    <i :class="topmenu.iconClass" style="color: #fff"></i><span slot="title"> {{topmenu.menuName}}</span>
                </template>
                <el-menu-item v-for="(menu_2, ix_2) in topmenu.children" :key="menu_2.id" :index="menu_2.url">
                    {{menu_2.menuName}}
                </el-menu-item>
            </el-submenu>
        </el-menu>
        <el-radio-group v-model="isCollapse" class="collapse">
            <el-radio-button :label="false" v-if="isCollapse"><i class="fa fa-list-ul" ></i></el-radio-button>
            <el-radio-button :label="true" v-if="!isCollapse"><i class="fa fa-list-ul" ></i></el-radio-button>
        </el-radio-group>
    </div>
</template>

<script>
	import Struct from '../api/struct'
	import Controller from '../api/controller'
    import {SYS_ID} from '../api/constants'
	export default {
		props: ['userId'],
		data() {
			return {
                isCollapse: true,
                showBar:true,
                closeBar:true,
				menus: [],
                newUserId: this.userId
			}
		},
		mounted(){
			if(this.userId) this.getLeftMenu()
		},
		watch: {
            userId(val){
            	this.newUserId = val
                if(val) this.getLeftMenu()
            }
        },
		methods: {
            lableToggle(){
                this.showBar = ! this.showBar
                this.closeBar = !this.closeBar
                console.log(this.closeBar,'close',this.showBar)
            },
			async getLeftMenu(){
                let menus = []
				//let user = JSON.parse(sessionStorage.getItem('user'))
                //console.log(user,'==user==',user.id)
				let params = {
                    "userId": this.newUserId,
                    "systemId": SYS_ID
                }
                console.log(params,'===params===')
				let data = await Controller.loadSysMenu(params)
                console.log(data,'===data===')
                menus = data.data
                menus.map(m => m.url.indexOf('/') != 0 && (m.url = '/' + m.url))
                sessionStorage.setItem('sysmenus',menus)
                this.menus = Struct.arrayToTree(menus)
                console.log(menus,'===menus===',this.menus)
            },
			handleOpen(key, keyPath) {
				//console.log(key, keyPath)
			},
			handleClose(key, keyPath) {
				//console.log(key, keyPath)
			}
		}
	}
</script>
<style lang="scss">
.menu-style{
    .el-menu{border-right: 0;}
    .el-menu-new{
        background: -webkit-linear-gradient(right top, #5A95DE , #8A8BF2); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(bottom left, #5A95DE, #8A8BF2); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(bottom left, #5A95DE, #8A8BF2); /* Firefox 3.6 - 15 */
        background: linear-gradient(to bottom left, #5A95DE , #8A8BF2);
    }
    .collapse{
        position: fixed;
        top:0;
        left: 0;
        z-index: 100;
        height: 58px;
        width:63px;
        border-right:1px solid #eee;
        display: flex;
        justify-content: center;
        cursor: pointer;
        transition: all 1s ease-in-out;
        box-shadow: 3px 3px 13px -6px #0a3f95;
        i{
            font-size: 22px;
            color: #999;
            line-height: 58px;
        }
    }
    .collapse:hover{
        opacity: 1;
        i{color: #7391eb;}
    }
     .el-radio-group .el-radio-button{
        width: 100%;
    }
     .el-radio-group .el-radio-button .el-radio-button__inner{
        border: 0;
        background: #fff;
        color: #fff;
        padding:0;
        width:100%;
        border-radius: 0!important;
    }
    .el-submenu__title:hover{
        background-color: rgba(255,255,255,0.3);
    }
    .el-submenu__title i{
        color: #fff
    }
    .el-radio-button:focus:not(.is-focus):not(:active):not(.is-disabled){
        box-shadow: 0 0 0 0 #ffffff;
    }
}
    .el-menu-vertical:not(.el-menu--collapse) {
        width: 200px;
    }
    .el-submenu__title .fa{
        font-size: 16px;
    }
    .el-menu--popup-right-start{
        background: -webkit-linear-gradient(right top, #5A95DE , #8A8BF2); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(bottom left, #5A95DE, #8A8BF2); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(bottom left, #5A95DE, #8A8BF2); /* Firefox 3.6 - 15 */
        background: linear-gradient(to bottom left, #5A95DE , #8A8BF2);
        .el-menu-item:focus, .el-menu-item:hover{
            background-color: rgba(255,255,255,0.3);
        }
    }
    

</style>
