let hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', ()=>{
    document.getElementById('medium_nav').classList.add('medium_nav_active')
    document.getElementById('small_nav').classList.add('small_nav_active')
})

let cancel = document.querySelector('.cancel')

cancel.addEventListener('click', ()=>{
    document.getElementById('medium_nav').classList.remove('medium_nav_active')
    document.getElementById('small_nav').classList.remove('small_nav_active')
})



const link = document.getElementById('main_link');
const shorten = document.getElementById('shorten');
const output = document.getElementById('output');
let shortUrl = document.querySelector('.short_url');
let longUrl = document.querySelector('.long_url');

let copyText = null


shorten.addEventListener('click', () =>{
    
    const urlshorten = link.value;

    fetch(`https://api.shrtco.de/v2/shorten?url=${urlshorten}`, {
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {
        copyText = data.result.full_short_link; 
        shortUrl.innerHTML = copyText; 
        longUrl.innerHTML = data.result.original_link; 
        btnLoad.classList.remove('load')
        btnShorten.classList.remove('load_1')
        output.classList.add('output')        
        output.classList.remove('output_1')        
    });


    let btnLoad = document.querySelector('.buttonload')
    let btnShorten = document.querySelector('.shorten')
    // let output = document.querySelector('.output');

    if (urlshorten) {
        btnLoad.classList.add('load')
    }else{
        alert("You've not inputted any link to be shortened!!!")
    }

    if (urlshorten) {
        btnShorten.classList.add('load_1')
    }

})

const copy = document.getElementById('copy');


copy.addEventListener('click', ()=>{
    navigator.clipboard.writeText(copyText);
})
