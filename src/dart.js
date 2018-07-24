
const code = `import 'dart:math' show Random;

void main() {
  print(new Die(n: 12).roll());
}

// Define a class.
class Die {
  // Define a class variable.
  static Random shaker = new Random();

  // Define instance variables.
  int sides, value;

  // Define a method using shorthand syntax.
  String toString() => '$value';

  // Define a constructor.
  Die({int n: 6}) {
    if (4 <= n && n <= 20) {
      sides = n;
    } else {
      // Support for errors and exceptions.
      throw new ArgumentError(/* */);
    }
  }

  // Define an instance method.
  int roll() {
    return value = shaker.nextInt(sides) + 1;
  }
}
`;

export default code;
