<template>
  <div>
    <section class="l-content-container">
      <header class="c-content-header">
        <h2>Create an Account</h2>

        <div class="c-content-header__note">* Indicates Required Field</div>
      </header>

      <form class="c-account-form">
        <div class="c-account-form__field">
          <label class="c-account-form__label c-account-form__label--positioned" for="name">Name<sup>*</sup></label>
          <input class="c-account-form__text-input" type="text" name="name" id="name" />
        </div>

        <div class="c-account-form__field">
          <label class="c-account-form__label c-account-form__label--positioned" for="email">Email<sup>*</sup></label>
          <input class="c-account-form__text-input" type="email" name="email" id="email" />
        </div>

        <div class="c-account-form__field">
          <label class="c-account-form__label c-account-form__label--positioned" for="birthday">Birthday<sup>*</sup></label>
          <input class="c-account-form__text-input" type="date" name="birthday" id="birthday" />
        </div>

        <div class="c-account-form__field">
          <label class="c-account-form__label c-account-form__label--positioned" for="zipcode">Zipcode<sup>*</sup></label>
          <input class="c-account-form__text-input" type="number" name="zipcode" id="zipcode" />
        </div>

        <div class="c-account-form__field">
          <div class="c-account-form__field__meta">
            <div class="c-account-form__field__action" @click="togglePasswordVisibility">SHOW PASSWORD</div>
            <div class="c-account-form__field__note">Must contain one uppercase letter, one number, & one special character.</div>
          </div>

          <label class="c-account-form__label c-account-form__label--positioned" for="password">Password<sup>*</sup></label>
          <input class="c-account-form__text-input" ref="password" type="password" name="password" id="password" />
        </div>

        <div class="c-account-form__field">
          <label class="c-account-form__label c-account-form__label--positioned" for="confirm-password">Confirm Password<sup>*</sup></label>
          <input class="c-account-form__text-input" type="password" name="confirm-password" id="confirm-password" />
        </div>

        <div class="c-account-form__field">
          <label class="c-account-form__label" for="gender-identity">Gender Identity<sup>*</sup></label>

          <label class="c-account-form__field__secondary-label" for="male">
            <input type="radio" id="male" name="gender-identity" value="Male">
            Male
          </label>

          <label class="c-account-form__field__secondary-label" for="female">
            <input type="radio" id="female" name="gender-identity" value="Female">
            Female
          </label>

          <label class="c-account-form__field__secondary-label" for="non-binary">
            <input type="radio" name="gender-identity" id="non-binary" value="Non-Binary">
            Non-Binary
          </label>

          <label class="c-account-form__field__secondary-label" for="other">
            <input type="radio" name="gender-identity" id="other" value="Other">
            Other
          </label>
        </div>

        <div class="c-account-form__field">
          <label class="c-account-form__label" for="newsletter">Subscribe to newsletter</label>

          <label class="c-account-form__field__secondary-label">
            <input type="checkbox" name="newsletter" id="newsletter">
            Yes
          </label>
        </div>

        <div class="c-account-form__field">
          <label class="c-account-form__label" for="profile-pic">Upload Your Profile Pic<sup>*</sup></label>

          <input type="file" name="profile-pic" id="profile-pic"/>
        </div>

        <div class="c-account-form__footer">
          <button type="submit" class="c-account-form__submit-btn">Create Account</button>

          <div>
            <div class="c-account-form__reset-btn">Reset</div>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    togglePasswordVisibility() {
      if (this.$refs.password.type === 'password') {
        this.$refs.password.type = 'text';
      } else {
        this.$refs.password.type = 'password';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  text-transform: uppercase;
  font: 20px/1.15 'Nunito';
  letter-spacing: 1.43px;
  color: #3a3737;
  margin-bottom: 9px;
}

.l-content-container {
  background: #fff;
  max-width: 559px;
  width: 90%;
  margin: 0 auto;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  padding: 43px 76px 32px 77px;
}

.c-content-header {
  text-align: center;
  margin-bottom: 20px;

  &__note {
    font: 11px/1.2 'Nunito';
  }
}

.c-account-form {
  &__field {
    margin-bottom: 33px;
    position: relative;

    &__meta {
      position: absolute;
      top: -20px;
      right: 0;
      text-align: right;
      font-size: 9px;
    }

    &__action {
      cursor: pointer;
      text-transform: uppercase;

      &:hover {
        color: #3a3737;
      }
    }
  }

  &__label {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 800;
    display: block;

    sup {
      font-size: 19px;
      position: absolute;
      top: -6px;
      font-weight: 400;
    }

    &--positioned {
      position: absolute;
      padding: 0 5px;
      top: -6px;
      left: 5px;
      background: #fff;
    }
  }

  &__text-input {
    display: block;
    border-radius: 3px;
    border: solid 1px #949494;
    height: 36px;
    width: 100%;
    box-sizing: border-box;
    padding-left: 20px;
    font-size: 14px;
    color: #3a3737;
    outline: none;
    transition: .125s ease-in;

    &:hover {
      box-shadow: inset 0 0 0 1px #949494;
    }

    &:focus {
      border-color: #f6b93d;
      box-shadow: inset 0 0 0 1px #f6b93d;
    }

    &.error {
      border-color: #ec5959;
      box-shadow: inset 0 0 0 1px #ec5959;
    }
  }

  &__footer {
    text-align: center;
  }

  &__submit-btn {
    border: none;
    background-color: #3a3737;
    border-radius: 3px;
    width: 100%;
    height: 45px;
    font: 800 14px/45px 'Nunito';
    letter-spacing: 1px;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 11px;
    cursor: pointer;
    outline: none;
    transition: .125s ease-in;

    &:hover {
      color: #ec5959;
      background-image: linear-gradient(to bottom, #6c6868, #3a3737);
    }
  }

  &__reset-btn {
    display: inline-block;
    text-align: center;
    height: 16px;
    width: 107px;
    font: 12px/16px 'Nunito';
    color: #949494;
    text-transform: uppercase;
    cursor: pointer;
    transition: .125s ease-in;

    &:hover {
      color: #ec5959;
    }
  }
}
</style>
