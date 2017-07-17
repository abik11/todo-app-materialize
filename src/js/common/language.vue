<template lang="pug">
div.lang-box
    img(src="../../img/lang/United-Kingdom-icon.png", @click="changeLanguage('en')")
    img(src="../../img/lang/Poland-icon.png", @click="changeLanguage('pl')")
    img(src="../../img/lang/Spain-icon.png", @click="changeLanguage('es')")
</template>

<script>
export default {
    name: 'language',
    methods: {
        changeLanguage(lang){
            this.$i18n.locale = lang;
        }
    }
}
</script>

<style lang="scss" scoped>
.lang-box {
    position: fixed;
    top: 10px; 
    right: 10px;
}
</style>
