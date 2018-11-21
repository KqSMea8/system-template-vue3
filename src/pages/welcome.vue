<style scoped>
    .home {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .welcome{
        width:100%;
        height:100%;
        /* background: url("../assets/img/welcome.jpg") no-repeat; */
        -webkit-background-size:;
        background-size:100% 100%;
    }
</style>

<template>
    <div class="home">
        <h1 v-if="!menuIs">对不起！ 您没有权限</h1>
        <div v-if="menuIs" class="welcome"></div>
    </div>
</template>

<script>
    import Controller from '../api/controller'
    export default {
        computed:{
            async menuIs() {
                let menus = sessionStorage.getItem('sysmenus')
                console.log(menus,'===menus===')
                if(menus.length){
                    return true
                }else{
                    return false
                }
            }
        }
    }
</script>
