<script lang="ts">
import BaseTextInputVue from "@/components/BaseTextInput.vue";
import BaseButtonVue from "@/components/BaseButton.vue";
import { defineComponent } from "vue";
import Spinner from "@/components/Spinner.vue";
import axios from "axios";
import { useToast } from "vue-toastification";
import { storeData } from "@/main";
import SocialAccountAuth from "@/components/SocialAccountAuth.vue";

const appToastComponent = useToast();
export default defineComponent({
  name: "AuthView",
  components: {
    BaseTextInput: BaseTextInputVue,
    BaseButton: BaseButtonVue,
    Spinner,
    SocialAccountAuth,
  },
  data: () => ({
    form: {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
    },
    isLoading: false,
    //destructure the api response into this variable
    apiResponseMsg: "",
  }),
  methods: {
    // fet the form body from, pass it to axios, toggle disable state to true
    // and then set the api response message to the response message
    async signUp() {
      this.isLoading = true;
      const { email, password, firstname, lastname } = this.form;
      try {
        const { data: response } = await axios.post("/auth/sign-up", {
          email,
          firstname,
          lastname,
          password,
        });
        console.log(JSON.stringify(response));
        if (response.success) {
          appToastComponent.success(response.message);
          // route to confirm otp page
          setTimeout(() => {
            this.$router.push({ name: "confirm-otp" });
          }, 200);
          //store the otp in preferences
          storeData({
            key: "confirm-account-token",
            value: response.data.token,
          });
        } else {
          appToastComponent.error(response.message);
          /// route to the confirm-otp screen after 200ms wc is the delay of toast above
        }
        this.apiResponseMsg = response.message;
        this.isLoading = false;
        return;
      } catch (error: any) {
        this.isLoading = false;
        const { data: response } = error.response;
        if (!response.success) {
          this.apiResponseMsg = response.message;
          appToastComponent.error(response.message);
        }
      }
    },
  },
  //disabled state
  computed: {
    disabledState() {
      return this.isLoading === true ? true : false;
    },
  },
});
</script>

<template>
  <div id="sign__up__page">
    <div class="container">
      <!--bg-->
      <div></div>
      <!--the page title --->
      <div>
        <div class="title">
          <h1>Sign Up</h1>
          <p class="sub__her__text">Create an account to begin</p>
        </div>

        <!--social icons-->

        <form action="" method="post" @submit.prevent="signUp">
          <BaseTextInput
            placeholder="Jane"
            label="firstname"
            v-model="form.firstname"
            type="text"
            class="field"
          />
          <BaseTextInput
            placeholder="Doe"
            label="lastname"
            v-model="form.lastname"
            type="text"
            class="field"
          />
          <!--form field email-->
          <BaseTextInput
            placeholder="jane@mailer.com"
            label="email"
            v-model="form.email"
            type="email"
            class="field"
          />
          <!--form field password-->
          <BaseTextInput
            placeholder="**********"
            type="password"
            label="password"
            v-model="form.password"
            class="field"
          />
          <!--form field submit, change color to black while waiting for response from server-->
          <BaseButton text="" :disabled="disabledState">
            <span v-show="!isLoading">Sign Up</span>
            <Spinner
              :animation-duration="1000"
              :size="30"
              :color="'#ffffff'"
              v-show="isLoading"
            />
          </BaseButton>
        </form>
        <!--custom install script-->
        <!-- Install button, hidden by default -->
        <small class="goto__sign__up"
          >Already have an account?
          <RouterLink
            :to="{ name: 'login' }"
            class="emphasis"
            style="font-size: 13px"
            >Login
          </RouterLink>
        </small>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hidden {
  display: none !important;
}

.goto__sign__up {
  /* font-size: 0.95rem; */
  margin-top: 10px;
  color: var(--secondary);
  text-align: left !important;
}

.goto__sign__up a {
  text-decoration: underline;
}

#sign__up__page .container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  column-gap: 100px;
  grid-template-rows: 1fr;
  grid-template-areas: "bg form";
  min-height: 100vh;
  position: relative;
}

/**the background container */
#sign__up__page .container > div:first-child {
  background-image: url("@/assets/img/bg/login-bg.svg");
  background-size: cover;
  background-position: center center;
}

#sign__up__page .container > div:last-child {
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

#sign__up__page .container > div:last-child h1 + small {
  margin-bottom: 30px;
}

input,
button,
.form__field input,
.field {
  width: 500px;
}

#sign__up__page .title h1 {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
}

#sign__up__page .title p {
  align-items: center;
  justify-content: center;
  line-height: 28px;
  color: var(--secondary);
  margin-bottom: 25px;
  margin-top: 3px;
}

#sign__up__page .continue__with__email {
  display: flex;
  flex-direction: row;
  column-gap: 15px;
  color: var(--secondary);
  font-size: 0.95rem;
  text-align: center;
  vertical-align: middle;
  margin-top: 15px;
  margin-bottom: 25px;
  justify-content: center;
}

#sign__up__page .continue__with__email .divider__line {
  color: var(--border-color);
  font-weight: 500;
  letter-spacing: -1px;
}

/** -----------------------------small devices------------------------ */

@media screen and (max-width: 768px) {
  #sign__up__page .container {
    display: block;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "bg" "form";
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  #sign__up__page .container > div:first-child {
    display: none;
  }

  #sign__up__page .container > div:last-child {
    padding: 50px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    place-content: center;
    min-height: 90vh;
  }

  #sign__up__page .container > div:last-child h1 + small.error {
    margin-bottom: 35px;
  }

  #sign__up__page .container div:last-child form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    column-gap: 15px;
    margin-top: 0.75rem;
  }

  .form__field,
  button {
    width: auto;
  }
}
</style>
