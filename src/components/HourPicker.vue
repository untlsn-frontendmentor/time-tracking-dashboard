<script lang="ts" setup="">
const props = defineProps<{
  time: number
}>();
const old = ref(props.time);

watch(() => props.time, (value) => {
  const diff = Math.abs(value - old.value);

  const interval = setInterval(() => {
    if (old.value < value)
      old.value++;

    else if (old.value > value)
      old.value--;

    else
      clearInterval(interval);
  }, 500 / diff);
});
</script>

<template>
  <span>{{ old }}</span>
  <span>hr</span>
  <span v-if="old != 1">s</span>
</template>
