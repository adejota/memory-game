<template>
    <v-app :style="appStyles">
        <app-bar-logo />

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
import { mapMutations } from 'vuex'
import AppBarLogo from '@/components/AppBarLogo.vue'

export default {
    name: "App",

    components: { AppBarLogo },

    computed: {
        appStyles() {
			return {
				'background': `${this.$vuetify.theme.themes.light.lightGray}`
			}
		}
    },

    data() {
        return {

        }
    },

    created() {
        this.setShowAppBar(true)
    },

    methods: {
        ...mapMutations(['setShowAppBar']),
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

.v-application {
    font-family: 'Quicksand', sans-serif !important;
    height: 100vh;
}
</style>
