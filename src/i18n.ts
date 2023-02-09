import { createI18n } from "vue3-i18n";

const messages = {
    en: {
        menu: {
            home: "home",
            faq: "faq",
            chatbot: "chatbot",
            language: "language",
            exit: "exit",
            ngo: "ngo"

        },
        changeLanguageHeading:"change language",
        changeLanguageText: " The Mobile Application supports English and Yoruba. click the button to toggle language",
        test: "test",
        object: {
            a: "1233",
        },
        parse: "welcome to {name}",
        parses: {
            a: "welcome to {name}",
        },
    },
    yo: {
        menu: {
            home: "ile",
            faq: "faq",
            chatbot: "chatbot",
            language: "ede",
            exit: "jade",
            ngo: "ngo"
        },
        changeLanguageHeading:"yi ede pada",
        changeLanguageText: "Ohun elo Alagbeka n ṣe atilẹyin Gẹẹsi ati Yoruba. tẹ bọtini naa lati yi ede pada",
        test: "测试",
        object: {
            a: "1233",
        },
        parse: "welcome to {name}",
        parses: {
            a: "welcome to {name}",
        },
    },
};

const i18n = createI18n({
    locale: "en",
    messages: messages,
});

export default i18n;