<script lang="ts" setup="">
import type { Gap } from '~/store/selectedGap';
import selectedGap from '~/store/selectedGap';

const props = defineProps<{
  gap: Gap
}>();

const selected = computed(() => selectedGap.value == props.gap);
</script>

<template>
  <button
    type="button"
    :class="selected ? '' : 'opacity-65'"
    @click="selectedGap = props.gap"
  >
    <slot />
  </button>
</template>
