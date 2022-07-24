export enum Gap {
  daily = 'daily',
  weekly = 'weekly',
  monthly = 'monthly',
}

const selectedGap = ref(Gap.weekly);

export default selectedGap;
