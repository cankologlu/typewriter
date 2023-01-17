let sentence = "hello there from lighthouse";
sentence += "\n"
var timer = 0;


for (const char of sentence) {
  timer += 50
  setTimeout(() => {process.stdout.write(char)}, timer);
  //console.log("\n")
  ;
};