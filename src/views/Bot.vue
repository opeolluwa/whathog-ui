<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
export default defineComponent({
  components: {
    Icon
  },
  data: () => ({
    crumbs: ["Home", "Category", "Sub category"],
    showSidebar: false,
    userTheme: "light-theme",
    newMessage: "",
    messages: [
      {
        user: "bot",
        timestamp: new Date().toLocaleTimeString(),
        message: "Hello, I am a chatbot. How can I help you?"
      },
      {
        user: "me",
        timestamp: new Date().toLocaleTimeString(),
        message: "I want to buy a new phone"
      },
      {
        user: "bot",
        timestamp: new Date().toLocaleTimeString(),
        message: "Hello, I am a chatbot. How can I help you? lordd"
      },
      {
        user: "me",
        timestamp: new Date().toLocaleTimeString(),
        message: "I want to buy a new phone"
      },
      {
        user: "bot",
        timestamp: new Date().toLocaleTimeString(),
        message: "Hello, I am a chatbot. How can I help you? lordd"
      }
    ] as Array<any>
  }),
  methods: {
    // add message to the chat ui
    sendMessage() {
      const payload: any = {
        user: "me",
        timestamp: new Date().getTime(),
        message: this.newMessage,
      };
      this.messages.push(payload);
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
        <div id="conversation" v-for="message in messages">
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
            <!--  <small class="message__time">
              {{ message.timestamp }}
            </small> -->
          </template>
        </div>
      </div>
      <form action="" id="message__box" @submit="sendMessage">
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
</style>
