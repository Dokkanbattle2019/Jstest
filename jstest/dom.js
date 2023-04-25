const buttons = document.querySelectorAll("button")
function alertButton() {
    alert(button.id)
}




buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id)
    })
})