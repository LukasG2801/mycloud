<template>
    <v-container
        fluid
        class="d-flex justify-center"
    >
        <v-card
            :loading="loading"
            class="ma-10 login-card"
        >
            <template slot="progress">
                <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                ></v-progress-linear>
            </template>

            <v-card-title>Login</v-card-title>
            
            <v-divider/>

            <v-card-text>
                <v-container
                    class="d-flex flex-column"
                >
                    <v-text-field
                        v-model="user.email"
                        label="Email"
                        outlined
                        dense
                    ></v-text-field>

                    <v-text-field
                        v-model="user.password"
                        label="Password"
                        outlined
                        dense
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show1 ? 'text' : 'password'"
                        @click:append="show1 = !show1"
                    ></v-text-field>
                </v-container>
            </v-card-text>

            <v-card-actions>
                <v-btn
                    text
                    @click="login"
                >
                    Login
                </v-btn>

                <v-btn
                    text
                >
                    Register
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        loading: false,
        show1: false,
        user: {
            email: '',
            password: ''
        }
    }),

    methods: {
        async login() {
            try {
                this.loading = true

                let oResponse = await this.$http.post("/users/login", this.user)
                let oToken = oResponse.data.token

                this.loading = false
                
                if(oToken) {
                    this.$router.push("/main")
                }
            }catch(ex) {
                console.error(ex)
            }
        }
    }
}
</script>

<style scoped>
.login-card{
    min-width: 350px;
}
</style>