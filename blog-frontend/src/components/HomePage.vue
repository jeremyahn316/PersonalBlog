<script setup>
import { ref } from 'vue';

// Need to move data to json file and load from there
const articles = ref([
    { id: 1, title: "Article One", date: "August 7, 2024", content: "Article One" },
    { id: 2, title: "Article Two", date: "August 4, 2024", content: "Article Two" },
        // Add more articles as needed])
]);
</script>

<template>
    <div class="page">
        <h1>Personal Blog</h1>
        <div v-for="article in articles" :key="article.id" class="header-container">
            <router-link :to="'/article/' + article.id">
                <h3 id="title">{{ article.title }}</h3>
            </router-link>
            <h3 id="date"> {{ article.date }}</h3>
        </div>
    </div>
</template>

<style scoped>
.page {
    display: flex;              /* Use flexbox */
    flex-direction: column;      /* Stack elements vertically */
    align-items: flex-start;     /* Align items to the left */
    justify-content: flex-start; /* Align items to the top */
    min-height: 100vh;           /* Ensure the container takes up the full height of the viewport */
    padding: 20px;               /* Add some padding to the top-left */
    box-sizing: border-box;      /* Ensure padding doesn’t cause overflow */
}

.header-container {
    display: flex;                /* Use flexbox to align title and date horizontally */
    justify-content: space-between; /* This pushes the title to the left and the date to the right */
    align-items: center;           /* Vertically centers the title and date */
    width: 100%;                   /* Ensures the container takes up the full width of the parent */
    padding: 10px 0;               /* Adds some padding for space between articles */
    box-sizing: border-box;        /* Ensures padding doesn’t cause overflow */
}

#title {
    font-weight: bold;        /* Makes this <h3> bold */
}
</style>