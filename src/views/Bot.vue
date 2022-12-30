<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
import axios from "axios";
export default defineComponent({
  components: {
    Icon
  },
  data: () => ({
    crumbs: ["Home", "Category", "Sub category"],
    showSidebar: false,
    userTheme: "light-theme",
    newMessage: "",
    awaitingBotResponse: false,
    messages: [
      {
        user: "bot",
        timestamp: new Date().toLocaleTimeString(),
        message: "Hello, I am a chatbot. How can I help you?"
      },
    ] as Array<any>
  }),
  methods: {
    // add message to the chat ui
    async sendMessage() {
      /**
       * show loading component
       * inject the message into the UI
       * clear the input field 
       * send the query to the API and await response
       */
      this.awaitingBotResponse = true;
      const payload: any = {
        user: "me",
        timestamp: new Date().getTime(),
        message: this.newMessage,
      };
      const query = this.newMessage;
      this.newMessage = "";
      this.messages.push(payload);
      const { data: response } = await axios.post("/bot", {
        query
      })
      this.newMessage = "";
      if (response) {
        // hide loading action
        this.awaitingBotResponse = false;
        // this.res = response;

        console.log(JSON.stringify(response.data.reply));

        // add bot response to the chat ui
        this.messages.push({
          user: "bot",
          timestamp: new Date().toLocaleTimeString(),
          message: response.data.reply.text.split(":")[1]
        })
      }
      // console.log("response ", response.data.response].data.text);



      console.log(JSON.stringify(payload));

      this.newMessage = "";
    },
    getTheme() {
      return localStorage.getItem("user-theme");
    },
    setTheme(theme: string) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },

    //track bread crumb
    selected(crumb: any) {
      console.log(crumb);
    },

    isDeviceMobile() {
      /**
       * use JavaScript to detect if the device is mobile via media query
       * if device is mobile, return true, else return false
       * pass this function to watch lifecycle hook
       */
      const isMobileDevice = window.matchMedia("(max-width: 400px)").matches;
      if (!isMobileDevice) {
        return true;
      }
      // return false
    },
  },
});
</script>

<template>
  <div>
    <main>
      <!-- the header-->
      <!--inject all views here-->
      <div>
        <div id="conversation" v-for="message in messages" style="padding-bottom:25px">
          <!-- {{ messages }} -->
          <template v-if="message.user === 'me'">
            <div class="message__component" style="flex-direction: row-reverse;">
              <Icon icon="mdi:account" class="bot__icon" />
              <div class="message__box my__message">
                <div class="message__content">
                  <p>{{ message.message }}</p>
                </div>
              </div>
            </div>
          </template>

          <template v-if="message.user === 'bot'">
            <div class="message__component">
              <Icon icon="mdi:robot-outline" class="bot__icon" />
              <div class="message__box bot__message">
                <div class="message__content">
                  <div>{{ message.message }}</div>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="dot-pulse" v-show="awaitingBotResponse" style="margin-left: 15px; margin-top: 0;"></div>

      </div>
      <form action="" id="message__box" @submit.prevent="sendMessage">
        <div id="input__field">
          <input type="text" placeholder="type a message" v-model="newMessage">
          <Icon icon="mdi:send" id="send__icon" @click="sendMessage" />

        </div>
      </form>

    </main>
  </div>
</template>

<style scoped>
main {
  background-image: url("@/assets/img/geometry.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  height: 100vh !important;
  position: relative;
}





#send__icon {
  position: absolute;
  right: 15px;
  top: 0;
  bottom: 0;
  margin: auto;
  color: var(--secondary);
  font-size: 1.5rem;
  cursor: pointer;
}

#input__field {
  width: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
}

#message__box {
  width: 100%;
  display: flex;
  text-align: center;
  /* min-height: calc(100vh - 30px); */
  margin: 0 auto;
  position: fixed;
  z-index: 1256;
  bottom: 0px;
  left: 0;
}



#message__box input {
  width: 90%;
  background-color: var(--border-color);
  padding: 10.5px 10px;
  border-radius: 25px;
  padding-left: 15px;
  margin: 0 auto;
}

#message__box ::placeholder {
  font-size: 13.5px;
  padding-left: 15px;
}

#message__box input {
  /* width: 500px; */
  width: 100%;
  height: 50px;
  border-radius: 8px;
  padding: 7px 25px 7px 25px;
  border: 1.5px solid var(--border-color);
  border-radius: 5px;
  display: block;
  font-size: 14px;
}

#message__box input::placeholder {
  display: inline-block;
  letter-spacing: 1.25px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
}

#message__box input:focus {
  outline: none;
  border: none;
}

.message__box {
  max-width: 65%;
  color: var(--dark-text);
  padding: 7.5px 19px;
  border-radius: 8px 25px 25px 18px;
  margin-bottom: 2.5px;
  overflow: wrap;
  font-size: small !important;
  line-height: 24px;
  display: flex;
  align-items: center;
}

.bot__icon {
  color: var(--secondary);
  background-color: #ccc;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 10px;
}

.message__box .message__content {
  display: flex;
  align-items: center;
  margin-bottom: .45rem;
  text-overflow: wrap;
}

.my__message {
  background-color: var(--secondary);
  color: var(--white);
  border-radius: 25px 8px 25px 25px;
  /* float: right; */
  margin-bottom: 1.25rem;
  position: relative;
  right: 0 !important;
}

.my__message::after {
  content: "";
  clear: both;
}

.message__component {
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  column-gap: 5px;
}

.bot__message {
  background-color: var(--white);
  color: var(--dark-text);
  border-radius: 25px 8px 25px 25px;
}

.dot-pulse {
  position: relative;
  left: -9999px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: var(--secondary);
  color: var(--secondary);
  box-shadow: 9999px 0 0 -5px;
  animation: dot-pulse 1.5s infinite linear;
  animation-delay: 0.25s;
}

.dot-pulse::before,
.dot-pulse::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: var(--secondary);
  color: var(--secondary);
}

.dot-pulse::before {
  box-shadow: 9984px 0 0 -5px;
  animation: dot-pulse-before 1.5s infinite linear;
  animation-delay: 0s;
}

.dot-pulse::after {
  box-shadow: 10014px 0 0 -5px;
  animation: dot-pulse-after 1.5s infinite linear;
  animation-delay: 0.5s;
}

@keyframes dot-pulse-before {
  0% {
    box-shadow: 9984px 0 0 -5px;
  }

  30% {
    box-shadow: 9984px 0 0 2px;
  }

  60%,
  100% {
    box-shadow: 9984px 0 0 -5px;
  }
}

@keyframes dot-pulse {
  0% {
    box-shadow: 9999px 0 0 -5px;
  }

  30% {
    box-shadow: 9999px 0 0 2px;
  }

  60%,
  100% {
    box-shadow: 9999px 0 0 -5px;
  }
}

@keyframes dot-pulse-after {
  0% {
    box-shadow: 10014px 0 0 -5px;
  }

  30% {
    box-shadow: 10014px 0 0 2px;
  }

  60%,
  100% {
    box-shadow: 10014px 0 0 -5px;
  }
}
</style>
