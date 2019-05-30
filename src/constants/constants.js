const mq = window.matchMedia('(min-width: 500px)');

export const DRAWER_WIDTH = mq.matches ? 400 : 200;
export const MAX_COLORS = 20;
