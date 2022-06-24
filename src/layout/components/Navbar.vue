<template>
  <div class="navbar">
    <div class="navbar-search">
      <input class="navbar-search__input" type="text" placeholder="Buscar" />
      <span class="navbar-search__icon"><i class="fa-solid fa-magnifying-glass"></i></span>
    </div>
    <div class="navbar-control">
      <button class="navbar-control__account">
        <i class="fa-solid fa-user"></i>
        <span>Jhostin O.</span>
      </button>
      <button class="navbar-control__toggle-bar" @click="$emit('show-sidebar')">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss">
@import '@/scss/variables/variables.scss';
.navbar {
  background-color: $white;
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: map-get($container-min-widths, 'sm')) {
    padding: 1rem 1.75rem;
  }

  @media screen and (min-width: map-get($container-min-widths, 'md')) {
    padding: 1rem 2.5rem;
  }

  @media screen and (min-width: map-get($container-min-widths, 'lg')) {
    padding: 1rem $padding-x-content-right;
  }

  &-search {
    position: relative;
    border: 1px solid $gray;
    border-radius: 100px;
    max-width: 500px;
    width: 100%;
    margin-right: 2rem;

    &__input {
      display: block;
      border-radius: 100px;
      outline: none;
      border: none;
      padding: 6px 24px 6px 14px;
      color: $gray-2;
      width: 100%;
    }

    &__icon {
      color: $soft-gray;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 14px;
    }

  }

  &-control {

    display: flex;
    align-items: center;

    button {
      border: none;
      outline: none;
      background: transparent;
      cursor: pointer;
    }

    &__account {
      white-space: nowrap;
      i {
        color: $primary;
      }

      span {
        display: none;
        color: $gray-2;
        white-space: nowrap;
        font-size: 16px;

        @media screen and (min-width: map-get($container-min-widths, 'md')) {
          display: inline;
          margin-left: .5rem;
        }
      }

      &:hover {
        color: darken($color: $primary, $amount: 5);
      }
    }

    &__toggle-bar {
      margin-left: .5rem;
      font-size: 1.5rem;
      color: $primary;
      transition: transform .2s ease-in-out;

      &:hover {
        color: darken($color: $primary, $amount: 5);
      }

      &:active {
        transform: scale(1.15);
      }

      @media screen and (min-width: map-get($container-min-widths, 'sm')) {
        display: none;
        margin-left: 0;
      }
    }

  }
}
</style>