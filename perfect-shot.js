const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] 
const finalPosition = function (moves) {
 let coordinates = [0,0]
  for (const move of moves) {
    if (move === 'north') {
      coordinates[1] += 1;
    }
    else if (move === 'west'){
      coordinates[0] -= 1;
    }
    else if (move === 'south'){
      coordinates[1] -= 1;
    }
    else if (move === 'east') {
      coordinates[0] += 1;
    }
  }
  return coordinates;
}
console.log(finalPosition(moves));
