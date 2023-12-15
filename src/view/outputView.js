import { Console } from '@woowacourse/mission-utils';

const Print = {
  welcome() {
    Console.print(`안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.`);
  },
  preview(day) {
    Console.print(`12월 ${day}에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`);
  },
  /**
   *
   * @param {Object} order
   */
  order(order) {
    Console.print(`<주문내역>`);
  },
  /**
   *
   * @param {Number} sum:할인 전 합계금액
   */
  sumBeforeDiscount(sum) {
    Console.print(`${sum.toLocaleString()}원`);
  },
  gift() {
    Console.print(`<증정 메뉴>`);
  },
  event() {
    Console.print(`<혜택 내역>`);
  },
  sumEventPrice() {
    Console.print(`<총혜택 금액>`);
  },
  afterDiscount() {
    Console.print(`<할인 후 예상 결제 금액>`);
  },
  badge() {
    Console.print(`<12월 이벤트 배지>`);
  },
};
export default Print;
