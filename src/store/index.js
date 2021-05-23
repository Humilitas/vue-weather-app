import Vue from 'vue';
import Vuex from 'vuex';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        weatherData: {}
    },
    mutations: {
        updateWeatherData(state, data) {
            state.weatherData = data;
        }
    },
    actions: {
        getWeatherByLocation({commit}, location) {
            const {longitude, latitude} = location;
            fetch(`${process.env.VUE_APP_API_URL}/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.VUE_APP_API_KEY}`)
                .then(res => res.json())
                .then(json => {
                    commit('updateWeatherData', json);
                }).catch(e => {
                    console.warn(e);
                    commit('updateWeatherData', {});
                }
            );
        },
        getWeatherByCity({commit}, city) {
            fetch(`${process.env.VUE_APP_API_URL}/weather/?q=${city}&units=metric&APPID=${process.env.VUE_APP_API_KEY}`)
                .then(res => res.json())
                .then(json => {
                    commit('updateWeatherData', json);
                }).catch(e => {
                    console.warn(e);
                    commit('updateWeatherData', {});
                }
            );
        }
    },
    modules: {}
})
