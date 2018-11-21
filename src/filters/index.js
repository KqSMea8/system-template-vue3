import Vue from 'vue'
import {dateFormat,timeFormat,weekFormat} from '@/utils/timeUtil'

Vue.filter('date', dateFormat)
Vue.filter('time', timeFormat)
Vue.filter('week', weekFormat)

