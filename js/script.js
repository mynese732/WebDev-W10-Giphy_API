console.log("script.js loaded");

const gifContainer = document.querySelector("#gif-container"); // links with the output div in index.html
const button = document.querySelector("#fetch-gif-btn"); // links with the button in index.html
let imageUrls = []; // array to hold the gif urls

async function getGif(){
    let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=8Daqf5MnR1AMZVZgTqcdHtxRHmZDkLNK&q=cat&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";
    const response = await fetch(endpoint);
    const json = await response.json();
    imageUrls = json.data.map(gif => gif.images.original.url); // pull out just the URLs
    console.log(imageUrls);
}

button.addEventListener("click", async function() {   
    await getGif(); // wait for the data before displaying
    gifContainer.innerHTML = ""; // clear old GIFs so clicks don't stack

    // loops through the array of URLs and adds them to the DOM
    for (let i = 0; i < imageUrls.length; i++) {
        gifContainer.innerHTML += `<img src="${imageUrls[i]}" class="col-3 mb-3">`;
    }
});
