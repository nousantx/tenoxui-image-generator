import { generateColors } from '@nousantx/color-generator'

export const color = {
  red: '#f03838',
  crimson: '#dc143c',
  ruby: '#e0115f',
  tomato: '#ff6347',
  salmon: '#fa8072',
  orange: '#f37f2e',
  amber: '#f49c09',
  gold: '#ffd700',
  yellow: '#f1c230',
  lime: '#91e411',
  green: '#15e05f',
  emerald: '#13cb8e',
  teal: '#12c39f',
  aquamarine: '#7fffd4',
  turquoise: '#40e0d0',
  cyan: '#21d2f1',
  sky: '#0ea5e9',
  blue: '#3d82f2',
  navy: '#0000a8',
  indigo: '#6f72f7',
  violet: '#7844f0',
  purple: '#a855f7',
  lilac: '#bb77bb',
  fuchsia: '#d946ef',
  pink: '#f32d8f',
  rose: '#eb3756',
  slate: '#636c7c',
  zinc: '#71757a',
  gray: '#696a6a',
  neutral: '#737373',
  olive: '#e2e200',
  beige: '#d8ca8a',
  bronze: '#cd7f32',
  chocolate: '#d2691e',
  apricot: '#FFB06B',
  sienna: '#b74226',
  terracotta: '#e85336'
}

export const colors = generateColors({
  option: { format: 'object2', output: 'rgb-only' },
  color
})
