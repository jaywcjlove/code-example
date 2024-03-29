const code = `import material/material;

export {
  demoMakeHelloWorld(onClose : () -> void) -> Material;
}

demoMakeHelloWorld(onClose : () -> void) -> Material {
  MCenter(
    MLines2(
      MText("Hello, world!", []),
      MTextButton("CLOSE", onClose, [], [])
    )
  );
}
`;

 export default code;