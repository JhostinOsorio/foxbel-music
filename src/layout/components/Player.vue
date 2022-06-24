<template>
  <div class="section-footer-player">
    <div class="player__detail">
      <img
        class="player__img"
        :src="musicActive.img"
        alt="Adele"
      />
      <div class="player__info">
        <span class="player__name">{{ musicActive.titleTrack }}</span>
        <span class="player__artist">{{ musicActive.name }}</span>
      </div>
    </div>
    <div class="player__controls">
      <audio :key="musicActive.id" id="audio-control" controls style="display: none" ref="player" @ended="playEnded" @canplay="changeMusic">
        <source
          :id="musicActive.id"
          :key="musicActive.id"
          :src="musicActive.track"
        />
      </audio>
      <button class="player__button" @click="backMusic">
        <i class="fa-solid fa-backward-step"></i>
      </button>
      <button class="player__button player__button--play" @click="playMusic">
        <i v-if="isPlay" class="fa-solid fa-pause"></i>
        <i v-else class="fa-solid fa-play"></i>
      </button>
      <button class="player__button" @click="nextMusic">
        <i class="fa-solid fa-forward-step"></i>
      </button>
    </div>
    <div class="player__volume">
      <input
        v-model="volumeRange"
        class="player__volume-range"
        type="range"
        min="0"
        max="100"
        @input="inputVolume"
      />
      <button class="player__button" @click="onMuted">
        <i v-if="isMuted" class="fa-solid fa-volume-xmark"></i>
        <template v-else>
          <i v-if="volumeRange >= 50" class="fa-solid fa-volume-high"></i>
          <i v-else-if="volumeRange < 50 && volumeRange > 0" class="fa-solid fa-volume-low"></i>
          <i v-else-if="volumeRange <= 0" class="fa-solid fa-volume-off"></i>
        </template>
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'Footer',
  data() {
    return {
      volumeRange: 100,
    }
  },
  computed: {
    ...mapState(['musicActive', 'isPlay', 'isMuted', 'reproductorActive'])
  },
  methods: {
    ...mapMutations(['SET_TOGGLE_PLAY', 'SET_TOGGLE_MUTED', 'SET_REPRODUCTOR_ACTIVE', 'BACK_MUSIC', 'NEXT_MUSIC']),
    backMusic() {
      this.SET_TOGGLE_PLAY(false)
      this.BACK_MUSIC()
    },
    nextMusic() {
      this.SET_TOGGLE_PLAY(false)
      this.NEXT_MUSIC()
    },
    playMusic() {
      this.SET_TOGGLE_PLAY(!this.isPlay)
      if (this.isPlay) {
        this.SET_REPRODUCTOR_ACTIVE(true)
        this.$refs.player?.play();
      } else {
        this.SET_REPRODUCTOR_ACTIVE(false)
        this.$refs.player?.pause();
      }
    },
    changeMusic() {
      if (this.reproductorActive) {
        this.$refs.player?.play();
        this.SET_TOGGLE_PLAY(true)
      }
    },
    onMuted() {
      this.SET_TOGGLE_MUTED()
      this.$refs.player.muted = this.isMuted;
    },
    playEnded() {
      this.SET_TOGGLE_PLAY(false)
    },
    inputVolume(event) {
      this.$refs.player.volume = event.target.value / 100;
    },
  },
}
</script>

<style lang="scss">
@import '@/scss/variables/variables.scss';
.section-footer-player {
  background-color: #EB5757;
  display: flex;
  justify-content: space-between;
  color: $white;

  .player {

    &__detail {
      display: flex;
      align-items: center;
      flex: 1;
    }

    &__img {
      height: $height-sm-footer;
      width: $height-sm-footer;

      @media screen and (min-width: map-get($container-min-widths, 'sm')) {
        height: $height-sm-footer;
        width: $height-sm-footer;
      }

      @media screen and (min-width: map-get($container-min-widths, 'md')) {
        height: $height-md-footer;
        width: $height-md-footer;
      }

      @media screen and (min-width: map-get($container-min-widths, 'lg')) {
        height: $height-lg-footer;
        width: $height-lg-footer;
      }
    }

    &__info {
      margin-left: .5em;
      display: flex;
      flex-direction: column;
    }

    &__name {
      font-size: .875rem;
    }

    &__artist {
      font-size: .75rem;
      margin-top: .5rem;
    }

    &__controls {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
    }

    &__button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      outline: none;
      border: none;
      color: $white;
      height: 3.75rem;
      width: 3.75rem;
      border-radius: 100%;
      background: transparent;
      padding: 0;
      transition: color ease-in 0.2s;

      & > i {
        font-size: 1.25rem;
      }

      &:not(&--play):hover {
        color: darken($white, 10);
      }
    }

    &__button--play {
      background: #ff7676;
      transition: transform ease-in 0.2s;

      &:hover {
        transform: scale(1.1);
      }
    }

    &__volume {
    display: none;
    align-items: center;
    justify-content: flex-end;
    flex: 1;

    @media screen and (min-width: map-get($container-min-widths, 'sm')) {
      display: flex;
    }

    &-range {
      -webkit-appearance: none;
      -moz-appearance: none;
      height: 0.3rem;
      width: 100%;
      max-width: 140px;
      outline: none;
      border: none;
      border-radius: 100px;

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        -moz-appearance: none;
        outline: none;
        border: none;
        height: 1.25rem;
        width: 1.25rem;
        background: #fff;
        border-radius: 100%;
      }
    }
  }
  }
}
</style>
