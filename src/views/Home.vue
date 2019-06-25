<template>
  <div>
    <section class="l-content-container">
      <header class="c-content-header">
        <h2>Create an Account</h2>
        <img
          class="c-content-header__border-squiggle"
          src="@/assets/images/squiggle.svg"
          alt="Decorative squiggle line" />

        <div class="c-content-header__note"><sup>*</sup>Indicates Required Field</div>
      </header>

      <form
        @submit.prevent="submitForm"
        class="c-account-form"
      >
        <div class="c-account-form__field">
          <div class="c-account-form__field__meta">
            <div
              class="c-account-form__field__note"
              :class="{error: errors.name.error}"
              v-if="errors.name.error"
            >
              Required Field
            </div>
          </div>

          <label
            class="c-account-form__label c-account-form__label--positioned"
            :class="{error: errors.name.error}"
            for="name"
          >Name<sup>*</sup></label>
          <input
            class="c-account-form__text-input"
            :class="{error: errors.name.error}"
            type="text"
            name="name"
            id="name"
            v-model="account.name"
            required
          />
        </div>

        <div class="c-account-form__field">
          <div class="c-account-form__field__meta">
            <div
              class="c-account-form__field__note"
              :class="{error: errors.email.error}"
              v-if="errors.email.error === true"
            >
              Required Field
            </div>

            <div
              class="c-account-form__field__note"
              :class="{error: errors.email.error}"
              v-if="errors.email.error === 'invalid'"
            >
              Invalid Email
            </div>

            <div
              class="c-account-form__field__note"
              :class="{error: errors.email.error}"
              v-if="errors.email.error === 'exists'"
            >
              This email already exists
            </div>
          </div>

          <label
            class="c-account-form__label c-account-form__label--positioned"
            :class="{error: errors.email.error}"
            for="email"
          >Email<sup>*</sup></label>
          <input
            class="c-account-form__text-input"
            :class="{error: errors.email.error}"
            type="email"
            name="email"
            id="email"
            v-model="account.email"
            required
          />
        </div>

        <div class="c-account-form__field">
          <div class="c-account-form__field__meta">
            <div
              class="c-account-form__field__note"
              :class="{error: errors.birthday.error}"
              v-if="errors.birthday.error === true"
            >
              Required Field
            </div>

            <div
              class="c-account-form__field__note"
              :class="{error: errors.birthday.error}"
              v-if="errors.birthday.error === 'underage'"
            >
              Must be 18 years old
            </div>
          </div>

          <label
            class="c-account-form__label c-account-form__label--positioned"
            :class="{error: errors.birthday.error}"
            for="birthday"
          >Birthday<sup>*</sup></label>
          <input
            class="c-account-form__text-input"
            :class="{error: errors.birthday.error}"
            type="date"
            name="birthday"
            id="birthday"
            v-model="account.birthday"
            required
          />
        </div>

        <div class="c-account-form__field">
          <div class="c-account-form__field__meta">
            <div
              class="c-account-form__field__note"
              :class="{error: errors.zipcode.error}"
              v-if="errors.zipcode.error === true"
            >
              Required Field
            </div>

            <div
              class="c-account-form__field__note"
              :class="{error: errors.zipcode.error}"
              v-if="errors.zipcode.error === 'invalid'"
            >
              Zipcode doesn't match requirements
            </div>
          </div>

          <label
            class="c-account-form__label c-account-form__label--positioned"
            :class="{error: errors.zipcode.error}"
            for="zipcode"
          >Zipcode<sup>*</sup></label>
          <input
            class="c-account-form__text-input"
            :class="{error: errors.zipcode.error}"
            type="number"
            name="zipcode"
            id="zipcode"
            v-model="account.zipcode"
            required
          />
        </div>

        <div class="c-account-form__field c-account-form__field--password">
          <div class="c-account-form__field__meta">
            <div
              class="c-account-form__field__action"
              @click="togglePasswordVisibility"
            >SHOW PASSWORD</div>
            <div
              class="c-account-form__field__note"
              :class="{error: errors.password.error}"
            >
              Must contain one uppercase letter, one number, & one special character.
            </div>
          </div>

          <div class="c-account-form__field-container">
            <label
              class="c-account-form__label c-account-form__label--positioned"
              :class="{error: errors.password.error}"
              for="password"
            >Password<sup>*</sup></label>
            <input
              class="c-account-form__text-input"
              :class="{error: errors.password.error}"
              ref="password"
              type="password"
              name="password"
              id="password"
              v-model="account.password"
              required
            />
          </div>
        </div>

        <div class="c-account-form__field c-account-form__field--sm-margin">
          <div class="c-account-form__field__meta">
            <div
              class="c-account-form__field__note"
              :class="{error: errors.confirmPassword.error}"
              v-if="errors.confirmPassword.error === true"
            >
              Required Field
            </div>

            <div
              class="c-account-form__field__note"
              :class="{error: errors.confirmPassword.error}"
              v-if="errors.confirmPassword.error === 'mismatch'"
            >
              Passwords must match
            </div>
          </div>

          <label
            class="c-account-form__label c-account-form__label--positioned"
            :class="{error: errors.confirmPassword.error}"
            for="confirm-password"
          >Confirm Password<sup>*</sup></label>
          <input
            class="c-account-form__text-input"
            :class="{error: errors.confirmPassword.error}"
            ref="confirmPassword"
            type="password"
            name="confirm-password"
            id="confirm-password"
            v-model="account.confirmPassword"

            required
          />
        </div>

        <div class="c-account-form__field c-account-form__field--sm-margin">
          <div class="c-account-form__field__meta">
            <div
              class="c-account-form__field__note"
              :class="{error: errors.gender.error}"
              v-if="errors.gender.error === true"
            >
              Required Field
            </div>
          </div>

          <label
            class="c-account-form__label"
             :class="{error: errors.gender.error}"
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

        <div class="c-account-form__field c-account-form__field--sm-margin">
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
          <div class="c-account-form__field__meta">
            <div
              class="c-account-form__field__note"
              :class="{error: errors.photo.error}"
              v-if="errors.photo.error === true"
            >
              Required Field
            </div>
          </div>

          <label
            class="c-account-form__label"
            :class="{error: errors.photo.error}"
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
      validZipCodes: [
        57001, 57002, 57003, 57004, 57005, 57006, 57007, 57010, 57012, 57013, 57014, 57015,
      ],
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
      photoUploaded: false,
      invalidSubmission: false,
      errors: {
        name: {
          required: true,
          error: false,
        },
        email: {
          required: true,
          error: false,
        },
        birthday: {
          required: true,
          error: false,
        },
        zipcode: {
          required: true,
          error: false,
        },
        password: {
          required: true,
          error: false,
        },
        confirmPassword: {
          required: true,
          error: false,
        },
        gender: {
          required: true,
          error: false,
        },
        newsletter: {
          error: false,
        },
        photo: {
          required: true,
          error: false,
        },
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
        this.$refs.confirmPassword.type = 'text';
      } else {
        this.$refs.password.type = 'password';
        this.$refs.confirmPassword.type = 'password';
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

          this.photoUploaded = true;
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
      // go through each field in the account object
      Object.keys(this.account).map((key) => {
        // check to see if this field is required
        if (this.errors[key].required) {
          // check to see if the field is null or and empty string
          if (this.account[key] === null || this.account[key] === '') {
            // if so, set it's error object to true
            this.errors[key].error = true;
            this.invalidSubmission = true;
          } else {
            // else set it's error object to false
            this.errors[key].error = false;
          }
        }
        return null;
      });

      // if there is already a birthday error, don't need these checks
      if (!this.errors.birthday.error) {
      // check to see if age is under 18.
      // set the error object to true if under 18
        if (this.isUnderEighteen()) {
          this.errors.birthday.error = 'underage';
          this.invalidSubmission = true;
        }
      }

      // if there is already a zipcode error, don't need these checks
      if (!this.errors.zipcode.error) {
      // check to see if the entered zipcode matches any in the valid zipcodes array
      // set error object to true if not found
        if (this.validZipCodes.indexOf(parseInt(this.account.zipcode, 10)) < 0) {
          this.errors.zipcode.error = 'invalid';
          this.invalidSubmission = true;
        }
      }

      // if there is already an email error, don't need these checks
      if (!this.errors.email.error) {
        // first check to make sure email is valid
        if (!this.validateEmail()) {
          this.errors.email.error = 'invalid';
          this.invalidSubmission = true;
        } else {
        // next, check to see if it is an email that already exists
          this.accounts.forEach((account) => {
            if (account.email === this.account.email) {
              this.errors.email.error = 'exists';
              this.invalidSubmission = true;
            }
          });
        }
      }

      // if there is already a password error, don't need these checks
      if (!this.errors.password.error) {
        if (!this.validatePassword()) {
          this.errors.password.error = true;
          this.invalidSubmission = true;
        }
      }

      // if there is already a confirmPassword error, don't need these checks
      if (!this.errors.confirmPassword.error) {
        if (this.account.confirmPassword !== this.account.password) {
          this.errors.confirmPassword.error = 'mismatch';
          this.invalidSubmission = true;
        }
      }

      // check to see if image has been uploaded
      if (this.photoUploaded === false) {
        this.errors.photo.error = true;
        this.invalidSubmission = true;
      }
    },
    // Form Validation Functions
    isUnderEighteen() {
      const today = new Date();
      const birthDate = new Date(this.account.birthday);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age -= 1;
      }
      return age < 18;
    },
    validateEmail() {
      // eslint-disable-next-line no-useless-escape
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.account.email).toLowerCase());
    },
    validatePassword() {
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(this.account.password);
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
  padding: 43px 25px 32px;

  @media screen and (min-width: 760px) {
    padding: 43px 76px 32px 77px;
  }
}

.c-content-header {
  text-align: center;
  margin-bottom: 32px;

  &__border-squiggle {
    width: 64px;
    display: inline-block;
    margin-bottom: 2px;
  }

  &__note {
    font: 11px/1.2 'Nunito';

    sup {
      font-size: 21px;
      line-height: 11px;
      font-weight: 400;
      position: relative;
      top: 5px;
    }
  }
}

.c-account-form {
  &__field {
    margin-bottom: 35px;
    position: relative;

    &__meta {
      position: absolute;
      top: -16px;
      right: 0;
      text-align: right;
      font-size: 9px;
    }

    &__action {
      cursor: pointer;
      text-transform: uppercase;
      margin-bottom: 2px;

      &:hover {
        color: #3a3737;
      }
    }

    &__note {
      &.error {
        color: #ec5959;
      }
    }

    &__secondary-label {
      padding-left: 16px;
      font-size: 12px;
    }

    &--password {
      padding-top: 8px;
    }

    &--sm-margin {
      margin-bottom: 29px;
    }
  }

  &__field-container {
    position: relative;
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
      left: 6px;
      background: #fff;
    }

    &.error {
      color: #ec5959;
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
    padding-top: 4px;
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
  padding: 17px 0 0 17px;

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
