<template>
	<el-breadcrumb separator="》">
		<el-breadcrumb-item >{{ $route.name || '首页' }}</el-breadcrumb-item>
		<el-breadcrumb-item v-for="item in arry" :key="item">{{item}}</el-breadcrumb-item>
	</el-breadcrumb>
</template>
<script>
	import dateFormat from 'dateformat'
	export default {
		props: {
			arry: Array
		},
		data() {
			return {}
		},
		methods: {}
	}
</script>
<style lang="scss" scoped>
	.el-breadcrumb {
		padding: 10px;
		border-top: 5px solid #eee;
		border-bottom: 5px solid #eee;
	}
</style>
