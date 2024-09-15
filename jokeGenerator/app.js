

function jokeGenerate(){
    let joke = document.getElementById('joke')
    let punchline = document.getElementById("punchline")
    let btn = document.getElementById('btn')


    axios.get('https://official-joke-api.appspot.com/random_joke').then((res)=>{
        let jokeData = res.data;

        joke.innerHTML = jokeData.setup;
        punchline.innerHTML = jokeData.punchline + "😂😂🤣";

    })
}