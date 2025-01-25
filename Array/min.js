let fruites = ["Apple", "Banaa", "Orange"];

let isPresent = fruites.includes("Banana");
if (isPresent) {
  let updateIndex = fruites.indexOf("Banana");
  fruites.splice(updateIndex, 1, "Hello");
  console.log(fruites);
} else {
  console.log("Banana Not Found");
}
