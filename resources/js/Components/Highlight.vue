<template>
  <div>
    <header class="flex justify-end" border-b border-gray-800>
      <button @click="copyToClipboard">
        copy
      </button>
    </header>
    <pre><code ref="code">{{ code }}</code></pre>
  </div>
</template>

<script setup>
import { highlightElement } from "@/Services/SyntaxHighlighting";
import { onMounted, ref } from "vue";


let props = defineProps({
  code: String,
});

let block = ref(null);

let copyToClipboard = () => {
  navigator.clipboard.writeText(props.code);
  alert('copied');
};

onMounted(() => {
    highlightElement(block.value);
});
</script>
