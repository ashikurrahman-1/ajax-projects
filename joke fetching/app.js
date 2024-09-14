

function getJoke(){
    let config = {
        headers:  {
            "accept": "application/json"
        }
    }
    
    axios.get('https://icanhazdadjoke.com', config).then((res)=>{
        document.getElementById('joke').innerHTML = res.data.joke;
    }).catch((err)=>{
        console.log(err);
        document.getElementById('joke').innerHTML = "Something Went wrong."
    })

}

window.onload = getJoke;