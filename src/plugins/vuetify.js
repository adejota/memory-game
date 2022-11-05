import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                lightGray: '#F6F6F6',
                darkGray: '#5F5662',
                primary: '#FF78C7',
                secondary: '#5ECFA4',
                accent: '#02BDD1',
                error: '#FA6D8D',
            },
        },
    },
});
