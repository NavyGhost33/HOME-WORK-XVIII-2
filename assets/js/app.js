let cubeLength = prompt("Indicate the length of the edge of the cube (cm.)");
console.log(cubeLength);

let cubeVolume = cubeLength * cubeLength * cubeLength;
console.log(cubeVolume);
document.write("Cube volume = " + cubeVolume + " cm.");

let faceArea = cubeLength * cubeLength;
console.log(faceArea);
document.write("Cube face area = " + faceArea + " cm.");