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
  <article class="background relative rounded-xl overflow-hidden max-lg:h-40">
    <i :class="icons[data.title]" class="text-4rem absolute -top-2 right-4" />
    <div class="bg-primary-main p-8 rounded-xl absolute bottom-0 w-full h-4/5">
      <div class="flex justify-between items-center">
        <p>{{ data.title }}</p>
        <button type="button">
          <i class="i-custom-ellipsis opacity-60 hover:opacity-100" />
        </button>
      </div>
      <div class="flex lg:flex-col max-lg:items-center justify-between gap-2 m-t-4">
        <h1 class="lg:text-5xl text-3xl font-300">
          <HourPicker :time="frame.current" />
        </h1>
        <p>
          <span>Last {{ lastName }} - </span>
          <HourPicker :time="frame.previous" />
        </p>
      </div>
    </div>
  </article>
</template>

<style>
.background {
  background-color: v-bind('data.color');
}
</style>
