export default function formatMoney(amount: number = 0) {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  };
  const formatter = new Intl.NumberFormat('en-US', options);

  // check if its a clean dollar amount

  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  return formatter.format(amount / 100);
}
