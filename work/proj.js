function like(names){
 arr = names.length;
 console.log(names);
 if (arr == 0){
  console.log("no one likes this");
 } else if (arr == 1){
    console.log(names[0],"likes this");
 } else if(arr == 2){
  console.log(names[0],"and",names[1],"like this");
 } else if (arr == 3){
  console.log(names[0],",",names[1],"and",names[2],"like this");
 } else {
  let remain = arr-2;
  console.log(names[0],",",names[1],"and",remain," others like this");
 } 
}

like(["Yaya","Paul","Mark","Peter","John"]);