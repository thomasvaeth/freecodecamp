// Create a function that sums two arguments together.
// If only one argument is provided, return a function that expects one additional argument and will return the sum.
function add() {
  var args = Array.prototype.slice.call(arguments);
  if (args.length !== 2) {
    if (typeof args[0] !== 'number') return undefined;
    return function(a) {
      if (typeof a !== 'number') return undefined;
      return (a + args[0]);
    };
  } else {
    if (typeof args[1] !== "number") return undefined;
    return args[0] + args[1];
  }
}

add(2,3);