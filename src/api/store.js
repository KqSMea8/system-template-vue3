const get = (k) => {
	return sessionStorage.getItem(k);
};
const set = (k, v) => {
	sessionStorage.setItem(k, v);
}
export default {
	getCurrentBrand(){
		return get('currentBrand')
	},
	setCurrentBrand(brand) {
		set('currentBrand', brand)
	}
}
