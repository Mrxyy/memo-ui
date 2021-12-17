<template>
  <div class="mt-10">
    <h2>
      使用
    </h2>
    <div class="pl-10">
      <h3>esm</h3>
      <v-md-editor
        v-model="esm"
        mode="preview"
      />
      <h3>umd</h3>
      <v-md-editor
        v-model="umd"
        mode="preview"
      />
      <h3>commonjs</h3>
      <v-md-editor
        v-model="commonjs"
        mode="preview"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const esm = `\`\`\`typescript
import { createApp } from 'vue';
import memo from "memo-ui";
import "memo-ui/style.css";
const app = createApp(App);
app.use(memo);
app.mount('#app');
\`\`\``;

const umd = `\`\`\`html
// browser
<script src="memo-ui/dist/memo-ui.umd.js"><\/script>
\`\`\``;

const commonjs = `\`\`\`typescript
//node
require("memo-ui")
\`\`\``;

</script>

<style scoped>
h1,
h2,
h3 {
  padding-left: 2rem;

  @apply text-primary my-4;
}

h1 {

  @apply text-4xl;
}

h2 {

  @apply text-3xl;
}

h3 {

  @apply text-2xl;
}
</style>
