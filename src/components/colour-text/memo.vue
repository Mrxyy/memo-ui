<template>
  <div class="banner">
    <div
      class="text-magic"
      :data-word="text"
    >
      <span
        class="text-box"
        v-text="text"
      />
      <div class="white" />
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { withDefaults, defineProps } from "vue";
// https://github.com/vuejs/rfcs/pull/227
import colors from "tailwindcss/colors";

interface Props{
  text?: string
  bg?: string
  color?:string
  shadow?:string
}
withDefaults(defineProps<Props>(), {
  text: "memo",
  bg: colors.emerald[500],
  color: colors.amber[400],
  shadow: colors.orange[200]
});

</script>

<style lang="scss" scoped>
.banner {
  display: inline-block;
  padding: 2px 10px;
  // https://github.com/vuejs/rfcs/pull/231
  // color: v-bind(bannerURL);
  background: v-bind(bg);

  .text-magic {
    position: relative;
    display: inline-block;
    font-size: 20px;
    font-family: Raleway, Verdana, Arial;
    white-space: nowrap;
    color: transparent;

    .text-box {
      opacity: 0;
    }

    &::before,
    &::after {
      position: absolute;
      top: 0;
      overflow: hidden;
      filter: contrast(200%);
      content: attr(data-word);
    }

    &::before {
      z-index: 2;
      left: 0;
      text-shadow: 1px 0 0 v-bind(shadow);
      color: v-bind(color);
      animation: move 0.95s infinite;
    }

    &::after {
      z-index: 3;
      left: -1px;
      text-shadow: -1px 0 0 v-bind(color);
      color: v-bind(color);
      animation: move 1.1s infinite 0.2s;
      mix-blend-mode: lighten;
    }

    .white {
      position: absolute;
      z-index: 4;
      left: -10px;
      right: -10px;
      width: 100%;
      height: 1px;
      margin: auto;
      background: v-bind(bg);
      animation: whiteMove 10s ease-out infinite;
    }
  }
}

@keyframes whiteMove {

  9% {
    top: calc(100% - 7px);
  }

  14% {
    top: 8px;
  }

  18% {
    top: 100%;
  }

  22% {
    top: 1px;
  }

  32% {
    top: calc(100% - 11px);
  }

  34% {
    top: 12px;
  }

  40% {
    top: calc(50%);
  }

  43% {
    top: 7px;
  }

  99% {
    top: calc(100% - 10px);
  }
}

@keyframes move {

  10% {
    top: -0.4px;
    left: -1.1px;
  }

  20% {
    top: 0.4px;
    left: -0.2px;
  }

  30% {
    left: 0.5px;
  }

  40% {
    top: -0.3px;
    left: -0.7px;
  }

  50% {
    left: 0.2px;
  }

  60% {
    top: 1.8px;
    left: -1.2px;
  }

  70% {
    top: -1px;
    left: 0.1px;
  }

  80% {
    top: -0.4px;
    left: -0.9px;
  }

  90% {
    left: 1.2px;
  }

  100% {
    left: -1.2px;
  }
}
</style>
