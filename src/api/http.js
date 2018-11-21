import axios from 'axios'
import {SSO_LOGIN_HOST} from "./constants";
import {Loading, Message} from "element-ui";

axios.interceptors.response.use(r => {
	if (r.data && (r.data.code !== '000000' && r.data.code !== '200')) {
		Message.error(JSON.stringify(r.data.msg||r.data.text));
		return Promise.reject(r);
	}
	return r.data;
}, error => {
	if (error.response.status && error.response.status === 401){
		location.href = SSO_LOGIN_HOST + '?from=' + location.href;
	}
	if (error.response.status && error.response.status === 403){
		Message.error("您无权操作此链接.");
	}
	if (error.response) {
		Message.error(JSON.stringify(error.response.data.text || error.response.data.msg));
	}

	return Promise.reject(error);
});

axios.interceptors.request.use(config => {
	config.headers['Content-Type'] = 'application/json;charset=UTF-8';
	return config;
})


export default {
	post(url, data, header) {
		return axios({
			method: 'post',
			url: url,
			timeout: 20000,
			data: data ? data : {},
			withCredentials: true,
			headers: header ? header: {
				'Content-Type': 'application/json; charset=UTF-8'
			}
		})
	},
	get(url, params) {
		return axios({
			method: 'get',
			url: url,
			params,
			withCredentials: true,
			headers: {
				'Content-Type': 'application/json; charset=UTF-8'
			}
		})
	},
	getByUrl(url) {
		return axios({
			method: 'get',
			url: url,
			withCredentials: true,
			headers: {
				'Content-Type': 'application/json; charset=UTF-8'
			}
		})
	}
}

