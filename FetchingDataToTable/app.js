

function getData(){
    let tbody = document.getElementById('tableBody');

    axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
        let posts = res.data;
        console.log(posts)

        posts.slice(0, 10).map((post)=>{
            tbody.innerHTML = tbody.innerHTML + `
            <tr>
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td>${post.body}</td>
            </tr>
            `

        })
    })
}

window.onload = getData;