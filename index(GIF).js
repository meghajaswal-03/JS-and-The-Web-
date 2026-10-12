// look back at the <readme.md> file for some hints //
// working API key //
const giphyApiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

const generateGiftButton = document.getElementById("generate-gift");
const clearGifButton = document.getElementById("clear-gif");

const display = document.getElementById("gif-display");
generateGiftButton.addEventListener("click", generateGif);
clearGifButton.addEventListener("click", clearGif);

async function grabGifFromAPI(query) {
    const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: { q: query, api_key: giphyApiKey, limit: 10 },
  });
  console.log(response.data);
  return response.data.data.map((val) => val.images.fixed_height.url);
}

function getInputData() {
    return document.getElementById("gif-input").value.trim();
}

async function generateGif(e) {
    e.preventDefault();
    const term = getInputData();
    if (!term) return;
    try {
        const urls = await grabGifFromAPI(term);

        if (urls.length === 0){
            alert("No gifs found for that search term.");}
        if(!display.innerHTML){
        display.innerHTML = "<p>No gifs found for that search term.</p>";
        }
    }  
}

function clearGif() {
    display.innerHTML = " GIF HERE";
}