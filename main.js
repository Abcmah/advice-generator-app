let advices =[
    "if you wanna go , just go",
    "quit when ever their is no something to believe on",
    "If you can not explain it simply the you do not know it at all"
]
let output = document.querySelector("#output")
let ido = document.querySelector("#id")
const main=()=>{
    let no = Math.floor(Math.random()*117) 
    advicesFromServer(no);
}
const  advicesFromServer=async(id)=>{
    let res = await fetch(`https://api.adviceslip.com/advice/${id}`)
    let advices =await res.json()
    console.log(advices.slip.advice)
    console.log(advices)
    render(advices.slip.advice,id)
}

const render=(advice,id)=>{
    console.log(id)
    ido.innerHTML=id;
    output.innerHTML=advice
}