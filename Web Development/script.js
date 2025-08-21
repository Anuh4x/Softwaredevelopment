let price= document.getElementById("price")

function discount(){
    price.innerText = "Rs. 1000"
}

let h1=document.getElementById("h1")

function change(){
    h1.style.padding="500"
    h1.style.justifyContent
    h1.style.scale50px
}

function setDarkTheme(){
    document.documentElement.style.setProperty('--bg-color', 'black')
    document.documentElement.style.setProperty('--bg-text', 'white')
}

function setLightTheme(){
    document.documentElement.style.setProperty('--bg-color', 'white')
    document.documentElement.style.setProperty('--bg-text', 'black')
}