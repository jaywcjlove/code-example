const code = `begin:
TextWindow.Write("Enter a number: ")
num = TextWindow.ReadNumber()
remainder = Math.Remainder(num, 2)
If (remainder = 0) Then
 TextWindow.WriteLine("The number is Even")
Else
 TextWindow.WriteLine("The number is Odd")
EndIf
Goto begin`;

 export default code;