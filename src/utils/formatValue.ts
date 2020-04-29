const formatValue = (value: number): string =>
  Intl.NumberFormat('de').format(value); // TODO

export default formatValue;
