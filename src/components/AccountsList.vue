<template>
  <div>
    <header class="c-content-header">
      <h2>CONGRATS! Thanks for joining.</h2>
      <img
        class="c-content-header__border-squiggle"
        src="@/assets/images/squiggle.svg"
        alt="Decorative squiggle line" />
    </header>

    <section>
      <ul
        class="c-accounts-list"
        v-if="accounts"
      >
        <li
          class="c-account"
          v-for="(account, index) in alphabeticalAccounts"
          :key="account.email"
        >
          <div
            class="c-account__header"
            @click="toggleAccountDetails(index)"
          >
            <div
              class="c-account__photo"
              :style="`background-image: url(${ account.profileImage })`"
            />

            <div class="c-account__main">
              <div class="c-account__name">{{ account.name }}</div>
              <div>
                <a
                  @click.stop
                  :href="`mailto:${account.email}`"
                  class="c-account__email"
                >{{ account.email }}</a>
              </div>

              <div
                class="c-account__toggle-icon"
                :data-id="`account-toggle-icon-${index}`"
              />
            </div>
          </div>
          <div class="c-account__details" :data-id="`account-details-${index}`">
            <dl>
              <dt>Age: </dt>
              <dd>{{ age(account.birthday) }}</dd>

              <dt>Birthday: </dt>
              <dd>{{ convertBirthday(account.birthday) }}</dd>

              <dt>Zipcode: </dt>
              <dd>{{ account.zip }}</dd>

              <dt>Gender: </dt>
              <dd>{{ convertGenderValue(account.gender) }}</dd>

              <dt>Newsletter: </dt>
              <dd>{{ checkNewsletterSubscription(account.newsletter) }}</dd>
            </dl>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { validations } from '@/mixins';

export default {
  props: {
    accounts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    age(birthday) {
      return validations.getAge(birthday);
    },
    convertBirthday(birthday) {
      const date = new Date(birthday);
      const month = date.toLocaleString('en-us', { month: 'long' });
      const year = date.toLocaleString('en-us', { year: 'numeric' });
      return `${month} ${date.getDate()}, ${year}`;
    },
    toggleAccountDetails(index) {
      // toggle the is-open class on the details div
      // this will hide or show that div
      document.querySelector(`[data-id="account-details-${index}"]`).classList.toggle('is-open');

      // do same class toggling for the toggle icon
      document.querySelector(`[data-id="account-toggle-icon-${index}"]`).classList.toggle('is-active');
    },
    checkNewsletterSubscription(newsletter) {
      if (newsletter === '' || newsletter === false) {
        return 'No';
      }
      return 'Yes';
    },
    convertGenderValue(gender) {
      let genderDisplay = gender;

      switch (gender) {
        case 'M':
          genderDisplay = 'Male';
          break;
        case 'F':
          genderDisplay = 'Female';
          break;
        default:
          break;
      }

      return genderDisplay;
    },
  },
  computed: {
    alphabeticalAccounts() {
      const accountsArray = [];

      if (this.accounts) {
        this.accounts.forEach((account) => {
          const accountCopy = {};
          Object.assign(accountCopy, account);
          const name = account.name.split(' ');
          [accountCopy.firstName, accountCopy.lastName] = name;

          if (accountCopy.lastName === undefined) {
            accountCopy.lastName = 'A';
          }
          accountsArray.push(accountCopy);
        });

        accountsArray.sort((a, b) => {
          const nameA = a.lastName.toLowerCase();
          const nameB = b.lastName.toLowerCase();
          // sort string ascending
          if (nameA < nameB) { return -1; }
          if (nameA > nameB) { return 1; }
          return 0; // default return value (no sorting)
        });
      }

      return accountsArray;
    },
  },
};
</script>
