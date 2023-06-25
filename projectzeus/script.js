// fleches gauche et droite
let leftNav = document.querySelector(".leftnav");
let rightNav = document.querySelector(".rightnav");

// boutons 1 et 2 et 3
let bouton1 = document.getElementById("bouton1");
let bouton2 = document.getElementById("bouton2");
let bouton3 = document.getElementById("bouton3");


// images
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

// liste image 
let imageList = [img1, img2, img3];




//à  quelle image est-on
let count = 0;

//première image est affichée.
imageList[count].classList.add("active");

//décompte
let temps = 5;

function showTime() {
    console.log(temps);
    temps--;

    if (temps < 0) {
        temps = 5
        // count
        if (count != imageList.length - 1) {
            imageList[count].classList.remove("active");
            count++;
            imageList[count].classList.add("active");
        } else if (count === imageList.length - 1) {
            imageList[count].classList.remove("active");
            count = 0;
            imageList[count].classList.add("active");
        }
    }
    setTimeout(showTime, 1000);
}

showTime();



leftNav.addEventListener("click", () => {
    if (count === 0) {
        imageList[count].classList.remove("active");
        count = imageList.length - 1;
        imageList[count].classList.add("active");
    } else {
        count--
        imageList[count].classList.add("active");
        imageList[count + 1].classList.remove("active");
    }
    console.log(count);


})

rightNav.addEventListener("click", () => {
    if (count === 2) {
        imageList[count].classList.remove("active");
        count = 0;
        imageList[count].classList.add("active");
    } else {
        count++
        imageList[count].classList.add("active");
        imageList[count - 1].classList.remove("active");
    }
    console.log(count);

})

bouton1.addEventListener("click", () => {
    imageList[count].classList.remove("active");
    count = 0;
    imageList[count].classList.add("active");

})

bouton2.addEventListener("click", () => {
    imageList[count].classList.remove("active");
    count = 1;
    imageList[count].classList.add("active");

})

bouton3.addEventListener("click", () => {
    imageList[count].classList.remove("active");
    count = 2;
    imageList[count].classList.add("active");
})