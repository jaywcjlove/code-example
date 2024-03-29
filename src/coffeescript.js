const code = `"""
A CoffeeScript sample.
"""

class Vehicle
  constructor: (@name) =>
  
  drive: () =>
    alert "Conducting #{@name}"

class Car extends Vehicle
  drive: () =>
    alert "Driving #{@name}"

c = new Car "Brandie"

while notAtDestination()
  c.drive()

raceVehicles = (new Car for i in [1..100])

startRace = (vehicles) -> [vehicle.drive() for vehicle in vehicles]

fancyRegExp = ///
  (\d+)  # numbers
  (\w*)  # letters
  $    # the end
///
`;

 export default code;