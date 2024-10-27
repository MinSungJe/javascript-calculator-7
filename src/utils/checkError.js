import {
  IS_WRONG_SELECTOR,
  IS_WRONG_NUMBERS,
  IS_WRONG_SEPERATOR,
  ErrorMessage,
} from '../constants/constant.js';

// string => Error?
// 입력받은 값 유효성 검사
const checkError = (restString, seperatorJoinString) => {
  const numbersRegexString = `^\\d+((${seperatorJoinString})\\d+)*$`;
  const numbersRegex = new RegExp(numbersRegexString);

  // 에러 없음
  if (numbersRegex.test(restString) | (restString === '')) return;

  // 커스텀 구분자 지정문 에러
  if (IS_WRONG_SELECTOR.test(restString)) {
    throwError(ErrorMessage.PREFIX, ErrorMessage.WRONG_SELECTOR);
  }
  // 지정되지 않은 구분자 사용 에러
  if (IS_WRONG_SEPERATOR.test(restString)) {
    throwError(ErrorMessage.PREFIX, ErrorMessage.WRONG_SEPERATOR);
  }
  // 숫자배열 입력 에러
  if (IS_WRONG_NUMBERS.test(restString)) {
    throwError(ErrorMessage.PREFIX, ErrorMessage.WRONG_NUMBERS);
  }

  // 입력 에러
  throw new Error(`[ERROR] ${WRONG_INPUT_ERROR}`);
};

const throwError = (prefix, message) => {
  throw new Error(`${prefix} ${message}`);
};

export default checkError;
