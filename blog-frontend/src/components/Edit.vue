<script setup>
    import { useRoute } from 'vue-router';
    import { computed } from 'vue';
    // Need to move data to json file and load from there
    const articles = [
        { id: 1, title: "Article One", date: "August 7, 2024", content: "Article One" },
        { id: 2, title: "Article Two", date: "August 4, 2024", content: "Article Two" },
            // Add more articles as needed])
    ];

    const route = useRoute();

    const articleId = computed(() => parseInt(route.params.id));
    const article = computed(() => articles.find(a => a.id === articleId.value));

    function update() {
        // Somehow take the id and update the articles data
        console.log("Let's update");
    }
</script>
<template>
    <div id="header">
        <h1>Update Article</h1>
        <div v-if="article">
            <input type="text" placeholder="Article Title" id="title">
            <input type="text" placeholder="Publishing Date" id="date">
            <input type="text" placeholder="Content" id="content">
            <br>
            <button v-on:click="update" id="update">Update</button>
        </div>
    </div>
    
    
</template>
<style scoped>
    /* Make the input object longer for title and date
    #title {
        
    } */

     /* Make input object bigger and widder for content
     #content {

     } */
</style>
