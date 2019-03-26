<template>
  <div>
    <nav class="nav-wrapper deep-orange darken-4">
      <a href="#" class="brand-logo">{{ $t("title") }}</a>
      <a href="#" class="sidenav-trigger hide-on-large-only" @click="nav = !nav">
        <i class="material-icons">menu</i>
      </a>
      <ul class="right hide-on-med-and-down">
        <li>
          <router-link to="/">{{ $t("menu.list") }}</router-link>
        </li>
        <li>
          <router-link to="/help">{{ $t("menu.help") }}</router-link>
        </li>
        <li>
          <router-link to="/comments">{{ $t("menu.comments") }}</router-link>
        </li>
        <li>
          <language/>
        </li>
      </ul>
    </nav>
    <ul class=".hide-on-large-only" :style="{'display': nav ? 'block' : 'none'}">
      <li class="side-link">
        <router-link class="grey-text text-lighten-2" to="/">{{ $t("menu.list") }}</router-link>
      </li>
      <li class="side-link">
        <router-link class="grey-text text-lighten-2" to="/help">{{ $t("menu.help") }}</router-link>
      </li>
      <li class="side-link">
        <router-link class="grey-text text-lighten-2" to="/comments">{{ $t("menu.comments") }}</router-link>
      </li>
      <li>
        <language/>
      </li>
    </ul>
    <section class="grey darken-4">
      <div class="container space-50">
        <main>
          <keep-alive>
            <transition
              appear
              name="custom-classes-transition"
              enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOut"
              mode="out-in"
            >
              <router-view></router-view>
            </transition>
          </keep-alive>
        </main>
      </div>
    </section>
    <footer class="grey-text text-darken-3 space-50">
      <div class="container">
        <div class="row">
          <small>{{ $t("footer.author") }}</small>
        </div>
        <div class="row">
          <img src="img/vuejs.png" alt="Vue logo">
          <img src="img/webpack.png" alt="Webpack logo">
          <img src="img/materialize.png" alt="Materialize logo">
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Language from "./language/language.vue";
import "../../node_modules/materialize-css/js/sideNav.js";

export default {
  name: "app",
  components: { Language },
  data() {
    return {
      nav: false
    };
  }
};
</script>

<style scoped>
.side-link {
  padding: 10px;
}
</style>