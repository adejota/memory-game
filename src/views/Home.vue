<template>
    <v-responsive max-width="700px" style="margin: 0 auto; height: 100%;">
        <v-container 
            class="pa-0
                animate__animated animate__fadeIn"
        >
            <v-row no-gutters class="d-flex flex-column lightGray">
                <v-col class="d-flex justify-center align-center mt-2">
                    <span class="darkGray--text text-center animate__animated animate__fadeInUp"
                        v-show="showHelloMsg"
                        style="font-size: 28px; font-weight: bold;"
                    >
                        Olá, amigo. <br> eu sou o Pig!
                    </span>
                </v-col>

                <v-col class="d-flex justify-center align-center mt-4">
                    <span class="darkGray--text animate__animated animate__fadeInUp"
                        v-show="showGameMsg"
                        style="font-size: 20px;"
                    >
                        Vamos jogar uma partida?
                    </span>
                </v-col>
            </v-row>

            <v-row no-gutters
                v-if="showButton"
                class="d-flex justify-center align-center mt-6
                    animate__animated animate__zoomIn animate__faster"
            >
                <v-btn x-large class="px-16 primary rounded-pill" elevation="6"
                    style="font-size: 16px; font-weight: bold;"
                    @click="$router.push('/nickname')"
                >
                    Vamos lá
                </v-btn>
            </v-row>
        </v-container>
    </v-responsive>
</template>

<script>
export default {
    name: 'Home',

    data() {
        return {
            translateLogoUp: false,
            showHelloMsg: false,
            showGameMsg: false,
            showButton: false,
        }
    },

    created() {
        setTimeout(() => {
            this.showHelloMsg = true
        }, 1000)

        setTimeout(() => {
            this.showGameMsg = true
        }, 1800)

        setTimeout(() => {
            this.showButton = true
        }, 2500)
    }
}
</script>

<style scoped>
/* @keyframes translate {
  0% {
    transform: translateY(300%);
  }
  100% {
    transform: translateY(0);
  }
}

.loader--fx {
  animation-name: translate;
  animation-duration: 300ms;
  animation-timing-function: ease-in-out;
} */
</style>