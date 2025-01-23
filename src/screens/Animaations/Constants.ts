const BestCuisin = 'Italian';
export const cuisines = new Array(20).fill(BestCuisin).map((cuisin, i) => ({
  id: i + 1,
  name: cuisin,
  selected: false,
}));
