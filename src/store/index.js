import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        showAppBar: true,
        nickname: '',
        selectedDifficulty:
            {
                id: 0,
                name: 'Fácil',
                cards: 16,
                description: 'Molezinha 🥱 8 pares',
                averageTime: 360,
                cols: 3,
                rows: 4,
                cardSize: { x: 62, y: 62},
            }
        ,
        selectedTheme: 
            {
                id: 0,
                name: 'Animais',
                folder: 'animals',
                icon: '',
                items: [ 'bear', 'bee', 'bird', 'cow', 'crocodile', 'duck', 'fatdog', 'fish', 'giraffe', 'panda', 'pig', 'whitecat' ]
            }
        ,
        difficulties: [
            {
                id: 0,
                name: 'Fácil',
                cards: 16,
                description: 'Molezinha 🥱 8 pares',
                averageTime: 360,
                cols: 3,
                rows: 4,
                cardSize: { x: 54, y: 54},
            },
            {
                id: 1,
                name: 'Médio',
                cards: 20,
                description: `De boa 😄 14 pares`,
                averageTime: 360,
                cols: 3,
                rows: 5,
                cardSize: { x: 54, y: 54},
            },
            {
                id: 2,
                name: 'Difícil',
                cards: 24,
                description: 'Hmm... desafiador 😮 21 pares',
                averageTime: 360,
                cols: 3,
                rows: 6,
                cardSize: { x: 54, y: 54},
            }
        ],
        themes: [
            {
                id: 0,
                name: 'Animais',
                folder: 'animals',
                icon: '',
                items: [ 'bear', 'bee', 'bird', 'cow', 'crocodile', 'fatdog', 'fish', 'panda', 'pig', 'sheep', 'duck', 'whitecat' ]
            },
            {
                id: 1,
                name: 'Tecnologia',
                folder: 'social-media',
                icon: '',
                items: [ 'android', 'apple', 'cat', 'googleplusround', 'microsoft', 'robot', 'safari', 'spotify', 'twitch', 'twitter', 'windows', 'youtube' ]
            },
            {
                id: 2,
                name: 'Viagem',
                folder: 'travel',
                icon: '',
                items: [ 'Baloon', 'Boat', 'Bus', 'Compass', 'Earth', 'Guide', 'Hotel1', 'Luggage', 'Map1', 'Passport', 'Plane', 'Ticket' ]
            }
        ]
    },
    getters: {
        showAppBar(state) {
            return state.showAppBar
        },

        nickname(state) {
            return state.nickname
        },

        themes(state) {
            return state.themes
        },

        difficulties(state) {
            return state.difficulties
        },

        selectedTheme(state) {
            return state.selectedTheme
        },

        selectedDifficulty(state) {
            return state.selectedDifficulty
        },
    },
    mutations: {
        setShowAppBar(state, payload) {
            state.showAppBar = payload
        },

        setNickname(state, payload) {
            state.nickname = payload
        },

        setSelectedTheme(state, payload) {
            state.selectedTheme = payload
        },

        setSelectedDifficulty(state, payload) {
            state.selectedDifficulty = payload
        },
    },
    actions: {
    },
    modules: {
    },
    plugins: [createPersistedState()],
})
