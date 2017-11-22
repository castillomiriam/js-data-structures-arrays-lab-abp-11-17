const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
 drivers.push("Ralph");
}

function destructivelyPrependDriver(name) {
 drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop("Ralph");
}

function destructivelyFirstDriver(name) {
  drivers.shift("Bob");
}
