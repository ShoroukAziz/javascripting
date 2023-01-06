let pets =  ['cat', 'dog', 'rat'];

pets.forEach(
  function(item,index){
    pets[index] = item+'s';
  }
);
console.log(pets);