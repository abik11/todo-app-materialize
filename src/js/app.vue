<template lang="pug">
div
    nav.nav-wrapper.deep-orange.darken-4
        a.brand-logo(href="#") {{ $t("title") }}
        ul.right.hide-on-med-and-down
            li
                router-link(to='/') {{ $t("menu.list") }}
            li
                router-link(to='/help') {{ $t("menu.help") }}
            li
                router-link(to='/comments') {{ $t("menu.comments") }}
            li
                language

    section.grey.darken-4
        .container.space-50
            main
                keep-alive
                    router-view

    footer.grey-text.text-darken-3.space-50
        .container
            .row
                small {{ $t("footer.author") }}
            .row
                img(src='img/vuejs.png')
                img(src='img/webpack.png')
                img(src='img/materialize.png')
</template>

<script>
import Language from "./language/language.vue";

export default {
  name: "app",
  components: { Language }
};
</script>