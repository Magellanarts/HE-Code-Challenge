<template>
  <div id="app">
    <the-header />
    <main class="l-main-content">
      <router-view/>
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss" scoped>
.l-main-content {
  padding: 70px 0;
  background: url('./assets/images/bg--desktop.jpg');
  background-position: center top;
}
</style>
