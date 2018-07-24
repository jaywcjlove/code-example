
const code = `// Demo code.

type foo<T> = int;
enum bar {
    some(int, foo<float>),
    none
}

fn check_crate(x: int) {
    let v = 10;
    match foo {
        1 ... 3 {
            print_foo();
            if x {
                blah().to_string();
            }
        }
        (x, y) { "bye" }
        _ { "hi" }
    }
}
`;

export default code;
