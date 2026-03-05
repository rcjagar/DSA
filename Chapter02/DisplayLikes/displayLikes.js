function displayLikes(names){
   let length = names.length;
   if(length === 0){
      return "no one has liked it";
   }
   if(length === 1){
      return `${names[0]} has liked it`
   }
   if(length === 2){
      return `${names[0]}, ${names[1]} liked it`
   }
   if(length === 3){
      return `${names[0]}, ${names[1]}, ${names[2]} has liked it`
   }
   else {
      return `${names[0]}, ${names[1]} and ${length - 2} others liked it`
   }
}

module.exports = displayLikes;