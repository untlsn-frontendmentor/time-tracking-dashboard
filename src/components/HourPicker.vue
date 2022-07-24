<script lang="ts" setup="">
const props = defineProps<{
  time: number
}>();
</script>

<template>
  <span>{{ props.time }}</span>
  <span>hr</span>
  <span v-if="props.time > 1">s</span>
</template>
