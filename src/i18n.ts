import { createI18n } from "vue3-i18n";

const messages = {
    en: {
        menu: ["Home"],
        test: "test",
        object: {
            a: "1233",
        },
        parse: "welcome to {name}",
        parses: {
            a: "welcome to {name}",
        },
    },
    zh: {
        menu: ["首页"],
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
    locale: "fr",
    messages: messages,
});

export default i18n;