// 나름대로 자바스크립트 파일에서 타입스크립트와 같은 효과를 적용
// @ts-check

/**
 * @param {number} a 첫번째 파라미터
 * @param {number} b 두번째 파라미터
 * @returns {number} 결과값
 */
function add(a, b) {
    return a + b;
}
var result = add(10, '20');