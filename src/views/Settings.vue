<template>
  <div id="settings__page">
    <h2 class="mb-3">
      {{ $t("changeLanguageHeading") }}
    </h2>
    <p>
      {{ $t("changeLanguageText") }}
    </p>


    <button @click="setLocale"
      class="d-flex align-center justify-space-between mt-10 btn elevation-2 px-5 rounded py-3">Change language <svg
        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="d-block-inline ml-3"
        viewBox="0 0 16 16">
        <path
          d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
        <path
          d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
      </svg></button>
  </div>
</template>

<script>
import { useI18n } from "vue3-i18n";
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const i18n = useI18n();
    const setLocale = () => {

      const currentLanguage = i18n.getLocale();
      let lang = ""
      if (currentLanguage === 'en') {
        lang = 'yo'
      }
      if (currentLanguage === 'yo') {
        lang = 'en'
      }
      i18n.setLocale('yo');

    };

    return {
      setLocale,
    };
  },
});
</script>




<style scoped>
#settings__page h3 {
  font-weight: 500;
}

#social__account {
  margin: 10px 0;
  display: flex;
  grid-template-columns: 1fr;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  column-gap: 15px;
}

#social__account .social__account__icon {
  color: var(--secondary);
  width: 100%;
  height: 40px;
  border-radius: 5px;
  padding: 7.5px;
  display: flex;
  margin: 5px 0;
  align-items: center;
}

#social__account .social__account__icon:first-child {
  margin-top: 0;
  padding-top: 3px;
}

#social__account img {
  max-width: 100%;
  width: 40px;
  padding: 10px;
}
</style>
