<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const logIn = ref(localStorage.getItem('loggedIn') === 'true');
    const router = useRouter();

    function loggedIn() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('loggedIn', 'true');
            router.push('/admin');
            return
        }
        // TODO
        console.log('Refresh the page and try again')   
    }

</script>
<template>
    <div v-if="logIn">
        <h1>Welcome, you're logged in</h1>
    </div>
    <div v-else>
        <h1>Username</h1>
        <input type="text" id="username" placeholder="Username" @keydown.enter="loggedIn()"/>
        <h1>Password</h1>
        <input type="password" id="password" placeholder="Password" @keydown.enter="loggedIn()"/>
        <br>
        <button v-on:click="loggedIn()">Log In</button>
    </div>
</template>