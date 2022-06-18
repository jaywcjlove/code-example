const code = `// File : tb_top.sv
module tb_top ();

  reg clk;
  reg resetn;
  reg d;
  wire q;

  // Instantiate the design
  d_ff  d_ff0 (  .clk (clk),
               .resetn (resetn),
               .d (d),
               .q (q));

  // Create a clock
  always #10 clk <= ~clk;

  initial begin
    resetn <= 0;
    d <= 0;

    #10 resetn <= 1;
    #5      d <= 1;
    #8      d <= 0;
    #2      d <= 1;
    #10     d <= 0;
  end
endmodule
`;

 export default code;