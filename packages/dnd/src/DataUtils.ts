const reorder = (list: any, startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [moved] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, moved);
  return result;
};
export default {
  reorder,
};
