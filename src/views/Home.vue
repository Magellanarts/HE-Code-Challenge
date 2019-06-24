<template>
  <div>
    <section class="l-content-container">
      <header class="c-content-header">
        <h2>Create an Account</h2>
        <img
          class="c-content-header__border-squiggle"
          src="@/assets/images/squiggle.svg"
          alt="Decorative squiggle line" />

        <div class="c-content-header__note">* Indicates Required Field</div>
      </header>

      <form
        @submit.prevent="submitForm"
        class="c-account-form"
      >
        <div class="c-account-form__field">
          <label
            class="c-account-form__label c-account-form__label--positioned"
            for="name"
          >Name<sup>*</sup></label>
          <input
            class="c-account-form__text-input"
            type="text"
            name="name"
            id="name"
            v-model="account.name"
            required
          />
        </div>

        <div class="c-account-form__field">
          <label
            class="c-account-form__label c-account-form__label--positioned"
            for="email"
          >Email<sup>*</sup></label>
          <input
            class="c-account-form__text-input"
            type="email"
            name="email"
            id="email"
            v-model="account.email"
            required
          />
        </div>

        <div class="c-account-form__field">
          <label
            class="c-account-form__label c-account-form__label--positioned"
            for="birthday"
          >Birthday<sup>*</sup></label>
          <input
            class="c-account-form__text-input"
            type="date"
            name="birthday"
            id="birthday"
            v-model="account.birthday"
            required
          />
        </div>

        <div class="c-account-form__field">
          <label
            class="c-account-form__label c-account-form__label--positioned"
            for="zipcode"
          >Zipcode<sup>*</sup></label>
          <input
            class="c-account-form__text-input"
            type="number"
            name="zipcode"
            id="zipcode"
            v-model="account.zipcode"
            required
          />
        </div>

        <div class="c-account-form__field">
          <div class="c-account-form__field__meta">
            <div
              class="c-account-form__field__action"
              @click="togglePasswordVisibility"
            >SHOW PASSWORD</div>
            <div class="c-account-form__field__note">
              Must contain one uppercase letter, one number, & one special character.
            </div>
          </div>

          <label
            class="c-account-form__label c-account-form__label--positioned"
            for="password"
          >Password<sup>*</sup></label>
          <input
            class="c-account-form__text-input"
            ref="password"
            type="password"
            name="password"
            id="password"
            v-model="account.password"
            required
          />
        </div>

        <div class="c-account-form__field">
          <label
            class="c-account-form__label c-account-form__label--positioned"
            for="confirm-password"
          >Confirm Password<sup>*</sup></label>
          <input
            class="c-account-form__text-input"
            type="password"
            name="confirm-password"
            id="confirm-password"
            v-model="account.confirmPassword"
          />
        </div>

        <div class="c-account-form__field">
          <label
            class="c-account-form__label"
            for="gender-identity"
          >Gender Identity<sup>*</sup></label>

          <label class="c-account-form__field__secondary-label" for="male">
            <input
              type="radio"
              id="male"
              name="gender-identity"
              value="Male"
              v-model="account.gender"
              required
            >
            Male
          </label>

          <label class="c-account-form__field__secondary-label" for="female">
            <input
              type="radio"
              id="female"
              name="gender-identity"
              value="Female"
              v-model="account.gender"
              required
            >
            Female
          </label>

          <label class="c-account-form__field__secondary-label" for="non-binary">
            <input
              type="radio"
              name="gender-identity"
              id="non-binary"
              value="Non-Binary"
              v-model="account.gender"
              required
            >
            Non-Binary
          </label>

          <label class="c-account-form__field__secondary-label" for="other">
            <input
              type="radio"
              name="gender-identity"
              id="other"
              value="Other"
              v-model="account.gender"
              required
            >
            Other
          </label>
        </div>

        <div class="c-account-form__field">
          <label class="c-account-form__label" for="newsletter">Subscribe to newsletter</label>

          <label
            for="newsletter"
            class="c-account-form__field__secondary-label">
            <input
              type="checkbox"
              name="newsletter"
              id="newsletter"
              v-model="account.newsletter"
            >
            Yes
          </label>
        </div>

        <div class="c-account-form__field">
          <label
            class="c-account-form__label"
            for="profile-pic"
          >Upload Your Profile Pic<sup>*</sup></label>
          <input
            class="u-visually-hidden"
            ref="photo"
            type="file"
            name="profile-pic"
            id="profile-pic"
            @change="handlePhotoUpload"
            required
          />

          <div class="c-profile-pic-upload">
            <img
              :src="account.photo"
              alt="Account Photo"
              class="c-profile-pic-upload__image"
            />

            <button
              type="button"
              class="c-profile-pic-upload__btn"
              @click="profilePicUploadClick"
            >Browse</button>
          </div>
        </div>

        <div class="c-account-form__footer">
          <button type="submit" class="c-account-form__submit-btn">Create Account</button>

          <div>
            <div
              class="c-account-form__reset-btn"
              @click="resetForm"
            >Reset</div>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import placeHolderPhoto from '@/assets/images/profile-pic.svg';

