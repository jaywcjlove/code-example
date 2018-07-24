
const code = `;; Example IDL code
FUNCTION mean_and_stddev,array
  ;; This program reads in an array of numbers
  ;; and returns a structure containing the
  ;; average and standard deviation

  ave = 0.0
  count = 0.0

  for i=0,N_ELEMENTS(array)-1 do begin
      ave = ave + array[i]
      count = count + 1
  endfor
  
  ave = ave/count

  std = stddev(array)  

  return, {average:ave,std:std}

END

    
`;

export default code;
