;Team TeePee :: Jeffery Tang, Elizabeth Paperno
;SoftDev pd7
;K27 -- Basic functions in JavaScript
;2023-04-03t

;Scheme Antecedents for JS work

;factorial:
;<your team's fact(n) implementation>


(define fact 
  (lambda(n)
    (if(< n 2)
        1
    (* n (fact (- n 1)))
    )
  )
)

(fact 1)
(fact 2)
(fact 3)
(fact 4)
(fact 5)
;fact(1) ;"...should be  1"
;fact(2) ;"...should be  2"
;fact(3) ;"...should be  6"
;fact(4) ;"...should be  24"
;fact(5) ;"...should be  120"


;fib:
;<your team's fib(n) implementation>
(define fib
  (lambda(n)
     (if(= n 1)
        1
        (if (= n 0)
         0
         (+ (fib(- n 1)) (fib(- n 2)))
        )
     )
   )
)

 
(fib 0)
(fib 1)
(fib 2)
(fib 3)
(fib 4)
;fib(0) ;"...should be  0"
;fib(1) ;"...should be  1"
;fib(2) ;"...should be  1"
;fib(3) ;"...should be  2"
;fib(4) ;"...should be  3"
