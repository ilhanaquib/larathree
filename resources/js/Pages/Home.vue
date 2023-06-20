<template>
    <head>
        <title>
            Home
        </title>
        <meta type="description" content="Home information" head-key="description">
    </head>

        <h1 class=" text-3xl">Blog</h1>

        <Highlight :code="snippet" />
        
</template>

<script setup>
    import Highlight from "@/Components/Highlight.vue";

    let snippet = `
    class Example {
        public function __construct() {
        }
    }
    `.trim();
</script>