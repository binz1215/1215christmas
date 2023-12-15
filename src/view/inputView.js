import { Console } from '@woowacourse/mission-utils';

export async function input() {
  const XYZ = await Console.readLineAsync('\n');

  return XYZ;
}