export default {
  name: 'home',
  data() {
    return {
      accounts: [],
      account: {
        name: '',
        email: '',
        birthday: '',
        zipcode: '',
        password: '',
        confirmPassword: '',
        gender: '',
        newsletter: '',
        photo: placeHolderPhoto,
      },
    };
  },
  methods: {
    // toggle password field between password and plain text
    togglePasswordVisibility() {
      // if the text input is already of type 'password',
      // change to text. Otherwise, change type to 'password'
      if (this.$refs.password.type === 'password') {
        this.$refs.password.type = 'text';
      } else {
        this.$refs.password.type = 'password';
      }
    },
    // Browse button was clicked to upload a photo.
    // Fire a click event on the hidden file input field
    profilePicUploadClick() {
      this.$refs.photo.click();
    },
    // Fired after an image is uploaded
    handlePhotoUpload(event) {
      const upload = event.target;
      const reader = new FileReader();

      // basic checking of the file type
      // only allowing jpg or png
      // this should be checked on server too
      if (upload.files[0].type === 'image/jpeg' || upload.files[0].type === 'image/jpg' || upload.files[0].type === 'image/png') {
        reader.onload = () => {
        // reader.result has image url
        // update photoURL to this new image
          this.account.photo = reader.result;
        };
        reader.readAsDataURL(upload.files[0]);
      }
    },
    // reset all fields in form
    // this will set all properties of the account object to ''
    resetForm() {
      // loop through the account object
      // eslint-disable-next-line array-callback-return
      Object.keys(this.account).map((key) => {
        // check if the key is photo,
        // if so, we need to set it to the placeholder image instead of a blank string
        if (key !== 'photo') {
          this.account[key] = '';
        } else {
          this.account.photo = placeHolderPhoto;
        }
      });
    },
    submitForm() {

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

<style lang="scss" scoped>
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
  margin-bottom: 27px;

  &__border-squiggle {
    width: 64px;
    display: inline-block;
    margin-bottom: 5px;
  }

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

    &__secondary-label {
      padding-left: 16px;
      font-size: 12px;
    }
  }

  &__label {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 800;
    display: block;
    margin-bottom: 10px;

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
    font-family: 'Nunito';
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

.c-profile-pic-upload {
  display: grid;
  grid-template-columns: 120px auto;
  grid-column-gap: 30px;
  align-items: center;

  &__image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  &__btn {
    border: none;
    border-radius: 3px;
    width: 90px;
    height: 30px;
    border-radius: 3px;
    background-color: #949494;
    font-size: 12px;
    letter-spacing: 1px;
    line-height: 30px;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    cursor: pointer;
    outline: none;
    transition: .125s ease-in;

    &:hover {
      background-image: linear-gradient(to bottom, #6c6868, #3a3737);
    }
  }
}
</style>
