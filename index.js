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

function destructivelyRemoveFirstDriver(name) {
  drivers.shift("Bob");
}
