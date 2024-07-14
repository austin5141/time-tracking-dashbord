
const daily = document.querySelector("#daily")
const weekly = document.querySelector("#weekly")
const monthly = document.querySelector("#monthly")

let setting = "daily"

// Function to render the page
function render(object) {

    let titles = document.querySelectorAll('.title')
    let curr = document.querySelectorAll('.curr')
    let prev = document.querySelectorAll('.previous-hours')
    let last = document.querySelectorAll('.prev')
    
    switch(setting) {
        case "daily":
            daily.classList.add('selected')
            weekly.classList.remove('selected')
            monthly.classList.remove('selected')
            for (i = 0; i < titles.length; i++) {
                titles[i].innerText = object[i].title
                if (object[i].timeframes.daily.current == 1) {
                    curr[i].innerText = object[i].timeframes.daily.current + "hr"
                } else {
                    curr[i].innerText = object[i].timeframes.daily.current + "hrs"
                }
                if (object[i].timeframes.daily.previous == 1) {
                    prev[i].innerText = `Previous - ${object[i].timeframes.daily.previous} hr`
                } else {
                    prev[i].innerText = `Previous - ${object[i].timeframes.daily.previous} hrs`
                }
            };
            break;

        case "weekly":
            daily.classList.remove('selected')
            weekly.classList.add('selected')
            monthly.classList.remove('selected')
            for (i = 0; i < titles.length; i++) {
                titles[i].innerText = object[i].title
                if (object[i].timeframes.weekly.current == 1) {
                    curr[i].innerText = + object[i].timeframes.weekly.current + "hr"
                } else {
                    curr[i].innerText = object[i].timeframes.weekly.current + "hrs"
                }
                
                if (object[i].timeframes.weekly.previous == 1) {
                    prev[i].innerText = `Last Week - ${object[i].timeframes.weekly.previous} hr`
                } else {
                    prev[i].innerText = `Last Week - ${object[i].timeframes.weekly.previous} hrs`
                }
            };
            break;

        case "monthly":
            daily.classList.remove('selected')
            weekly.classList.remove('selected')
            monthly.classList.add('selected')
            for (i = 0; i < titles.length; i++) {
                titles[i].innerText = object[i].title
                if (object[i].timeframes.monthly.current == 1) {
                    curr[i].innerText = object[i].timeframes.monthly.current + "hr"
                } else {
                    curr[i].innerText = object[i].timeframes.monthly.current + "hrs"
                }
                
                if (object[i].timeframes.monthly.previous == 1) {
                    prev[i].innerText = `Last Month - ${object[i].timeframes.monthly.previous} hr`
                } else {
                    prev[i].innerText = `Last Month - ${object[i].timeframes.monthly.previous} hrs`
                }
            };
            break;
    }
}

// Function to fetch the Json and then display it on screen
function fetchJson() {
    fetch('data.json')
    .then(response => response.json())
    .then(object => {
        render(object)
    })
}

// Initializes the page
fetchJson()

// Handles the list of buttons
daily.addEventListener('click', function() {
    setting = "daily"
    fetchJson()
})

weekly.addEventListener('click', function() {
    setting = "weekly"
    fetchJson()
})

monthly.addEventListener('click', function() {
    setting = "monthly"
    fetchJson()
})
