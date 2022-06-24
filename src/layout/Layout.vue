<template>
  <div class="container-app">
    <div class="section-up">
      <sidebar
        ref="sidebar"
        class="section-up__left"
        @close-sidebar="closeSidebar"
      />
      <div class="section-up__right">
        <navbar
          class="navbar"
          @show-sidebar="showSidebar"
        />
        <div class="main-content">
          <slot />
        </div>
      </div>
    </div>
    <player class="section-down" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Player from './components/Player.vue'
import Sidebar from './components/Sidebar.vue'
export default {
  name: 'Layout',
  components: {
    Sidebar,
    Player,
    Navbar,
  },
  methods:{
    closeSidebar() {
      this.$refs.sidebar.$el.classList.remove('section-up__left--show')
    },
    showSidebar() {
      this.$refs.sidebar.$el.classList.add('section-up__left--show')
    },
  },
}
</script>

<style lang="scss">
@import '@/scss/variables/variables.scss';
@import '@/scss/base/index.scss';
.container-app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.section-up {
  flex: 1;
  display: flex;

  .section-up__left {
    position: absolute;
    top: 0;
    transition: left .2s ease-in-out;
    left: -100%;
    width: 100%;
    height: 100vh;

    &--show {
      left: 0;
    }

    @media screen and (min-width: map-get($container-min-widths, 'sm')) {
      position: static;
      height: auto;
      width: $width-sm-sidebar;
    }

    @media screen and (min-width: map-get($container-min-widths, 'md')) {
      width: $width-md-sidebar;
    }

    @media screen and (min-width: map-get($container-min-widths, 'lg')) {
      width: $width-lg-sidebar;
    }
  }

  .section-up__right {
    flex: 1;
    display: flex;
    flex-direction: column;

    .navbar {
      height: $height-sm-navbar;

      @media screen and (min-width: map-get($container-min-widths, 'sm')) {
        height: $height-sm-navbar;
      }

      @media screen and (min-width: map-get($container-min-widths, 'md')) {
        height: $height-md-navbar;
      }

      @media screen and (min-width: map-get($container-min-widths, 'lg')) {
        height: $height-lg-navbar;
      }
    }

    .main-content {
      overflow: auto;
      height: calc(100vh - #{$height-sm-navbar} - #{$height-sm-footer});

      @media screen and (min-width: map-get($container-min-widths, 'sm')) {
        height: calc(100vh - #{$height-sm-navbar} - #{$height-sm-footer});
      }

      @media screen and (min-width: map-get($container-min-widths, 'md')) {
        height: calc(100vh - #{$height-md-navbar} - #{$height-md-footer});
      }

      @media screen and (min-width: map-get($container-min-widths, 'lg')) {
        height: calc(100vh - #{$height-lg-navbar} - #{$height-lg-footer});
      }
    }
  }
}

.section-down {
  height: $height-sm-footer;

  @media screen and (min-width: map-get($container-min-widths, 'sm')) {
    height: $height-sm-footer;
  }

  @media screen and (min-width: map-get($container-min-widths, 'md')) {
    height: $height-md-footer;
  }

  @media screen and (min-width: map-get($container-min-widths, 'lg')) {
    height: $height-lg-footer;
  }
}
</style>
