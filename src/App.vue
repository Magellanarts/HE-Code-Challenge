<template>
  <div id="app">

    <the-header
      :showAccounts="showAccounts"
      :account="account"
    />

    <main class="l-main-content">
      <section class="l-content-container">
        <transition name="slide" mode="out-in">
          <account-form
            v-if="showForm"
            key="formView"
            @validSubmission="handleSuccessfulSubmission"
          />

          <accounts-list
            v-if="showAccounts"
            key="accountsView"
            :accounts="accounts"
          />
        </transition>
      </section>
    </main>
  </div>
</template>

<script>
import axios from 'axios';

import TheHeader from '@/components/TheHeader.vue';
import AccountsList from '@/components/AccountsList.vue';
import AccountForm from '@/components/AccountForm.vue';

export default {
  data() {
    return {
      showForm: true,
      showAccounts: false,
      accounts: [],
      account: {},
    };
  },
  components: {
    TheHeader,
    AccountsList,
    AccountForm,
  },
  methods: {
    handleSuccessfulSubmission(account) {
      // all required fields are present
      // add account user to accounts list
      this.accounts.push(account);

      // copy completed account to local version of account
      this.account = account;

      // show accounts section
      this.showForm = false;
      this.showAccounts = true;
    },
  },
  mounted() {
    // load in other accounts
    axios.get('https://api.jsonbin.io/b/5c547bb0a3fb18257acc2a7c/3')
      .then((response) => {
        // store the response in accounts array
        this.accounts = response.data;
      });
  },
};
</script>
