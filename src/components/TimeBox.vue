<script lang="ts" setup>
import icons from '~/data/icons';
import type { TimeBlock, TimePair } from '~/store/timeData';
import selectedGap, { Gap } from '~/store/selectedGap';
import HourPicker from '~/components/HourPicker.vue';

const props = defineProps<{
  data: TimeBlock
}>();

const frame = computed<TimePair>(() => props.data.timeframes[selectedGap.value]);
const lastName = computed(() => ({
  [Gap.daily]: 'Day',
  [Gap.weekly]: 'Week',
  [Gap.monthly]: 'Month',
})[selectedGap.value]);
</script>

<template>
  <article class="background relative rounded-xl overflow-hidden">
    <i :class="icons[data.title]" class="text-4rem absolute -top-2 right-4" />
    <div class="bg-primary-main p-8 rounded-xl absolute bottom-0 w-full">
      <div class="flex justify-between items-center">
        <p>{{ data.title }}</p>
        <button type="button">
          <i class="i-custom-ellipsis opacity-60 hover:opacity-100" />
        </button>
      </div>
      <h1 class="text-5xl font-300 m-(t4 b-2)">
        <HourPicker :time="frame.current" />
      </h1>
      <p>
        <span>Last {{ lastName }} - </span>
        <HourPicker :time="frame.previous" />
      </p>
    </div>
  </article>
</template>

<style>
.background {
  background-color: v-bind('data.color');
}
</style>
