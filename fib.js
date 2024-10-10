function fib(run_num) {

    if (run_num > 0) {

        let fib_seq = [0,1]

        for (let i = 2; i <= run_num; i++) {
            fib_seq[i] = fib_seq[i - 1] + fib_seq[i - 2];
        }

        return fib_seq
    }

}

function fibsRec(run) {
    if (run === 0) return [0];
    if (run === 1) return [0, 1];
    else {
        let fib_seq = fibsRec(run - 1);
        fib_seq.push(fib_seq[run - 1] + fib_seq[run - 2]);
        return fib_seq
    }
}
console.log(fib(8));

console.log(fibsRec(8));
