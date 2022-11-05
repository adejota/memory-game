<template>
   <v-responsive max-width="700px" style="margin: 0 auto; height: 100%;">
        <v-container class="animate__animated animate__slideInRight animate__faster">
            <v-row no-gutters class="lightGray">
                <v-col class="d-flex justify-center mb-2">
                    <span class="darkGray--text text-center"
                        style="font-size: 20px;"
                    >
                        Escolha uma dificuldade
                    </span>
                </v-col>

                <v-col cols="12" >
                    <div v-for="difficulty in difficulties" :key="difficulty.id"
                        class="mt-4"
                    >
                        <v-btn block outlined plain @click="setSelectedDifficulty(difficulty)"
                            :class="{ 'outlined plain': selectedDifficulty.id === difficulty.id }"
                            :color="selectedDifficulty.id === difficulty.id ? 'primary' : 'darkGray'"
                            :ripple="false"
                        >
                            <span
                                :color="selectedDifficulty.id === difficulty.id ? 'primary' : 'darkGray'"
                                :class="{ 'font-weight-bold': selectedDifficulty.id === difficulty.id }"
                            >
                                {{ difficulty.name }}
                            </span>
                        </v-btn>
                    </div>
                </v-col>
            </v-row>

            <v-row no-gutters
                class="d-flex justify-center align-center mt-8
                    animate__animated animate__zoomIn animate__faster"
            >
                <v-btn x-large class="px-16 primary rounded-pill" elevation="6"
                    style="font-size: 16px; font-weight: bold;"
                    @click="startGame()"
                >
                    Começar
                </v-btn>
            </v-row>
        </v-container>
    </v-responsive>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'


export default {
    name: 'Nickame',

    computed: {
        ...mapGetters(['difficulties', 'selectedDifficulty'])
    },

    methods: {
        ...mapMutations(['setSelectedDifficulty']),

        startGame() {
            this.$router.push('/game')
        }
    }
}
</script>

<style scoped>

</style>