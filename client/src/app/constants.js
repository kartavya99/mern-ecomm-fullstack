export const ITEMS_PER_PAGE = 10;
export function discountedPrice(item) {
  const actualPrice = item.price * (1 - item.discountPercentage / 100);
  return Math.round(actualPrice, 2);
}
