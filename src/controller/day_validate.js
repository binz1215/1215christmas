import { Console } from '@woowacourse/mission-utils';
import { inputDay } from '../view/inputView.js';

class ValidDay {
  #day;

  async validDay() {
    let valid = true;

    while (valid) {
      try {
        this.#day = await inputDay();
        this.#dayValidCheck();

        valid = false;
      } catch (error) {}
    }
    return this.#day;
  }

  #dayValidCheck() {
    if (this.#isNum()) {
      Console.print(`[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.`);
      throw new Error('[ERROR]');
    }
    // if(this.#) {
    //  Console.print(`[ERROR] `);
    //  throw new Error('[ERROR]')
    // }
  }

  //#isNumIncludeMonth() {
  //  if (Number.isNaN(this.#day)) return true;
  //}
}
export default ValidDay;

const play = new ValidDay();
const x = await play.validDay();
console.log(x);
