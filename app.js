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

shorten.addEventListener('click', ()=>{
    let urlshorten = link.value;

        fetch("https://url-shortener9.p.rapidapi.com/", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "url-shortener9.p.rapidapi.com",
            "x-rapidapi-key": "df588214aamshd01fad0b7fabe01p1eb880jsn93719d08f942"
        }
    })
    .then(response => {
        response.json();
        console.log(response);  
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    });
})






// const shorten = (e) => {
//     e.preventDefault();

//     // let data = new FormData()
//     // data.append('URL', 'https://cloudinary.com/console/c-661efecee36b67d1c22af4f127fc0e/media_library/folders/bdfa10a597891de6caf2759ef24475e17d')

//     let link = document.getElementById('main_link').value
//     // let shorten = document.getElementById('shorten').value
//     console.log(link);
//         fetch("https://url-shortener-service.p.rapidapi.com/shorten", {
//         "method": "POST",
//         "headers": {
//             "content-type": "application/x-www-form-urlencoded",
//             "x-rapidapi-host": "url-shortener-service.p.rapidapi.com",
//             "x-rapidapi-key": "df588214aamshd01fad0b7fabe01p1eb880jsn93719d08f942"
//         },
//         "body": {
//             "url": "https:link"
//         }
//     })
//     .then(response => {
//         response.json();
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.error(err);
//     });
// }

// document.getElementById('shorten').addEventListener('click', shorten)