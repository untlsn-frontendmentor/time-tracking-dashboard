<script lang="ts" setup="">
import avatar from '~/assets/images/image-jeremy.png';
import { Gap } from '~/store/selectedGap';
import GapButton from '~/components/GapButton.vue';
</script>

<template>
  <article class="bg-primary-main rounded-xl lg:w-60">
    <header class="bg-primary-intense rounded-xl p-8 lg:p-b-16 flex lg:flex-col max-lg:items-center gap-8">
      <img :src="avatar" alt="avatar" class="rounded-full border-2 size-20">
      <div>
        <h1 class="text-text text-sm">
          Report from
        </h1>
        <h2 class="lg:text-4xl text-2xl font-300">
          Jeremy Robson
        </h2>
      </div>
    </header>
    <div class="p-8 flex lg:flex-col max-lg:justify-evenly children:(text-(left lg)) gap-4">
      <GapButton :gap="Gap.daily">
        Daily
      </GapButton>
      <GapButton :gap="Gap.weekly">
        Weekly
      </GapButton>
      <GapButton :gap="Gap.monthly">
        Monthly
      </GapButton>
    </div>
  </article>
</template>
