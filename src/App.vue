<template>
    <div id="app">
        <WeatherPanel></WeatherPanel>
        <ArcgisMap/>
        <Loading/>
    </div>
</template>

<script>

    import WeatherPanel from "./components/WeatherPanel";

    const ArcgisMap = () => import("./components/ArcgisMap");
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
