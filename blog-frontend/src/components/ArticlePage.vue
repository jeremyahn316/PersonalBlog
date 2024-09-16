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

    // Find the article based on the `id` in the URL
    const articleId = computed(() => parseInt(route.params.id));d
    const article = computed(() => articles.find(a => a.id === articleId.value));
</script>
<template>
    <div v-if="article">
        <div id="articlePage">
            <h1>{{ article.title }}</h1>
            <h2>{{ article.date }}</h2>
            <p>{{ article.content }}</p>
        </div>
        
    </div>
    <div v-else>
        <p>Article not found</p>
    </div>

</template>