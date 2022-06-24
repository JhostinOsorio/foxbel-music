<template>
  <div class="container-music">
    <div class="music-banner">
      <div class="music-banner__player">
        <img class="music-banner__logo" :src="musicActive.img" alt="" />
        <button class="music-banner__play" @click="playMusic">
          <i v-if="isPlay" class="fa-solid fa-pause"></i>
          <i v-else class="fa-solid fa-play"></i>
        </button>
      </div>
      <div class="music-banner__detail">
        <img
          class="music-banner__poster"
          :src="musicActive.imgLandscape"
          alt=""
        />
        <div class="music-banner__text">
          <div class="music-banner__text-description">
            <h2 class="music-banner__title-track">
              {{ musicActive.titleTrack }}
            </h2>
            <p class="music-banner__pluss">
              <span class="music-banner__pluss-1"
                >Lo mejor de {{ musicActive.name }}</span
              ><span class="music-banner__pluss-2"
                >{{ musicActive.followers }} seguidores</span
              >
            </p>
            <p class="music-banner__info">{{ musicActive.description }}</p>
          </div>
          <div class="music-banner__text-controls">
            <button class="music-banner__repro" @click="playMusic">
              {{ isPlay ? 'Pausar' : 'Reproducir' }}
            </button>
            <button class="music-banner__seguir">Seguir</button>
            <button class="music-banner__tools">
              <i class="fa-solid fa-ellipsis"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="musics">
      <h3 class="title-result">Resultados</h3>
      <div class="list-grid">
        <div class="card-music" v-for="music in restMuscis" :key="music.id">
          <div class="card-music__picture">
            <img class="card-music__img" :src="music.img" alt="" />
            <button class="card-music__tools">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
            <button class="card-music__play" @click="selectedMusic(music)">
              <i class="fa-solid fa-play"></i>
            </button>
          </div>
          <div class="card-music__info">
            <h5 class="card-music__track-name">{{ music.titleTrack }}</h5>
            <small class="card-music__track-artist">{{ music.name }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import { getAllMusics } from "@/services/musics";

export default {
  name: "Home",
  methods: {
    getAllMusics,
    ...mapMutations(['SET_TOGGLE_PLAY', 'SET_MUSIC_ACTIVE', 'SET_REPRODUCTOR_ACTIVE']),
    playMusic() {
      this.SET_TOGGLE_PLAY(!this.isPlay)
      const audioControl = document.getElementById('audio-control')
      if (this.isPlay) {
        this.SET_REPRODUCTOR_ACTIVE(true)
        audioControl?.play();
      } else {
        this.SET_REPRODUCTOR_ACTIVE(false)
        audioControl?.pause();
      }
    },
    selectedMusic(music) {
      const mainContent = document.querySelector('.main-content')
      mainContent.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
      const audioControl = document.getElementById('audio-control')
      audioControl?.pause();
      setTimeout(() => {
        this.SET_TOGGLE_PLAY(true)
        this.SET_MUSIC_ACTIVE(music)
        this.SET_REPRODUCTOR_ACTIVE(true)
        audioControl?.play();
      }, 1);
    },
  },
  computed: {
    ...mapState(["musics", "musicActive", "isPlay"]),
    ...mapGetters(['restMuscis'])
  },
  created() {
    const musics = this.getAllMusics();
    this.$store.commit("SET_MUSICS", musics);
    if (musics.length > 0) {
      this.$store.commit("SET_MUSIC_ACTIVE", musics[0]);
    }
  },
};
</script>

<style lang="scss">
@import "@/scss/variables/variables.scss";
.container-music {
  padding: 1rem 1.25rem;

  @media screen and (min-width: map-get($container-min-widths, "sm")) {
    padding: 1rem 1.75rem;
  }

  @media screen and (min-width: map-get($container-min-widths, "md")) {
    padding: 1rem 2.5rem;
  }

  @media screen and (min-width: map-get($container-min-widths, "lg")) {
    padding: 1rem $padding-x-content-right;
  }
}

.music-banner {
  display: flex;
  width: 100%;
  height: 250px;
  color: $white;

  &__player {
    display: none;
    position: relative;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 250px;

    @media screen and (min-width: map-get($container-min-widths, "lg")) {
      display: flex;
    }
  }
  &__logo {
    width: 250px;
    height: 100%;
  }

  &__play {
    position: absolute;
    background-color: transparent;
    color: $white;
    font-size: 3rem;
    border: none;
    outline: none;
    padding: 0;
    z-index: 1;
    cursor: pointer;

    &:hover {
      color: darken($white, 10);
    }
  }

  &__detail {
    position: relative;
    width: 100%;
    height: 100%;
  }

  &__poster {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: opacity(.25);
  }

  &__text {
    padding: 1em;
    display: flex;
    flex-direction: column;
    background-color: rgba(167, 0, 0, 0.3);
    width: 100%;
    height: 100%;

    &-description {
      flex: 1;
    }

    &-controls {
      button {
        cursor: pointer;
      }
    }
  }

  &__title-track {
    font-size: 1.375rem;
  }

  &__pluss {
    &-1 {
      font-size: 0.875rem;
    }

    &-2 {
      font-size: 0.625rem;
      color: #662323;
      margin-left: 1em;
    }
  }

  &__info {
    font-size: 0.75rem;
    line-height: 1.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  &__repro {
    background-color: transparent;
    outline: none;
    color: $white;
    background-color: $primary;
    border-radius: 100px;
    border: none;
    padding: 0.5em 1.5rem;
  }

  &__seguir {
    outline: none;
    border: 1px solid $primary;
    color: $primary;
    background-color: transparent;
    border-radius: 100px;
    padding: 0.5em 1.5rem;
    margin-left: 1rem;
  }

  &__tools {
    background-color: transparent;
    outline: none;
    border: none;
    color: $white;
    color: $white;
    font-size: 1.5rem;
    margin-left: 1rem;
  }
}

.title-result {
  color: $primary;
  font-size: 1.325rem;
}

.list-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1em;
}

.card-music {
  position: relative;

  &__picture {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__img {
    width: 100%;
  }

  &__tools {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    color: white;
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1.5rem;
  }

  &__play {
    position: absolute;
    cursor: pointer;
    background-color: transparent;
    color: $white;
    outline: none;
    border: none;
    font-size: 2.5rem;
    z-index: 5;

    &:hover {
      color: darken($white, 10);
    }
  }

  &__track-name {
    margin-top: 0.25rem;
    margin-bottom: 0.05rem;
    font-size: 0.875;
  }

  &__track-artist {
    font-size: 0.75rem;
    color: $gray;
    margin-top: 0.25rem;
  }
}
</style>
