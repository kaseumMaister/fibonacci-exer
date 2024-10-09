function fib(run_num) {
    let fib_seq = [0,1]

    if (run_num > 0) {
        for (let i = fib_seq.length; i < run_num; i++) {
            fib_seq[i] = fib_seq[i - 1] + fib_seq[i - 2]            

        }

    }

    return fib_seq

}

console.log(fib(8));
