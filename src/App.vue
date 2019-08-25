<template>
  <div id="app">
    <div class="menu">
      <div class="logo">
        <img src="@/assets/logo.png" />
      </div>
      <div class="menu-wrapper">
        <router-link to="/"
          ><i class="fa fa-chart-bar"></i>Overview</router-link
        >
        <router-link to="/leaderboard"
          ><i class="fa fa-list-ol"></i>Leaderboard</router-link
        >
        <router-link to="/about"
          ><i class="icon2 fa fa-user"></i>Account</router-link
        >
        <router-link to="/settings"
          ><i class="fa fa-cog"></i>Settings</router-link
        >
      </div>
      <div style="height: 100px;"></div>
    </div>
    <div class="app-wrapper">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
@import "./global.scss";
body {
  padding: 0px;
  margin: 0px;
  background-color: #f9fafb;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: all;
  transition-timing-function: ease;
}

.fade-leave-active {
  opacity: 0;
  transform: translate(0, -30px);
}
.fade-enter {
  opacity: 0;
  transform: translate(0, 30px);
}

#app {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0px;
  margin: 0px;
}

.menu {
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 6px 0 41px 0 #eef1f780;

  .logo {
    display: flex;
    justify-content: center;
    padding: 20px 0px;
    transform: scale(0.7);
  }

  .menu-wrapper {
    display: flex;
    flex-direction: column;
    width: $menu-width;

    a {
      text-decoration: none;
      padding: 20px 30px;
      color: $gray2;
      border-left: 2px solid transparent;
      font-size: 0.9em;
      font-weight: 500;
      transition: all 0.2s ease;
    }

    a:hover {
      color: $secondary;
      // transform: translate(3px, 0px);
    }

    i {
      font-size: 0.8em;
      margin-right: 12px;
      transform: translate(0, -1px);
    }

    .icon2 {
      margin-right: 14px;
    }

    .router-link-exact-active {
      color: $secondary;
      // background-color: $gray1;
      // border-left: 4px solid $secondary;
    }
  }
}

.app-wrapper {
  margin-left: $menu-width;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
