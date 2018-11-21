import dateFormatModule from 'dateformat'

function dateFormat(val){
  return dateFormatModule(val, 'yyyy-mm-dd')
}

function timeFormat(val){
  return dateFormatModule(val, 'yyyy-mm-dd HH:MM:ss')
}

function weekFormat(val, key){
	if(dateFormatModule(val, 'dddd') == 'Monday') {
		return dateFormatModule(val, 'yyyy-mm-dd') + " 星期一 " + dateFormatModule(val, 'HH:MM:ss')
	}else if(dateFormatModule(val, 'dddd') == 'Tuesday') {
		return dateFormatModule(val, 'yyyy-mm-dd') + " 星期二 " + dateFormatModule(val, 'HH:MM:ss')
	}else if(dateFormatModule(val, 'dddd') == 'Wednesday') {
		return dateFormatModule(val, 'yyyy-mm-dd') + " 星期三 " + dateFormatModule(val, 'HH:MM:ss')
	}else if(dateFormatModule(val, 'dddd') == 'Thursday') {
		return dateFormatModule(val, 'yyyy-mm-dd') + " 星期四 " + dateFormatModule(val, 'HH:MM:ss')
	}else if(dateFormatModule(val, 'dddd') == 'Friday') {
		return dateFormatModule(val, 'yyyy-mm-dd') + " 星期五 " + dateFormatModule(val, 'HH:MM:ss')
	}else if(dateFormatModule(val, 'dddd') == 'Saturday') {
		return dateFormatModule(val, 'yyyy-mm-dd') + " 星期六 " + dateFormatModule(val, 'HH:MM:ss')
	}else if(dateFormatModule(val, 'dddd') == 'Sunday') {
		return dateFormatModule(val, 'yyyy-mm-dd') + " 星期日 " + dateFormatModule(val, 'HH:MM:ss')
	} else {
		return dateFormatModule(val, key)
	}
}

export {dateFormat , timeFormat , weekFormat};
