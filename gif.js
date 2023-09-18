let submitBtn = document.getElementById('submit-btn')

let generateGif = () => {

    // display loader until gif load
    let loader = document.querySelector('.loader')
    loader.style.display = "block"
    document.querySelector('.wrapper').style.display = "none";

// Get search value (default => laugh)

let q = document.getElementById('search-box').value;
// we need 10 gifs to be displayed in result

let gifCount = 10;
// API URL =

let finalURL = `https://api.giphy.com/v1/gifs/search?api_key=4xi8RsjNXKNKpxXKQlYSXkrxiTVMLLeD&q=${q}&limit=25&offset=0&rating=r&lang=en&bundle=messaging_non_clips`

document.querySelector('.wrapper').innerHTML = "";

// Make a call to API 

fetch(finalURL).then(resp => resp.json())
.then((info) =>  {

    let gifsData = info.data
    gifsData.forEach((gif) => {
        // Generate cards for every gif

        let container = document.createElement('div')
        container.classList.add('container')
        let iframe = document.createElement('img')
        console.log("this it", gif)
        iframe.setAttribute('src', gif.images.downsized_medium.url);
        iframe.onload = () => {
            // if iframes has loaded reduce count when gif loads

            gifCount--;
            if(gifCount == 0) {
                // if all gifs load then hid loader and display gifs
                loader.style.display = "none"
                document.querySelector('.wrapper')
                display = 'grid'
            }
        }
        container.append(iframe)
    })

})


}

// Generate GIFS on screen load or when user clucks submit

submitBtn.addEventListener('click', generateGif)
window.addEventListener('load', generateGif)




