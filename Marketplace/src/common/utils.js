export function formatPrice(number) {
  return number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
