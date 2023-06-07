let names = ["Camilla", "Ignace", "Alizée", "Lucie", "Louis", "Noah", 
"Florentina", "Giorgi", "Leslie", "Francesca", "Antoine Soto", "John", 
"John", "Antoine Stru", "Glaucielle", "Aziza", "Zuzana", "Athi", "Oana-Alexandra",
"Raad", "William", "Jean-Louis", "Prince", "Adam", "Safae", "Walid", "Leila"];


let article = document.createElement("article");
let body = document.querySelector("body");

let randomBackgroundColor = () => {
    let r = Math.floor(Math.random() *256);
    let g = Math.floor(Math.random() *256);
    let b = Math.floor(Math.random() *256);

    let randomColor = "rgb(" + r + "," + g + "," + b + ")";
    return randomColor;
}


// Check if a color is dark or light
function isColorDark(color) {
    // Convert the color string to RGB values
    const rgbValues = color.match(/\d+/g);
    const colorR = parseInt(rgbValues[0]);
    const colorG = parseInt(rgbValues[1]);
    const colorB = parseInt(rgbValues[2]);
  
    // Calculate the relative luminance
    const luminance = (0.299 * colorR + 0.587 * colorG + 0.114 * colorB) / 255;

    return luminance < 0.5;

  }
  // Check if the relative luminance indicates a dark color
  const generatedColor = randomBackgroundColor();
  const section = document.querySelectorAll("section");
  
  


names.sort(() => Math.random() - 0.5);


for (let i = 0; i < names.length; i++) {
    let section = document.createElement("section");
    article.appendChild(section);
    section.textContent = names[i];
    section.style.backgroundColor = randomBackgroundColor();
  
    if (isColorDark(section.style.backgroundColor)) {
      console.log("The generated color is dark");
      section.style.color = "white";
    } else {
      console.log("The generated color is light");
      section.style.color = "black";
    }
  }


document.body.appendChild(article);
