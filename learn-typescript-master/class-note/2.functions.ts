// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b:number) {
    return a + b;
}

var sumResult = sum(10,20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(a: number, b:number): number {
    return a + b;
}

var addResult = add(10,20);

// 파라미터를 제한하는 특성
function sumLimit(a: number, b:number) {
    return a + b;
}
sumLimit(10, 20); // 30
// 함수에 대한 스펙을 이해함으로써 2개의 인자만을 받도록 정의되었는데 3가지 파라미터를 넘겨서 발생
sumLimit(10,20,30); 


// 함수의 옵셔널 파라미터
function log(a: string, b?:string, c?:string) {

}
log('hello ts');
log('hello ts','welcome');