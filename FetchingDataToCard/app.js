

function dataToCard() {
    let row = document.getElementById('cardRow');

    axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => {
        let data = res.data;

        data.slice(0, 12).map((post)=>{
            row.innerHTML = row.innerHTML + `
                <div class="col g-3">
                    <div class="card">
                        <img src="${post.url}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            `
        })
    })
}

window.onload = dataToCard