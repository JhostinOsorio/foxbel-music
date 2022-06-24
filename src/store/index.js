import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    musics: [],
    musicActive: {},
    isPlay: false,
    isMuted: false,
    reproductorActive: false,
  },
  getters: {
    restMuscis(state) {
      return state.musics.filter(el => el.id !== state.musicActive.id)
    },
  },
  mutations: {
    SET_MUSICS(state, payload) {
      state.musics = [...payload]
    },
    SET_MUSIC_ACTIVE(state, payload) {
      state.musicActive = { ...payload }
    },
    SET_TOGGLE_PLAY(state, value) {
      state.isPlay = value
    },
    SET_TOGGLE_MUTED(state) {
      state.isMuted = !state.isMuted
    },
    SET_REPRODUCTOR_ACTIVE(state, value) {
      state.reproductorActive = value
    },
    BACK_MUSIC(state) {
      const indexMusicActive = [...state.musics].findIndex(el => el.id === state.musicActive.id)
      if (indexMusicActive <= 0) {
        state.musicActive = state.musics[state.musics.length - 1]
      } else {
        state.musicActive = state.musics[indexMusicActive - 1]
      }
    },
    NEXT_MUSIC(state) {
      const indexMusicActive = [...state.musics].findIndex(el => el.id === state.musicActive.id)
      if ((indexMusicActive + 1) >= state.musics.length) {
        state.musicActive = state.musics[0]
      } else {
        state.musicActive = state.musics[indexMusicActive + 1]
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
