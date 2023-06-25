let img = document.getElementById("hello");
async function getCats() {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=mc5GoZyI46wnAGSuIIu37GcKXG7fikCc&s=cats', { mode: 'cors' })
    const catData = await response.json();
    img.src = catData.data.images.original.url;

}

getCats();

function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        });
}

loadJson('https://javascript.info/no-such-user.json')
    .catch(alert); // Error: 404

async function loadJson(url) {
    try {
        let response = await fetch(url);
        if (response.status == 200) {
            let data = await response.json();
            return data;

        }
        //
        if 
    } catch (err) {
        alert(err);

    }

}

loadJson('https://javascript.info/no-such-user.json')
    .catch(alert); // Error: 404