<script setup>
function add() {
    console.log("Let's add article")
    // Generate new article ID
    // and add new data to json
}
</script>
<template>   
    <div>
        <h1>New Article</h1>
        <input type="text" placeholder="Article Title" id="title">
        <input type="text" placeholder="Publishing Date" id="date">
        <input type="text" placeholder="Content" id="content">
        <br>
        <button v-on:click="add" id="add">Publish</button>
    </div>
</template>