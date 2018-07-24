
const code = `LIBRARY ieee;
USE ieee.std_logic_1164.ALL;
USE ieee.numeric_std.ALL;

ENTITY tb IS
END tb;

ARCHITECTURE behavior OF tb IS
   --Inputs
   signal a : unsigned(2 downto 0) := (others => '0');
   signal b : unsigned(2 downto 0) := (others => '0');
    --Outputs
   signal a_eq_b : std_logic;
   signal a_le_b : std_logic;
   signal a_gt_b : std_logic;

    signal i,j : integer;

BEGIN

    -- Instantiate the Unit Under Test (UUT)
   uut: entity work.comparator PORT MAP (
          a => a,
          b => b,
          a_eq_b => a_eq_b,
          a_le_b => a_le_b,
          a_gt_b => a_gt_b
        );

   -- Stimulus process
   stim_proc: process
   begin
        for i in 0 to 8 loop
            for j in 0 to 8 loop
                a <= to_unsigned(i,3); --integer to unsigned type conversion
                b <= to_unsigned(j,3);
                wait for 10 ns;
            end loop;
        end loop;
   end process;

END;

`;

export default code;
