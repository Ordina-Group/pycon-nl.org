// scheduleData.ts
import { speakers } from './speakersTalk';

export interface ScheduleItem {
  time: string;
  title: string;
  speaker?: typeof speakers[number];
  partialText?: string;
  direction: 'left' | 'right';
  backgroundColor: 'north3' | 'north2' | 'shark' | 'fountain' | 'ordina' | 'soprasteria' | 'north';
  fontBold?: boolean;
  id?: number;
}

export const scheduleItems: ScheduleItem[] = [
  // TODO: Add schedule items here
]
