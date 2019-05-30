const mq = window.matchMedia('(min-width: 500px)');

export const DRAWER_WIDTH = mq.matches ? 400 : 320;
export const MAX_COLORS = 20;
