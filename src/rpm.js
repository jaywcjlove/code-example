
const code = `-------------------------------------------------------------------
Tue Oct 18 13:58:40 UTC 2011 - misterx@example.com

- Update to r60.3
- Fixes bug in the reflect package
  * disallow Interface method on Value obtained via unexported name

-------------------------------------------------------------------
Thu Oct  6 08:14:24 UTC 2011 - misterx@example.com

- Update to r60.2
- Fixes memory leak in certain map types

-------------------------------------------------------------------
Wed Oct  5 14:34:10 UTC 2011 - misterx@example.com

- Tweaks for gdb debugging
- go.spec changes:
  - move %go_arch definition to %prep section
  - pass correct location of go specific gdb pretty printer and
    functions to cpp as HOST_EXTRA_CFLAGS macro
  - install go gdb functions & printer
- gdb-printer.patch
  - patch linker (src/cmd/ld/dwarf.c) to emit correct location of go
    gdb functions and pretty printer

`;

export default code;
