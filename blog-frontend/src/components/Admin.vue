<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter(); 
    const articles = ref([
        { id: 1, title: "Article One", date: "August 7, 2024", content: "Article One" },
        { id: 2, title: "Article Two", date: "August 4, 2024", content: "Article Two" },
            // Add more articles as needed])
    ]); 

    function newArticle() {
        router.push('/new');
    }

    function deleteArticle(id) {
        // TODO 
        console.log(`I've pressed article ${id} delete button`);
    }

</script>
<template>
    <div class="header">
        <h1 class="header">Personal Blog</h1>
        <button v-on:click="newArticle">+ Add</button>
    </div>
    <br>
    <div class="page"> 
        <div v-for="article in articles" :key="article.id" class="article-container">
            <router-link :to="'/article/' + article.id">
                <h3 id="title">{{ article.title }}</h3>
            </router-link>
            <router-link :to="'/edit/' + article.id">
                <h3 id="edit">Edit</h3>
            </router-link>      
            <h3 v-on:click="deleteArticle(article.id)">Delete</h3>
            
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
.header {
    display: flex;          /* Use Flexbox for the layout */
    justify-content: space-between; /* Space out the items: h1 to the left, button to the right */
    align-items: center;    /* Vertically align items to the center */
    padding: 10px;          /* Optional: Add padding for spacing */
}

.article-container {
    display: flex;                /* Use flexbox to align title and date horizontally */
    justify-content: space-between; /* This pushes the title to the left and the date to the right */
    align-items: center;           /* Vertically centers the title and date */
    width: 100%;                   /* Ensures the container takes up the full width of the parent */
    padding: 10px 0;               /* Adds some padding for space between articles */
    box-sizing: border-box;        /* Ensures padding doesn’t cause overflow */
}
</style>