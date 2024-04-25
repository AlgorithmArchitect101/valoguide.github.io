var imageVisibility = {}; // Object to track visibility of multiple images

// Function to toggle visibility of the specified image
function agentImage(imageId) {
    var img = document.getElementById(imageId);
    if (imageVisibility[imageId]) {
        img.style.display = "none"; // Hide image if it's currently visible
    } else {
        img.style.display = "block"; // Show image if it's currently hidden
        // Hide all other images
        for (var id in imageVisibility) {
            if (id !== imageId && imageVisibility[id]) {
                var otherImg = document.getElementById(id);
                otherImg.style.display = "none";
                imageVisibility[id] = false;
            }
        }
    }
    imageVisibility[imageId] = !imageVisibility[imageId]; // Toggle the visibility status
} 
var imageVisibility1 = {}; // Object to track visibility of multiple images

// Function to toggle visibility of the specified image
function mapImage(imageId) {
    var img = document.getElementById(imageId);
    if (imageVisibility1[imageId]) {
        img.style.display = "none"; // Hide image if it's currently visible
    } else {
        img.style.display = "block"; // Show image if it's currently hidden
        // Hide all other images
        for (var id in imageVisibility1) {
            if (id !== imageId && imageVisibility1[id]) {
                var otherImg = document.getElementById(id);
                otherImg.style.display = "none";
                imageVisibility1[id] = false;
            }
        }
    }
    imageVisibility1[imageId] = !imageVisibility1[imageId]; // Toggle the visibility status
} 
var imageVisibility2 = {};

function allImage(className) {
    var images = document.querySelectorAll(className); // Sélectionner toutes les images
    for (var i = 0; i < images.length; i++) {
        var imageId = images[i].id; // Obtenir l'identifiant de l'image

        if (imageVisibility2[imageId]) {
            images[i].style.display = "none"; // Cacher l'image si elle est actuellement visible
        } else {
            images[i].style.display = "block"; // Afficher l'image si elle est actuellement cachée
        }

        // Inverser l'état de visibilité de l'image
        imageVisibility2[imageId] = !imageVisibility2[imageId];
    }
}
