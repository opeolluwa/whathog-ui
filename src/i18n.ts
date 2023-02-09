import { createI18n } from "vue3-i18n";

const messages = {
    en: {
        menu: {
            home: "Home",
            faq: "FAQ",
            chatbot: "Chatbot",
            language: "Language",
            exit: "Exit",
            ngo: "NGO"

        },
        changeLanguageHeading:"Change Language",
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
            home: "Ile",
            faq: "Ibeere to gbajumo",
            chatbot: "Chatbot",
            language: "Yi Ede Pada",
            exit: "Jade",
            ngo: "NGO"
        },
        changeLanguageHeading:"Yi Ede Pada",
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