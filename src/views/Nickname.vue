<template>
   <v-responsive max-width="700px" style="margin: 0 auto; height: 100%;">
        <v-container fill-height class="d-flex align-start justify-center animate__animated animate__slideInRight animate__faster">
            <v-form v-model="valid" @submit.prevent="submit()"
                class="d-flex flex-column justify-start align-center"
            >
                <v-row no-gutters class="lightGray d-flex flex-column">
                    <v-col class="d-flex">
                        <span class="darkGray--text text-center"
                            style="font-size: 20px;"
                        >
                            Que bom te conhecer! Como seus amigos te chamam?
                        </span>
                    </v-col>

                    <v-col class="mt-6">
                        <v-text-field
                            v-model="name"
                            label="Digite seu apelido..."
                            single-line outlined
                            style="font-size: 20px;"
                            @focus="nicknameFocus()"
                            @blur="nicknameBlur()"
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row no-gutters
                    class="d-flex justify-center align-center
                        animate__animated animate__zoomIn animate__faster"
                >
                    <v-btn x-large class="px-16 primary rounded-pill" elevation="6"
                        style="font-size: 16px; font-weight: bold;"
                        :disabled="!name.length"
                        @click="submit"
                    >
                        Continuar
                    </v-btn>
                </v-row>
            </v-form>
        </v-container>
    </v-responsive>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
    name: 'Nickame',

    data() {
        return {
            valid: true,
            name: '',
        }
    },

    computed: {
        ...mapGetters(['nickname'])
    },

    created() {
        this.name = this.nickname
    },

    methods: {
        ...mapMutations(['setShowAppBar', 'setNickname']),

        submit() {
            this.nicknameBlur()
            this.setNickname(this.name)
            this.$router.push('/theme')
        },

        nicknameFocus() {
            this.setShowAppBar(false)
        },

        nicknameBlur() {
            this.setShowAppBar(true)
        }
    }
}
</script>

<style scoped>

</style>