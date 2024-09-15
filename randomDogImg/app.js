

function dogImg(){
    let btn = document.getElementById('btn')

    axios.get("https://dog.ceo/api/breeds/image/random").then((res)=>{
        let data = res.data.message;

        let img = document.getElementById('img')
        img.src = data;
    })
}

window.onload = dogImg;