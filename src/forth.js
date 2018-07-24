
const code = `\\ Insertion sort

: cell-  1 cells - ;

: insert ( start end -- start )
  dup @ >r ( r: v )
  begin
    2dup <
  while
    r@ over cell- @ <
  while
    cell-
    dup @ over cell+ !
  repeat then
  r> swap ! ;

: sort ( array len -- )
  1 ?do
    dup i cells + insert
  loop drop ;
`;

export default code;
