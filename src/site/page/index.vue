<template>
  <div class="text-center sm logo-brand w-full h-full mx-auto mt-15">
    <memo
      bg="white"
      shadow="#10b981"
    />
    <card
      class="mx-auto bg-dark"
      width="500px"
    >
      <p class="text-primary text-2xl leading-10">
        github: <a
          target="_blank"
          href="https://github.com/Mrxyy/memo-ui"
          class="text-link text-xl hover:underline"
        >https://github.com/Mrxyy/memo-ui</a>
      </p>
      <p class="text-primary text-2xl leading-10">
        npm: <a
          target="_blank"
          href="https://www.npmjs.com/package/memo-ui"
          class="text-link text-xl hover:underline"
        >https://www.npmjs.com/package/memo-ui</a>
      </p>
    </card>
  </div>
</template>

<script lang="ts" setup>
import memo from "../../components/colour-text/memo.vue";
import card from "../../components/card/index.vue";
</script>

<style lang="scss">
.logo-brand {

  .text-magic {
    font-size: 12rem !important;
  }
}
</style>
