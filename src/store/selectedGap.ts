export enum Gap {
  daily,
  weekly,
  monthly,
}

const selectedGap = ref(Gap.weekly);

export default selectedGap;
