import type { Gap } from '~/store/selectedGap';

export interface TimePair {
  current: number
  previous: number
}

export interface TimeBlock {
  title: string
  color: string
  timeframes: Record<Gap, TimePair>
}
