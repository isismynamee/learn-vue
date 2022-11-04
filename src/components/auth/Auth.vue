<script>
import { computed, ref } from 'vue'

// get state from form on vue vite
export default {
    // name: "auth",
    data() {        
        return {
            dataForm: [],
            email: "",
            password: ""
        };
    },
    computed: {
        // a computed getter
        publishedBooksMessage() {
            console.log(this.email, "this is email")
            console.log(this.password, "this is password")
            this.dataForm.push({
                ...this.dataForm,
                email: this.email,
                password: this.password
            }).then(() => {
                alert("Now you on Homepage")
            })
            console.log(this.dataForm, "this dataForm")
        // `this` points to the component instance
        }
    }
}
</script>

<template>
    <div id="auth">
        <input v-model="email" />
        <input type="date" v-model="password">

        <!-- binding the state on vue -->
        
        <template v-for="(item, index) in dataForm">{{item.email}}</template>

        <template>{{password}}</template>
        
        <!-- <input type="password"> -->
        <template  v-if="!dataForm.email && !dataForm.password">
            <router-link to="/homepage">
                <button @click="publishedBooksMessage">move to Homepage</button>
            </router-link>
        </template>
        <template v-else="!dataForm.email && dataForm.password">
            <span>please fill the form</span>
        </template>

    </div>
</template>