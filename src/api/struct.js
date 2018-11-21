'use strict';

let createTree = function (allNodes, rootNodes, id) {
	let tree = [];
	rootNodes.map((rootNode, parentId) => {
		let childNodes = allNodes[rootNode[id]];
		if (!rootNodes) {
			return;
		}
		if (childNodes && childNodes[id] != rootNode[id]) {
			rootNode.children = createTree(allNodes, childNodes, id);
		}
		tree.push(rootNode);
	})
	return tree;
};

let groupByParents = function (array, options) {
	return array.reduce(function (prev, item) {
		let parentId = item[options.parentId] || options.rootId;
		if (parentId && prev[parentId]) {
			prev[parentId].push(item);
			return prev;
		}
		prev[parentId] = [item];
		return prev;
	}, {});
};

// let stringToArray = function (arr){
// 	return arr.split(',').map(item => {
// 		console.log(item)
// 		return item
// 	})
// }

let backMenus = function (data) {
	let localMenus = sessionStorage.getItem("routermenus");
	let menus = []
	if(localMenus && localMenus.length > 0){
		localMenus = JSON.parse(localMenus);
		menus = data.filter(item => {
			if(item.level == 3){
				let tmps = localMenus.filter(menu => {
					return menu.menuName == item.menuName
				})
				if(tmps && tmps.length > 0){
					item.url = tmps[0].url
				}
			}
			if(item.level > 3){
				return false;
			}
			return true;
		})
	}
	return menus
}

export default {
	arrayToTree(data, options) {
		options = Object.assign({
			parentId: 'parentId',
			id: 'id',
			rootId: '0'
		}, options);
		if (!Array.isArray(data)) {
			throw new TypeError('Expected an object but got an invalid argument');
		}
		data = backMenus(data);
		let grouped = groupByParents(data, options);
		return createTree(grouped, grouped[options.rootId], options.id);

	}
}
