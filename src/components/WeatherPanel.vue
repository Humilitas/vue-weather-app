<template>
    <div class="weather-panel">
        <div v-if="showLocationMessage" class="alert alert-warning alert-dismissible fade show" role="alert" style="max-width: 75vw;">
            <i class="bi bi-exclamation-triangle"></i> {{locationMessage}}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="showLocationMessage = false"></button>
        </div>
        <div v-if="showWeatherMessage" class="alert alert-warning alert-dismissible fade show" role="alert">
            <i class="bi bi-exclamation-triangle"></i> {{ weatherMessage}}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click=" $store.commit('updateWeatherMessage','')"></button>
        </div>
        <div class="input-group mb-3">
            <input type="text" class="form-control " placeholder="City name" aria-label="City name" v-model="city" @keypress="handleKeyPress">
            <button class="btn btn-outline-secondary" type="button" @click="getCityWeather"><i class="bi bi-search"></i> Search</button>
        </div>
        <div v-if="weatherData.weather">
            <p class="fs-4">{{weatherData.name}}</p>
            <img :src=" iconPath" alt="weather">
            <p class="fs-4">{{weatherData.weather[0].description}}</p>
            <p class="fs-4">temp: {{ weatherData.main.temp}}°</p>
            <p class="fs-4">humidity: {{ weatherData.main.humidity}}</p>
        </div>
        <div v-else>
            <h2>No data...</h2>
        </div>
    </div>
</template>

<script>

    const WEATHER_ICONS = {
        '01d': {
            icon: require('../assets/images/sunny.png')
        },
        '01n': {
            icon: require('../assets/images/sunny-night.png')
        },
        '02d': {
            icon: require('../assets/images/partly-cloudy.png')
        },
        '02n': {
            icon: require('../assets/images/partly-cloudy-night.png')
        },
        '03d': {
            icon: require('../assets/images/partly-cloudy.png')
        },
        '03n': {
            icon: require('../assets/images/partly-cloudy-night.png')
        },
        '04d': {
            icon: require('../assets/images/cloudy.png')
        },
        '04n': {
            icon: require('..//assets/images/cloudy-night.png')
        },

        '09d': {
            icon: require('../assets/images/rainstorm.png')
        },
        '09n': {
            icon: require('../assets/images/rainstorm.png')
        },
        '10d': {
            icon: require('../assets/images/rainy.png')
        },
        '10n': {
            icon: require('../assets/images/rainy.png')
        },
        '11d': {
            icon: require('../assets/images/rainy.png')
        },
        '11n': {
            icon: require('../assets/images/rainy.png')
        },
        '13d': {
            icon: require('../assets/images/snowy.png')
        },
        '13n': {
            icon: require('../assets/images/snowy.png')
        },
        '50d': {
            icon: 'http://openweathermap.org/img/wn/50d@2x.png'
        },
        '05n': {
            icon: 'http://openweathermap.org/img/wn/50d@2x.png'
        },

    };
    export default {
        name: "WeatherPanel",
        data() {
            return {
                longitude: 0,
                latitude: 0,
                showLocationMessage: false,
                locationMessage: '',
                city: '',
            }
        },
        mounted() {
            navigator.geolocation.getCurrentPosition(position => {
                const {longitude, latitude} = position.coords;
                this.longitude = longitude;
                this.latitude = latitude;
                this.$store.dispatch("getWeatherByLocation", {longitude, latitude});
            }, (err) => {
                console.log(err);
                this.showLocationMessage = true;
                this.locationMessage = err.message;
            });
        },
        methods: {
            getCityWeather() {
                if (this.city.trim() === '') {
                    alert('Invalid City!');
                    return;
                }
                this.$store.dispatch('getWeatherByCity', this.city);
                this.city = '';
            },
            handleKeyPress(e) {
                if (e.code === 13 || e.key === 'Enter') {
                    if (this.city.trim() === '') {
                        alert('Invalid City!');
                        return;
                    }
                    this.getCityWeather();
                }
            }
        },
        computed: {
            iconPath() {
                return WEATHER_ICONS[this.weatherData.weather[0].icon].icon;
            },
            weatherData() {
                return this.$store.state.weatherData;
            },
            weatherMessage() {
                return this.$store.state.weatherMessage;
            },
            showWeatherMessage() {
                return Boolean(this.weatherMessage);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .weather-panel {
        z-index: 1;
        position: fixed;
        top: 1rem;
        right: 1rem;
        width: fit-content;
        /*height: 300px;*/
        background: rgba(255, 255, 255, 0.25);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.18);
        padding: 1rem;

        img {
            width: 100%;
            max-width: 250px;
        }
    }

    @media screen and (max-width: 767px) {
        .weather-panel {
            max-width: calc(100vw - 2rem);
        }
    }
</style>