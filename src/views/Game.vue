<template>
    <v-responsive max-width="700px" style="margin: 0 auto; height: 100%;">
        <v-container fluid class="px-4 py-8 animate__animated animate__slideInRight animate__faster">
            <v-row class="mx-4 mb-0 pa-0" align="center" justify="center" style="height: 100%;">
                <v-col align="center" justify="center"
                    v-for="card in cards"
                    :key="card.id"
                    :cols="selectedDifficulty.cols"
                    class="pa-0 ma-0"
                    :style="`width: ${cardWidth}px; height: ${cardHeight}px;`"
                >
                    <v-card v-if="!card.open" align="center" justify="center"
                        class="d-flex justify-center align-center grey lighten-2 perfect-shadow"
                        outlined
                        tile
                        @click="openCard(card)"
                        :disabled="verifying"
                        :ripple="false"
                        width="80%"
                        height="80%"
                    >
                    </v-card>
                    <v-card v-else-if="!card.correct" align="center" justify="center"
                        class="d-flex justify-center align-center perfect-shadow
                            animate__animated animate__flipInY"
                        outlined
                        tile
                        :ripple="false"
                        width="80%"
                        height="80%"
                    >
                        <img :src="getImgUrl(card.text)" :style="`width: ${cardWidth - 12}px;`"
                            class="pa-2"
                        >
                    </v-card>
                    <v-card v-else-if="card.correct" align="center" justify="center"
                        class="d-flex justify-center align-center animate__animated animate__flipInY perfect-shadow"
                        outlined
                        tile
                        :ripple="false"
                        width="80%"
                        height="80%"
                    >
                        <img :src="getImgUrl(card.text)" :style="`width: ${cardWidth - 12}px;`"
                            class="pa-2"
                        >
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <v-dialog
            v-model="finishedGame"
            width="500"
        >
            <v-card class="lightGray pa-8 rounded-xl" elevation="6">
                <v-row no-gutters class="d-flex flex-column lightGray">
                    <v-col class="d-flex justify-center align-center">
                        <span class="darkGray--text text-center"
                            style="font-size: 28px; font-weight: bold;"
                        >
                            Parabéns, {{ nickname }}!
                        </span>
                    </v-col>

                    <v-col class="d-flex justify-center align-center mt-4">
                        <span class="darkGray--text text-center"
                            style="font-size: 20px;"
                        >
                            Você resolveu o jogo em {{ gameTime }}
                        </span>
                    </v-col>
                </v-row>

                <v-row no-gutters
                    class="d-flex justify-center align-center mt-6 lightGray"
                >
                    <v-btn x-large class="px-6 secondary rounded-pill" elevation="6"
                        style="font-size: 16px; font-weight: bold;"
                        @click="$router.push('/theme')"
                    >
                        Trocar tema
                    </v-btn>
                </v-row>

                <v-row no-gutters
                    class="d-flex justify-center align-center mt-6 lightGray"
                >
                    <v-btn x-large class="px-6 accent rounded-pill" elevation="6"
                        style="font-size: 16px; font-weight: bold;"
                        @click="$router.push('/difficulty')"
                    >
                        Trocar dificuldade
                    </v-btn>
                </v-row>

                <v-row no-gutters
                    class="d-flex justify-center align-center mt-6 lightGray"
                >
                    <v-btn x-large class="px-6 primary rounded-pill" elevation="6"
                        style="font-size: 16px; font-weight: bold;"
                        @click="playAgain()"
                    >
                        Jogar novamente
                    </v-btn>
                </v-row>
            </v-card>
        </v-dialog>
    </v-responsive>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'GamePage',
    
    data() {
        return {
            windowWidth: 0,
            cardWidth: 0,
            cardHeight: 0,
            cards: [],
            openedCard: null,
            verifying: false,
            finishedGame: false,
            time: {
                start: 0,
                end: 0,
            }
        }
    },

    computed: {
        ...mapGetters(['selectedTheme', 'selectedDifficulty', 'nickname']),

        gameTime() {
            let time = this.time.end - this.time.start
            if (time < 60) {
                return `${time} segundos`
            } else {
                let minutes = Math.floor(time / 60)
                let seconds = time % 60
                let minText = minutes > 1 ? 'minutos' : 'minuto'
                let secText = seconds > 1 ? 'segundos' : 'segundo'
                return `${minutes} ${minText} e ${seconds} ${secText}`
            }
        }
    },

    created() {
        this.startGame()
    },

    watch: {
        cards: {
            deep: true,
            handler(val) {
                let cardsNotFound = val.filter(c => c.correct === false)
    
                if (cardsNotFound.length === 0) {
                    this.setTime('end')
                    setTimeout(() => {
                        this.finishedGame = true
                    }, 2000)
                }
    
                return this.finishedGame
            }
        }
    },

    methods: {
        startGame() {
            this.resetTime()
            this.setCardSize()
            this.setCards()
        },

        setCardSize() {
            this.windowWidth = window.innerWidth
            const windowWidth = window.innerWidth > 400 ? 400 : window.innerWidth
            this.cardWidth = (windowWidth - 128) / this.selectedDifficulty.cols
            this.cardHeight = this.cardWidth
        },

        setCards() {
            let items = this.selectedTheme.items
            let selectedItems = items.slice(0, this.selectedDifficulty.cards / 2)
            let createdCards = selectedItems.map((item, index) => {
                return { code: index, text: item, open: false, correct: false }
            })
            let duplicatedSelectedCards = createdCards

            createdCards.forEach(card => {
                duplicatedSelectedCards.push(card)
            })
            let shuffledCards = this.shuffleCards(duplicatedSelectedCards)
            let uniqueCards = shuffledCards.map((card, index) => {
                return { id: index, ...card }
            })

            this.cards = uniqueCards
            this.setTime('start')
        },

        getImgUrl(card) {
            return require('../assets/themes/' + this.selectedTheme.folder + '/' + card + '.svg')
        },

        shuffleCards(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1))
                const temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }

            return array
        },

        openCard(card) {
            if (!this.openedCard) {
                if (!card.open) {
                    card.open = true
                    this.openedCard = card
                }
            } else {
                if (!card.open) {
                    card.open = true
                    this.verifying = true
                    if (this.openedCard.code === card.code) {
                        this.openedCard.correct = true
                        card.correct = true
                        this.verifying = false
                        this.openedCard = null
                    } else {
                        setTimeout(() => {
                            this.openedCard.open = false
                            card.open = false
                            this.openedCard = null
                            this.verifying = false
                        }, 750);
                    }
                }
            }
        },

        setTime(status) {
            if (status === 'start') {
                return this.time.start = Math.floor(Date.now() / 1000)
            } else {
                return this.time.end = Math.floor(Date.now() / 1000)
            }
        },

        resetTime() {
            this.time = { start: 0, end: 0 }
        },

        playAgain() {
            this.startGame()
            this.finishedGame = false
        }
    }
}
</script>

<style scoped>
.perfect-shadow {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
</style>
