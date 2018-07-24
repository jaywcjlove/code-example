
const code = `// Literals
1'b0
1'bx
1'bz
16'hDC78
'hdeadbeef
'b0011xxzz
1234
32'd5678
3.4e6
-128.7

// Macro definition
\`define BUS_WIDTH = 8;

// Module definition
module block(
  input                   clk,
  input                   rst_n,
  input  [\`BUS_WIDTH-1:0] data_in,
  output [\`BUS_WIDTH-1:0] data_out
);
  
  always @(posedge clk or negedge rst_n) begin

    if (~rst_n) begin
      data_out <= 8'b0;
    end else begin
      data_out <= data_in;
    end
    
    if (~rst_n)
      data_out <= 8'b0;
    else
      data_out <= data_in;
    
    if (~rst_n)
      begin
        data_out <= 8'b0;
      end
    else
      begin
        data_out <= data_in;
      end

  end
  
endmodule

// Class definition
class test;

  /**
   * Sum two integers
   */
  function int sum(int a, int b);
    int result = a + b;
    string msg = $sformatf("%d + %d = %d", a, b, result);
    $display(msg);
    return result;
  endfunction
  
  task delay(int num_cycles);
    repeat(num_cycles) #1;
  endtask
  
endclass


`;

export default code;
