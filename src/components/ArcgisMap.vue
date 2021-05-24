<template>
    <div class="mapdiv"></div>
</template>

<script>
    import Map from "@arcgis/core/Map";
    import MapView from "@arcgis/core/views/MapView";

    export default {
        name: "ArcgisMap",
        data() {
            return {
                currentLocation: [114.16317749017576, 22.451707028485682]
            }
        },
        async mounted() {
            // Typical usage
            const map = new Map({
                basemap: "national-geographic"
            });
            let mapView = new MapView({
                map,
                container: this.$el,
                zoom: 6,
                center: this.currentLocation,
            });
            mapView.on('click', (e) => {
                console.log(e);
                const {latitude, longitude} = e.mapPoint;
                this.$store.dispatch("getWeatherByLocation", {latitude, longitude});
            });
        },
    }
</script>

<style scoped>
    @import 'https://js.arcgis.com/4.19/@arcgis/core/assets/esri/themes/light/main.css';


    .mapdiv {
        padding: 0;
        margin: 0;
        height: 100%;
    }
</style>