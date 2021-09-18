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

const shorten = (e) => {
    e.preventDefault();

    let link = document.getElementById('main_link').value
    // let shorten = document.getElementById('shorten').value
    console.log(link);
        fetch("https://capsulink.p.rapidapi.com/capsulate", {
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "api-key": "<Some API key>",
            "x-rapidapi-host": "capsulink.p.rapidapi.com",
            "x-rapidapi-key": "df588214aamshd01fad0b7fabe01p1eb880jsn93719d08f942"
        },
        "body": {
            "url": "https://github.com/officialdevking"
        }
    }).then(response => response.json())
    .then(data => console.log(data));
    
}

document.getElementById('shorten').addEventListener('click', shorten)