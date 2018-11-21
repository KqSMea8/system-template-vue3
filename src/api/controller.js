import Vue from "vue";
import {API_HOST, SM_HOST} from './constants'
import Http from './http'

export default {
    //sm获取左边菜单列表
	loadSysMenu(param){
		return Http.post(SM_HOST + '/findAllMenuByUserIdAndSystemId' ,param)
	},
    //获取用户信息
	getUserInfo(){
		return Http.post(API_HOST + '/quickmart/getUserInfo')
	},
}

