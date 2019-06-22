<template>
  <div id="app">
    <the-header />
    <main>
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
