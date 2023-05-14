const container = document.getElementById("container")
const forme = document.getElementById("forme")
let bouton = document.getElementById("bouton")

let remove = document.createElement("button")
remove.setAttribute("type", "button")
remove.setAttribute("class", "remove")
let boutonsRemove = document.querySelectorAll(".remove")

let toggle = document.createElement("button")
toggle.setAttribute("type", "button")
toggle.setAttribute("id", "toggle")
toggle.setAttribute("class", "toggle")
toggle.textContent = "Read / Not Read"
let boutonsToggle = document.querySelectorAll(".toggle")

let form = document.createElement("form")
let input1 = document.createElement("input")
input1.setAttribute("type", "text")
input1.setAttribute("id", "nom")
let label1 = document.createElement("label")
label1.setAttribute("for", "name")
label1.textContent = "Nom de votre livre"
let input2 = document.createElement("input")
input2.setAttribute("type", "text")
input2.setAttribute("id", "auteur")
let label2 = document.createElement("label")
label2.setAttribute("for", "auteur")
label2.textContent = "Nom de l'auteur"
let label3 = document.createElement("label")
label3.setAttribute("for", "read")
label3.textContent = "Lu ou Non Lu"
let input3 = document.createElement("input")
input3.setAttribute("type", "checkbox")
input3.setAttribute("id", "read")
let submit = document.createElement("input")
submit.setAttribute("type", "submit")

let library = []

function Book(name, author, read) {
    this.name = "Name: " + name
    this.author = "Author: " + author
    this.read = read
}

function addBook(book) {
    library.push(book)
    addToggleEvent()
}

function showBook(liste) {
    for (book of liste) {
        let p = document.createElement("p")
        let content = ""
        if (book.read == "Oui") {
            p.classList.add("alreadyRead")
        } else {
            p.classList.add("notRead")
        }
        for (prop in book) {
            if (prop !== "read") {
                content += book[prop] + "<br>"
            }
        }
        p.innerHTML = content
        container.appendChild(p)
    }
}

function addToggleEvent() {
    const toggles = document.querySelectorAll(".toggle");
    toggles.forEach((toggle) => {
        toggle.addEventListener("click", () => {
            if (toggle.parentNode.classList.contains("alreadyRead")) {
                toggle.parentNode.classList.remove("alreadyRead");
                toggle.parentNode.classList.add("notRead");
            } else if (toggle.parentNode.classList.contains("notRead")) {
                toggle.parentNode.classList.remove("notRead");
                toggle.parentNode.classList.add("alreadyRead");
            }
        });
    });
}

bouton.addEventListener("click", () => {
    forme.appendChild(form)
    form.appendChild(label1)
    form.appendChild(input1)
    form.appendChild(label2)
    form.appendChild(input2)
    form.appendChild(label3)
    form.appendChild(input3)
    form.appendChild(submit)
})


submit.addEventListener("click", function (event) {
    let remove = document.createElement("button")
    remove.setAttribute("type", "button")
    remove.setAttribute("class", "remove")
    remove.textContent = "remove"
    let toggle = document.createElement("button")
    toggle.setAttribute("type", "button")
    toggle.setAttribute("id", "toggle")
    toggle.textContent = "Read / Not Read"
    toggle.setAttribute("class", "toggle")

    event.preventDefault()

    let nom = input1.value
    let auteur = input2.value
    let lu = "Non"
    if (input3.checked) {
        lu = "Oui"
    }

    let newBook = new Book(nom, auteur, lu)

    addBook(newBook)
    showBook(library)

    library = []

    container.lastChild.appendChild(remove)
    container.lastChild.appendChild(toggle)

    let boutonsRemove = document.querySelectorAll(".remove")
    boutonsRemove.forEach(sup => {
        sup.addEventListener("click", () => {
            sup.parentNode.remove()
        })
    })

    let boutonsToggle = document.querySelectorAll(".toggle")
    addToggleEvent()
})

//addBook(book1)
//addBook(book2)
//addBook(book3)


library = []
