<script setup lang="ts">
import { computed } from "vue";
import { tagLabels, type TagVariant } from "./tagVariants";

const props = defineProps<{
  variant: TagVariant;
}>();

const classes = computed(() => ["tag", `tag-variant-${props.variant}`]);
</script>

<template>
  <div :class="classes">
    <p class="tag-copy">{{ tagLabels[props.variant] }}</p>
  </div>
</template>

<style scoped lang="scss">
.tag {
  border-radius: var(--radius-md);
  padding: calc(var(--space-xxs) - var(--stroke-md)) calc(var(--space-sm  ) - var(--stroke-md));
  border: var(--stroke-md) solid transparent;

  &-copy {
    font-size: var(--font-size-xs);
    font-weight: 700;
  }

  &-variant {
    &-three {
      background-color: #ed9c55;
      color: #492708;
    }

    &-react {
      background-color: #61dafb;
      color: #0f2e36;
    }

    &-websockets {
      background-color: #2674a4;
      color: white;
    }

    &-redis {
      background-color: #ce4036;
      color: white;
    }

    &-html {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-css {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-javascript {
      background-color: #ffdf4f;
      color: #362d03;
    }

    &-node {
      background-color: #237d23;
      color: white;
    }

    &-next {
      background-color: white;
      color: black;
    }

    &-kubernetes {
      background-color: #326ce5;
      color: white;
    }

    &-postgresql {
      background-color: #2f6c92;
      color: white;
    }

    &-ogl {
      background-color: #0e5495;
      color: white;
    }

    &-glsl {
      background-color: #95630e;
      color: white;
    }

    &-reactnative {
      background-color: #61dafb;
      color: #0f2e36;
    }

    &-supabase {
      background-color: #3fcf8e;
      color: #0a2e1e;
    }

    &-expo {
      background-color: #000020;
      color: white;
    }

    &-workbox {
      background-color: #f5a623;
      color: #3a2500;
    }

    &-tailwind {
      background-color: #38b2ac;
      color: white;
    }

    &-pwa {
      background-color: #5a0fc8;
      color: white;
    }

    &-typescript {
      background-color: #3178c6;
      color: white;
    }

    &-vite {
      background-color: #646cff;
      color: white;
    }

    &-gemini {
      background-color: #4285f4;
      color: white;
    }

    &-framermotion {
      background-color: #ff0055;
      color: white;
    }
  }
}
</style>
