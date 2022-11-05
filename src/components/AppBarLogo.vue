<template>
    <v-container v-if="showAppBar"
        class="lightGray d-flex flex-column pa-0 pt-4"
    >
        <v-row no-gutters>
            <v-col class="d-flex justify-center align-center animate__animated animate__bounceIn">
                <v-img
                    max-height="100"
                    max-width="100"
                    src="../../public/pig.png"                    
                >
                </v-img>
            </v-col>

            <v-col class="pl-4" 
                style="position: absolute; left: 0"
                
            >
                <v-btn v-if="page" icon @click="setNavBack()">
                    <v-icon color="darkGray">mdi-keyboard-backspace</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'AppBarLogo',

    computed: {
        ...mapGetters(['showAppBar']),

        page() {
            return this.$route.name !== 'Home'
        }
    },

    methods: {
        setNavBack() {
            if (this.$route.path === '/nickname') {
                this.$router.push('/')
            } else if (this.$route.path === '/theme') {
                this.$router.push('/nickname')
            } else if (this.$route.path === '/difficulty') {
                this.$router.push('/theme')
            }  else if (this.$route.path === '/game') {
                this.$router.push('/difficulty')
            }
        }
    }
}
</script>
