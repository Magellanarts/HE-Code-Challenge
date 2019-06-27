<template>
  <div>
    <header class="c-content-header">
      <h2 class="u-uppercase">Create an Account</h2>
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
            :class="{error: errors.zip.error}"
            v-if="errors.zip.error === true"
          >
            Required Field
          </div>

          <div
            class="c-account-form__field__note"
            :class="{error: errors.zip.error}"
            v-if="errors.zip.error === 'invalid'"
          >
            Zipcode doesn't match requirements
          </div>
        </div>

        <label
          class="c-account-form__label c-account-form__label--positioned"
          :class="{error: errors.zip.error}"
          for="zip"
        >Zipcode<sup>*</sup></label>
        <input
          class="c-account-form__text-input"
          :class="{error: errors.zip.error}"
          type="number"
          name="zip"
          id="zip"
          v-model="account.zip"
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

      <div class="c-account-form__field c-account-form__field--gender">
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
            class="c-styled-form-input u-visually-hidden"
            type="radio"
            id="male"
            name="gender-identity"
            value="Male"
            v-model="account.gender"
            required
          >
          <div class="c-styled-form-input-toggle c-radio-btn" />
          <span>Male</span>
        </label>

        <label class="c-account-form__field__secondary-label" for="female">
          <input
            class="c-styled-form-input u-visually-hidden"
            type="radio"
            id="female"
            name="gender-identity"
            value="Female"
            v-model="account.gender"
            required
          >
          <div class="c-styled-form-input-toggle c-radio-btn" />
          <span>Female</span>
        </label>

        <label class="c-account-form__field__secondary-label" for="non-binary">
          <input
            class="c-styled-form-input u-visually-hidden"
            type="radio"
            name="gender-identity"
            id="non-binary"
            value="Non-Binary"
            v-model="account.gender"
            required
          >
          <div class="c-styled-form-input-toggle c-radio-btn" />
          <span>Non-Binary</span>
        </label>

        <label class="c-account-form__field__secondary-label" for="other">
          <input
            class="c-styled-form-input u-visually-hidden"
            type="radio"
            name="gender-identity"
            id="other"
            value="Other"
            v-model="account.gender"
            required
          >
          <div class="c-styled-form-input-toggle c-radio-btn" />
          <span>Other</span>
        </label>
      </div>

      <div class="c-account-form__field c-account-form__field--sm-margin">
        <label
          class="c-account-form__label"
          for="newsletter"
        >Subscribe to newsletter</label>

        <label
          for="newsletter"
          class="c-account-form__field__secondary-label">
          <input
            class="c-styled-form-input u-visually-hidden"
            type="checkbox"
            name="newsletter"
            id="newsletter"
            v-model="account.newsletter"
          >
          <div class="c-styled-form-input-toggle c-checkbox" />
          <span>Yes</span>
        </label>
      </div>

      <div class="c-account-form__field">
        <div class="c-account-form__field__meta">
          <div
            class="c-account-form__field__note"
            :class="{error: errors.profileImage.error}"
            v-if="errors.profileImage.error === true"
          >
            Required Field
          </div>
        </div>

        <label
          class="c-account-form__label"
          :class="{error: errors.profileImage.error}"
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
          <div
            class="c-profile-pic-upload__image"
            :style="`background-image: url(${ account.profileImage })`"
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
  </div>
</template>

<script>
import placeHolderPhoto from '@/assets/images/profile-pic.svg';
import { validations } from '@/mixins';

export default {
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
        zip: '',
        password: '',
        confirmPassword: '',
        gender: '',
        newsletter: '',
        profileImage: placeHolderPhoto,
      },
      photoUploaded: false,
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
        zip: {
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
        profileImage: {
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
          this.account.profileImage = reader.result;

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
        if (key !== 'profileImage') {
          this.account[key] = '';
        } else {
          this.account.profileImage = placeHolderPhoto;
        }
      });
    },
    // handle form submission
    submitForm() {
      // check to make sure all requirements are met
      const invalidForm = this.formValidation();
      if (!invalidForm) {
        this.$emit('validSubmission', this.account);
      }
    },
    // Form Validation Functions
    formValidation() {
      let formContainsError = false;
      // go through each field in the account object
      Object.keys(this.account).map((key) => {
        // check to see if this field is required
        if (this.errors[key].required) {
          // check to see if the field is null or and empty string
          if (this.account[key] === null || this.account[key] === '') {
            // if so, set it's error object to true
            this.errors[key].error = true;
            formContainsError = true;
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
        if (validations.getAge(this.account.birthday) < 18) {
          this.errors.birthday.error = 'underage';
          formContainsError = true;
        }
      }

      // if there is already a zipcode error, don't need these checks
      if (!this.errors.zip.error) {
      // check to see if the entered zipcode matches any in the valid zipcodes array
      // set error object to true if not found
        if (this.validZipCodes.indexOf(parseInt(this.account.zip, 10)) < 0) {
          this.errors.zip.error = 'invalid';
          formContainsError = true;
        }
      }

      // if there is already an email error, don't need these checks
      if (!this.errors.email.error) {
        // first check to make sure email is valid
        if (!this.validateEmail()) {
          this.errors.email.error = 'invalid';
          formContainsError = true;
        } else {
        // next, check to see if it is an email that already exists
          this.accounts.forEach((account) => {
            if (account.email === this.account.email) {
              this.errors.email.error = 'exists';
              formContainsError = true;
            }
          });
        }
      }

      // if there is already a password error, don't need these checks
      if (!this.errors.password.error) {
        if (!this.validatePassword()) {
          this.errors.password.error = true;
          formContainsError = true;
        }
      }

      // if there is already a confirmPassword error, don't need these checks
      if (!this.errors.confirmPassword.error) {
        if (this.account.confirmPassword !== this.account.password) {
          this.errors.confirmPassword.error = 'mismatch';
          formContainsError = true;
        }
      }

      // check to see if image has been uploaded
      if (this.photoUploaded === false) {
        this.errors.profileImage.error = true;
        formContainsError = true;
      }

      return formContainsError;
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
};
</script>
