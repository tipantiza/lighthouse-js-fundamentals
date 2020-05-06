const raining = false;
const cold = true;

if(raining)
{
  console.log("Don't forget your umbrella!");
}
if (cold)
{
  console.log("Make sure to pick out a scarf!");
}


const temp = 14;

if (temp<0)
{
  console.log("Make sure to pick out a scarf!");
}
else if(temp<15)
{
  console.log("Short sleeves wont cut it!");
}

else 
{
  console.log("Short sleeves are fine.")
}

console.log("Now your're ready to go outside!")


const isCitizen = true; 
const age = 26;

if (isCitizen && age > 18)
{
  console.log("You are eligible to vote.");
}
if (temp <-40 || temp>40){
  console.log("Maybe going outside isn't such a great idea…");
}

if (!raining){
  console.log("Leave your umbrella at home!")
}
