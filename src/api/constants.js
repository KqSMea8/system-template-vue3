const HOST = location.host;
const SCHEMA = window.location.protocol;
const protocol = location.protocol
window.prexUrl = `${protocol}//${HOST}`
const ENV = [
	{host: /beta/, env: 'BETA'},
	{host: /alta.faas/, env: 'BETA'},
	{host: /test|alpha/, env: 'ALPHA'},
	{host: /faas.ele.me/, env: 'PROD'},
	{host: /.*/, env: 'LOCAL'}
].find(item => item.host.test(HOST)).env;

const STARGATE_HOST = {
	LOCAL: 'http://stargate.alpha.elenet.me/',
	ALPHA: 'https://stargate.alpha.elenet.me/',
	BETA: 'https://stargate.alta.elenet.me/',
	PROD: 'https://stargate.ele.me/'
}[ENV]

const API_HOST = STARGATE_HOST + 'delimont.quickmart'
const SM_HOST = STARGATE_HOST + 'delimont.sm'

const SSO_LOGIN_HOST = {
	LOCAL: 'https://delimont-sm.faas.alpha.elenet.me/#/sign/in',
	ALPHA: 'https://delimont-sm.faas.alpha.elenet.me/#/sign/in',
	BETA: 'https://delimont-sm.faas.alta.elenet.me/#/sign/in',
	PROD: 'https://delimont-sm.faas.ele.me/#/sign/in'
}[ENV];
const SSO_EQUIT_HOST = {
    //LOCAL: 'https://ssodev.rajax.me',
    LOCAL: 'https://ssomdc.rajax.me',
    ALPHA: 'https://ssodev.rajax.me',
    BETA: 'https://ssomdc.rajax.me',
    PROD: 'http://sso.rajax.me'
}[ENV];

const SYS_ID = 89

export {
	STARGATE_HOST,
	API_HOST,
	SM_HOST,
	SSO_LOGIN_HOST,
    SSO_EQUIT_HOST,
	SYS_ID
}
