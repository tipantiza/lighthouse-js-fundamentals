const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length){
  console.log(ingredients[i]);
  i++;
}
console.log('\n')

// Write a for loop that prints out the contents of ingredients:
for (var j = 0; j <ingredients.length; j++){
  console.log(ingredients[j]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log('\n')
for (let l = ingredients.length - 1; l >= 0; l--){
  console.log(ingredients[l])
}