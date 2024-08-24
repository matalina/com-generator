export const phases = [
  'F', 'F', 'F', 'WG', 'WG', 'WG', 'WG', 'WG',
  'LQ', 'LQ', 'LQ', 'LQ', 'LQ', 'WC', 'WC',
  'WC', 'WC', 'WC', 'N', 'N', 'N', 'N', 'N', 'WxC',
  'WxC', 'WxC', 'WxC', 'WxC', 'FQ', 'FQ', 'FQ', 'FQ',
  'FQ', 'WxG', 'WxG', 'WxG', 'WxG', 'WxG', 'F', 'F'
];

export const moons = [
  'Wolf',
  'Raven',
  'Dragon',
  'Scorned',
  'Blood',
  'Shadow',
  'Blue',
  'Poisoned',
  'Harvest',
  'Winter',
];

export function today() {
  return getDate(new Date());
}

export function getDate(date: Date) {
  const MS_IN_SEC = 1000;
  const SEC_IN_MIN = 100;
  const MIN_IN_HOUR = 100;
  const HOUR_IN_DAY = 32;
  const DAY_IN_MONTH = 40;
  const MONTH_IN_YEAR = 10;

  const START = new Date(1357, 0, 1).getTime();
  const NOW = date.getTime();
  const milliseconds = NOW - START;
  const seconds = milliseconds / 1000;
  const mins = seconds / 100;
  const hours = mins / 100;
  const days = hours / 32;
  const months = days / 40;
  const years = months / 10;

  const year = Math.floor(years);
  const month = Math.floor(months % 10);
  const day = Math.floor(days % 40);
  const hour = Math.floor(hours % 32)
  const min = Math.floor(mins % 100);
  const sec = Math.floor(seconds % 100);
  const ms = Math.floor(milliseconds % 1000);
  const type = restDay(day);
  const phase = moonPhase(day);
  const verify =
    ms +
    sec * MS_IN_SEC +
    min * SEC_IN_MIN * MS_IN_SEC +
    hour * MIN_IN_HOUR * SEC_IN_MIN * MS_IN_SEC +
    day * HOUR_IN_DAY * MIN_IN_HOUR * SEC_IN_MIN * MS_IN_SEC +
    month * DAY_IN_MONTH * HOUR_IN_DAY * MIN_IN_HOUR * SEC_IN_MIN * MS_IN_SEC +
    year * MONTH_IN_YEAR * DAY_IN_MONTH * HOUR_IN_DAY * MIN_IN_HOUR * SEC_IN_MIN * MS_IN_SEC;
  return {
    timestamp: milliseconds,
    verify,
    year: year + 1,
    month: (month + 1).toString().padStart(2,'0'),
    day: (day + 1).toString().padStart(2,'0'),
    hour: (hour).toString().padStart(2,'0'),
    min: (min).toString().padStart(2,'0'),
    sec: (sec).toString().padStart(2,'0'),
    ms: ms + 1,
    type,
    phase,
    now: NOW,
    phases,
  };
}

export function moonPhase(day: number) {
  return phases[day];
}

export function restDay(day: number) {
  return ((day + 1) % 4 === 0);
}