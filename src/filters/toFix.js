export default (value) => {
  let item = value;
  item = parseFloat(item);
  return `${item.toFixed(2)} Р`;
};
