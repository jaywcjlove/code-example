const code = `.ob out1 out2 out3
--1--     -        wait     110000
.ilb in1 in0 wait ack nack
.symbolic state<3> state<2>;aaa bbb; # comment
`;

 export default code;