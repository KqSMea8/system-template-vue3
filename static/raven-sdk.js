// document.write(`<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
// <script src="//shadow.elemecdn.com/npm/raven-js@3.27.0/dist/raven.min.js" crossorigin></script>
// <script src="//shadow.elemecdn.com/npm/raven-js@3.27.0/dist/plugins/vue.min.js" crossorigin></script>
// <script src="//shadow.elemecdn.com/gl/god-dev/perf-js@2.0.0-beta13/dist/perf.min.js" crossorigin></script>
// <script>
// let raven = {
//     getGodId(id,testId){
//         let godId = id
//         if (window.location.host.indexOf('ele.me') > -1) {
//             godId = testId
//         }
//         // Sentry DSN 路径可在配置中心的项目页面查看接入指南
//         Raven
//             .config(godId)
//             .addPlugin(Raven.Plugins.Vue, Vue)
//             .install()
//     },
//     ElemePerfConfigs(url){
//         window.ElemePerfConfigs = {
//             appName: 'WEB://' + url,           // 必填, 自动生成的项目名称, 不可更改！
//             // pageName: '[page-name]',          // 可选, 页面名称
//             // serviceWorker: false,             // 可选, 如果项目使用了 service worker，请开启此选项
//             // xhrSend: false,                   // 可选, 是否使用 XHR 发送埋点数据
//             // dev: false,                       // 可选, 本地开发环境中开启此选项可以禁用 perf
//             // etraceApiFilter: /(^\/)|(ele(net)?\.me)/, // 可选, 用于过滤 api 域名
//         }
//     }
    
// }
// export default {
//     raven
// }
// </script>
// `)

function loadScript(url,callback){
    var head= document.getElementsByTagName('head')[0];
    var script= document.createElement('script');
    script.type= 'text/javascript';
    if(script.readyState){
         //IE
          script.onreadystatechange = function () {
               if (this.readyState == 'complete' || script.readyState == "loaded") {
                    script.onreadystatechange = null;
                    callback();
               }
          }
     }else{
          //其他浏览器
         script.onload = function(){
             callback();
         };
     }
    document.querySelectorAll('script')
    script.src = url;
    document.body.appendChild(script);
}
window.raven = {
    init(cb) {
        loadScript('https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js',function(){
            loadScript('http://shadow.elemecdn.com/npm/raven-js@3.27.0/dist/raven.min.js',function(){
                loadScript('http://shadow.elemecdn.com/npm/raven-js@3.27.0/dist/plugins/vue.min.js',function() {
                    loadScript('http://shadow.elemecdn.com/gl/god-dev/perf-js@2.0.0-beta13/dist/perf.min.js',function() {
                        cb()
                    })
                })
            })
        });
    },
    getGodId(id,testId){
        this.init(() => {
            let godId = id
        if (window.location.host.indexOf('ele.me') > -1) {
            godId = testId
        }
        // Sentry DSN 路径可在配置中心的项目页面查看接入指南
        Raven
            .config(godId)
            .addPlugin(Raven.Plugins.Vue, Vue)
            .install()
        })
        
    },
    ElemePerfConfigs(url){
        this.init(() =>{
            window.ElemePerfConfigs = {
                appName: 'WEB://' + url,           // 必填, 自动生成的项目名称, 不可更改！
                // pageName: '[page-name]',          // 可选, 页面名称
                // serviceWorker: false,             // 可选, 如果项目使用了 service worker，请开启此选项
                // xhrSend: false,                   // 可选, 是否使用 XHR 发送埋点数据
                // dev: false,                       // 可选, 本地开发环境中开启此选项可以禁用 perf
                // etraceApiFilter: /(^\/)|(ele(net)?\.me)/, // 可选, 用于过滤 api 域名
            }
        })
        
    }
    
}
