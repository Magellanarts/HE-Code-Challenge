<template>
  <header
    class="c-page-header"
    :class="{'c-page-header--grid' : showAccounts}"
  >
    <div
      v-if="showAccounts"
      class="c-page-header__submission-date"
    >{{ today }}</div>

    <h1 class="u-uppercase">Code Challenge</h1>

    <div
      v-if="showAccounts"
      class="c-page-header__user">
      <div
        :style="`background-image: url(${ account.profileImage })`"
        class="c-page-header__user__photo"
      />
      <div class="c-page-header__user__name">
        {{ account.name }}
      </div>
    </div>

    <div class="c-nav-toggle">
      <div class="c-nav-toggle__inner"/>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    showAccounts: {
      type: Boolean,
      required: true,
    },
    account: {
      type: Object,
      required: true,
    },
  },
  computed: {
    today() {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const yyyy = today.getFullYear();

      return `${mm}.${dd}.${yyyy}`;
    },
  },
};
</script>
