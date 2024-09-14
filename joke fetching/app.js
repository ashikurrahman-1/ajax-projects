

function getJoke(){
    let config = {
        headers:  {
            "accept": "application/json"
        }
    }
    
    axios.get('https://icanhazdadjoke.com', config).then((res)=>{
        document.getElementById('joke').innerHTML = res.data.joke;
    })

}

window.onload = getJoke;