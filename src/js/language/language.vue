<template>
  <div class="lang-box">
    <img src="../../img/lang/United-Kingdom-icon.png" @click="changeLanguage('en')">
    <img src="../../img/lang/Poland-icon.png" @click="changeLanguage('pl')">
    <img src="../../img/lang/Spain-icon.png" @click="changeLanguage('es')">
  </div>
</template>

<script>
export default {
  name: "language",
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>

<style lang="scss">
.lang-box {
  margin: 10px;
}

img {
  height: 40px;
}
</style>
