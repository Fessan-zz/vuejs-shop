<template>
  <div class="v-main-wrapper">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
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
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
.v-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>>
