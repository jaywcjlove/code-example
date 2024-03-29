const code = `# Elixir is a dynamic, functional language for building scalable
# and maintainable applications. Learn more: https://elixir-lang.org

"Elixir" |> String.graphemes() |> Enum.frequencies()
#=> %{"E" => 1, "i" => 2, "l" => 1, "r" => 1, "x" => 1}


### Scalability ###

# All Elixir code runs inside lightweight threads of execution (called processes)
# that are isolated and exchange information via messages:

current_process = self()

# Spawn an Elixir process (not an operating system one!)
spawn_link(fn ->
  send(current_process, {:msg, "hello world"})
end)

# Block until the message is received
receive do
  {:msg, contents} -> IO.puts(contents)
end


### Fault-tolerance ###

# To cope with failures, Elixir provides supervisors which describe
# how to restart parts of your system when things go awry, going back
# to a known initial state that is guaranteed to work:

children = [
  TCP.Pool,
  {TCP.Acceptor, port: 4040}
]

Supervisor.start_link(children, strategy: :one_for_one)


### Functional programming ###

# Functional programming promotes a coding style that helps
# developers write code that is short, concise, and maintainable.
# One prominent example is pattern matching:

%User{name: name, age: age} = User.get("John Doe")
name #=> "John Doe"

# When mixed with guards, pattern matching allows us to elegantly
# match and assert specific conditions for some code to execute:

def drive(%User{age: age}) when age >= 16 do
  # Code that drives a car
end

drive(User.get("John Doe"))
#=> Fails if the user is under 16


### Extensibility and DSLs ###

# Elixir has been designed to be extensible, letting developers
# naturally extend the language to particular domains,
# in order to increase their productivity.

defmodule MathTest do
  use ExUnit.Case, async: true

  test "can add two numbers" do
    assert 1 + 1 == 2
  end
end


### Erlang compatible ###

# An Elixir programmer can invoke any Erlang function with no runtime cost:

:crypto.hash(:md5, "Using crypto from Erlang OTP")
#=> <<192, 223, 75, 115, ...>>
`;

 export default code;