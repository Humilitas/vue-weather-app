<template>
    <div id="app">
        <WeatherPanel/>
        <ArcgisMap/>
        <Loading v-show="$store.getters.showLoading"/>
    </div>
</template>

<script>


    const ArcgisMap = () => ({
        // 需要加载的组件 (应该是一个 `Promise` 对象)
        component: import("./components/ArcgisMap"),
        // 异步组件加载时使用的组件
        loading: Loading,

    });
    const WeatherPanel = () => ({
        // 需要加载的组件 (应该是一个 `Promise` 对象)
        component: import("./components/WeatherPanel"),
        // 异步组件加载时使用的组件
        loading: Loading,

    });
    import Loading from "./components/Loading";

    export default {
        name: 'App',
        components: {Loading, ArcgisMap, WeatherPanel},
    }
</script>

<style lang="scss">

    html,
    body,
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
    }
</style>
