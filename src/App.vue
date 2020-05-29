<template>
  <div id="app">
    <v-main-wrapper />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import vMainWrapper from './components/v-main-wrapper.vue';

export default {
  name: 'app',
  components: { vMainWrapper },
  methods: {
    ...mapActions(['SET_MOBILE', 'SET_DESKTOP']),
  },
  computed: {
    ...mapGetters(['IS_MOBILE', 'IS_DESKTOP']),
  },
  mounted() {
    const vm = this;
    window.addEventListener('resize', () => {
      if (window.innerWidth > 767) {
        vm.SET_DESKTOP();
        console.log('desktop', vm.IS_DESKTOP);
      } else {
        vm.SET_MOBILE();
        console.log('mobile', vm.IS_MOBILE);
      }
    });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
