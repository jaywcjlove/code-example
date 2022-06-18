const code = ` MODULE HelloWorld EXPORTS Main;
 FROM IO IMPORT Put;
 BEGIN
   Put("Hello World\n")
 END HelloWorld.
`;

 export default code;