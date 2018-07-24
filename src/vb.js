
const code = `Class rocket
  Private quality as Double
  Public Sub launch() as String
    If quality > 0.8
      launch = "Successful"
    Else
      launch = "Failed"
    End If
  End sub
End class

`;

export default code;
