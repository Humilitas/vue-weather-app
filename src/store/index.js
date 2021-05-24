import Vue from 'vue';
import Vuex from 'vuex';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        weatherData: {},
        weatherMessage: '',
        loadingCount: 0,
    },
    getters: {
        showLoading: state => state.loadingCount > 0,
    },
    mutations: {
        updateWeatherData(state, data) {
            state.weatherData = data;
        },
        updateWeatherMessage(state, mes) {
            state.weatherMessage = mes;
        },
        loadingAdd(state) {
            state.loadingCount++;
        },
        loadingMinus(state) {
            state.loadingCount--;
        },
    },
    actions: {
        getWeatherByLocation({commit}, location) {
            commit('loadingAdd');
            const {longitude, latitude} = location;
            fetch(`${process.env.VUE_APP_API_URL}/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.VUE_APP_API_KEY}`)
                .then(res => {
                    return res.json();
                })
                .then(json => {
                    commit('updateWeatherData', json);
                })
                .catch(e => {
                        console.warn(e);
                        commit('updateWeatherData', {});
                    }
                )
                .finally(() => {
                    commit('loadingMinus');
                });
        },
        getWeatherByCity({commit}, city) {
            commit('loadingAdd');
            fetch(`${process.env.VUE_APP_API_URL}/weather/?q=${city}&units=metric&APPID=${process.env.VUE_APP_API_KEY}`)
                .then(res => res.json())
                .then(json => {
                    if (json.cod === '404') {
                        commit('updateWeatherData', {});
                        commit('updateWeatherMessage', json.message);
                        return;
                    }

                    commit('updateWeatherMessage', '');
                    commit('updateWeatherData', json);
                })
                .finally(() => {
                    commit('loadingMinus');
                });

        }
    },
    modules: {}
})
