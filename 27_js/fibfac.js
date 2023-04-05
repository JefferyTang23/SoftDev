// Team TeePee :: Jeffery Tang, Elizabeth Paperno
// SoftDev pd7
// K27 -- Basic functions in JavaScript
// 2023-04-04t
// --------------------------------------------------


// as a duo...
// pair programming style,
// implement a fact and fib fxn

//Do whatever you think is needed. Think: S I M P L E.   Think: S M A R T.

function fac(n){
    if (n < 2) {
        return 1;
    }
    else {
        return n * fib(n-1);
    }
}

function fib(n){
    if(n == 0){
        return 0;
    } else if (n == 1){
        return 1;
    } else{
        return fib(n-1) + fib(n-2);
    }
}
