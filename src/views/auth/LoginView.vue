<template>
    <v-form>
        <v-container>
            <v-row>
                <v-col cols="6" sm="12">
                    <v-text-field v-model="email" label="Email" outlined dense :rules="emailRules"></v-text-field>
                    <v-text-field v-model="password" label="Password" outlined dense
                        :rules="passwordRules"></v-text-field>
                    <v-btn color="primary" @click="login" :disabled="!isFormValid">
                        Loginwlfglbjd 
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>


<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "LoginScreen",
    data: () => ({
        email: "",
        password: "",
        isFormValid: false,
        emailRules: [
            (v: string) => !!v || "Email is required",
            (v: string) => /.+@.+\..+/.test(v) || "Email must be valid",
        ],
        passwordRules: [
            (v: string) => !!v || "Password is required",
            (v: string) => v.length >= 6 || "Password must be at least 6 characters",
        ],
    }),
    methods: {
        login() {
            console.log("login");
        }
    }
})
</script>