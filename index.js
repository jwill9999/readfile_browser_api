
//cache dom references
const input = document.getElementById('input');
const divElement = document.getElementById("myimg");



// readfile api create new object
let filereader = new FileReader();

// create a new image object
let image = new Image();


//event listeners
input.addEventListener('change', (e) => {
  //obtain file reference
  let file = e.target.files[0];
  //pass reference to the readfile api
  filereader.readAsDataURL(file);
});

filereader.addEventListener('load', (e) => {
  // on file load get reference to fileimage
  let fileImage = e.target.result;

  //add src url and bootstrap class img-responsive to image
  image.src = fileImage;
  image.className = "img-responsive";
});

image.addEventListener('load', (e) => {
  // append image to the dom
  divElement.appendChild(image);
});