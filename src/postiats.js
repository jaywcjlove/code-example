const code = `// http://www.ats-lang.org/
(* Say Hello! once *)
val () = print"Hello!\n"
//
(* Say Hello! 3 times *)
val () = 3*delay(print"Hello!")
val () = print_newline((*void*))
//

//
(* Build a list of 3 *)
val xs = $list{int}(0, 1, 2)
//
val x0 = xs[0] // legal
val x1 = xs[1] // legal
val x2 = xs[2] // legal
val x3 = xs[3] // illegal
//

//
extern
fun{} f0 (): int
extern
fun{} f1 (int): int
extern
fun{} repeat_f0f1 (int): int
//
implement
{}(*tmp*)
repeat_f0f1(n) =
  if n = 0
    then f0()
    else f1(repeat_f0f1(n-1))
  // end of [if]
//
fun
times (
  m:int, n:int
) : int = // m*n
  repeat_f0f1 (m) where
{
  implement f0<> () = 0
  implement f1<> (x) = x + n
}
//
fun
power (
  m:int, n:int
) : int = // m^n
  repeat_f0f1 (n) where
{
  implement f0<> () = 1
  implement f1<> (x) = m * x
}
//
val () =
println! ("5*5 = ", times(5,5))
val () =
println! ("5^2 = ", power(5,2))
val () =
println! ("2^10 = ", power(2,10))
val () =
println! ("3^10 = ", power(3,10))
//
`;

 export default code;