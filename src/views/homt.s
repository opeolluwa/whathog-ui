<script lang="ts" >
import { defineComponent } from "vue";
import AppFab from "@/components/AppFab.vue";
import "../web-speech";
import greeting from "@/components/greetings";

export default defineComponent({
    name: "HomeView",
    components: {
        AppFab,
    },
    data: () => ({
        showModal: false,
        greeting,
    }),
    methods: {
        keelItWithFire() {
            let target = document.querySelector(
                ".sithLord"
            ) as unknown as HTMLElement;
            target.style.display = "none";
        },
    },
});
</script>
