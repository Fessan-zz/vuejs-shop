<template>
  <div class="v-main-wrapper">
    <v-header />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import vHeader from './layouts/v-header.vue';

export default {
  name: 'v-main-wrapper',
  props: {},
  data() {
    return {
      title: 'Main Wrapper',
    };
  },
  computed: {},
  methods: {},
  watch: {},
  components: { vHeader },
  mounted() {
  },
};
</script>

<style lang="scss">
.v-main-wrapper {
  margin: 0 auto;
}
</style>>
