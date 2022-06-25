<template>
  <aside class="aside">
    <header class="aside-header">
      <picture class="aside-header__picture">
        <source media="(min-width:1140px)" srcset="img/foxbel-music@3x.png">
        <source media="(min-width:720px)" srcset="img/foxbel-music@2x.png">
        <img class="aside-header__img" src="img/foxbel-music.png" alt="Foxbel Music">
      </picture>
    </header>
    <nav class="aside-nav">
      <div class="aside-nav__section">
        <h2 class="aside-nav__title">Mi Librería</h2>
        <ul class="aside-nav__list">
          <li class="aside-nav__item"><router-link class="aside-nav__link aside-nav__link--active" to="/">Recientes</router-link></li>
          <li class="aside-nav__item"><router-link class="aside-nav__link" to="/">Artistas</router-link></li>
          <li class="aside-nav__item"><router-link class="aside-nav__link" to="/">Albums</router-link></li>
          <li class="aside-nav__item"><router-link class="aside-nav__link" to="/">Canciones</router-link></li>
          <li class="aside-nav__item"><router-link class="aside-nav__link" to="/">Estaciones</router-link></li>
        </ul>
      </div>
      <div class="aside-nav__section">
        <h2 class="aside-nav__title">Playlist</h2>
        <ul class="aside-nav__list">
          <li class="aside-nav__item"><router-link class="aside-nav__link" to="/">Metal</router-link></li>
          <li class="aside-nav__item"><router-link class="aside-nav__link" to="/">Para bailar</router-link></li>
          <li class="aside-nav__item"><router-link class="aside-nav__link" to="/">Rock 90s</router-link></li>
          <li class="aside-nav__item"><router-link class="aside-nav__link" to="/">Baladas</router-link></li>
        </ul>
      </div>
    </nav>
    <button class="aside-close" @click="$emit('close-sidebar')">
      <i class="fa-solid fa-circle-chevron-left"></i>
    </button>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>

<style lang="scss">
@import '@/scss/variables/variables.scss';
.aside {
  position: relative;
  background-color: $bg-color-sidebar;
  color: $text-color-sidebar;
  z-index: 10;

  &-header {
    display: flex;
    margin-top: 3rem;
    align-items: center;
    justify-content: space-between;
    padding-left: $padding-x-sidebar;
    padding-right: $padding-x-sidebar;

    &__picture {
      display: flex;
      align-items: center;
      flex: 1;
    }

    &__img {
      max-width: 200px;
      width: 100%;

      @media screen and (min-width: map-get($container-min-widths, 'sm')) {
        max-width: 100%;
        width: 100%;
      }
    }
  }

  &-nav {

    &__section {
      margin-top: 2rem;
    }

    &__title {
      padding-left: $padding-x-sidebar;
      padding-right: $padding-x-sidebar;
      font-size: 1.375rem;
    }

    &__item {
      margin-bottom: .25rem;
    }

    &__link {
      display: block;
      padding: $padding-y-item-sidebar $padding-x-sidebar;
      transition: transform .2s ease-in-out;
      font-size: 1rem;

      &:not(&--active):hover {
        transform: scale(1.05);
      }

      &--active {
        position: relative;
        color: $primary;
      }

      &--active::before {
        content: '';
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        width: .25rem;
        background-color: $primary;
      }
    }

  }

  &-close {
    position: absolute;
    bottom: 6rem;
    right: $padding-x-sidebar;
    color: $primary;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    background-color: transparent;
    transition: transform .2s ease-in-out;
    padding: 0;
    font-size: 2rem;
    cursor: pointer;

    &:hover {
      color: darken($color: $primary, $amount: 5);
    }

    &:active {
      transform: scale(1.25);
    }

    @media screen and (min-width: map-get($container-min-widths, 'sm')) {
      display: none;
    }
  }

}
</style>