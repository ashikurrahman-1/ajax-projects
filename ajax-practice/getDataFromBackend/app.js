

async function getDataFromBackend() {

    try {

        // debugger;

        let data = document.getElementById('data')
        data.innerText = "Loading......."

        let URL = "https://jsonplaceholder.typicode.com/users";
        let fData = await fetch(URL);
        let res = await fData.json();

        data.innerText = JSON.stringify(res);
    }catch(error){
        let data = document.getElementById('data')
        data.innerText = "Something went wrong!"
        console.log(error)
    }
}
getDataFromBackend();