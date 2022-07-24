<script setup lang="ts">
import { nanoid } from 'nanoid';
import UserBox from '~/components/UserBox.vue';
import data from '~/assets/data/data.json';
import TimeBlock from '~/components/TimeBox.vue';

const dataWithID = data.map(v => ({ ...v, id: nanoid() }));
</script>

<template>
  <main class="min-h-screen grid place-items-center bg-primary-dark">
    <div class="grid lg:grid-cols-4 gap-8 max-lg:w-90vw py-6">
      <UserBox class="row-span-2" />
      <TimeBlock v-for="time in dataWithID" :key="time.id" :data="time" />
    </div>
  </main>
</template>
