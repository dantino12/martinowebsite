var container = document.querySelector('.parallax-container');
var image = document.querySelector('.parallax-image');

container.addEventListener('mousemove', function(event) {
  var containerRect = container.getBoundingClientRect();
  var mouseX = event.clientX - containerRect.left;
  var mouseY = event.clientY - containerRect.top;

  var imageRect = image.getBoundingClientRect();
  var imageCenterX = containerRect.width / 2;
  var imageCenterY = containerRect.height / 2;

  var maxRotation = 40; // Maximum rotation angle in degrees (increased for a more dramatic effect)

  // Calculate rotation angles based on mouse position
  var rotationX = (mouseY - imageCenterY) / containerRect.height * maxRotation;
  var rotationY = (mouseX - imageCenterX) / containerRect.width * maxRotation;

  // Adjust rotation angles to create the parallax effect
  rotationX = Math.max(-maxRotation, Math.min(maxRotation, rotationX));
  rotationY = Math.max(-maxRotation, Math.min(maxRotation, rotationY));

  image.style.transform = 'rotateX(' + rotationX + 'deg) rotateY(' + rotationY + 'deg)';
});

container.addEventListener('mouseout', function() {
  image.style.transform = 'none'; // Reset the transformation when cursor is not hovering
});

// function changeImage(imageUrl) {
//     const parallaxImage = document.querySelector('.parallax-image');
//     parallaxImage.src = 'martino_iconLogo_color.png';
// }