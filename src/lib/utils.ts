export function currencyBDT(value: number) {
  return new Intl.NumberFormat('en-BD', {
    style: 'currency',
    currency: 'BDT',
    maximumFractionDigits: 0
  }).format(value);
}
export function classNames(...cls: (string|false|undefined)[]) {
  return cls.filter(Boolean).join(' ');
}
