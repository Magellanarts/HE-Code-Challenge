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
  box-sizing: border-box;
  background: url('./assets/images/bg--tablet.jpg');
  background-position: center top;
  background-size: cover;

  @media screen and (min-width: 1220px) {
    background: url('./assets/images/bg--desktop.jpg');
    min-height: 1200px;
    background-position: center top;
  }
}
</style>
