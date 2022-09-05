const kol = document.querySelector('.container')
function kova() {
    kol.innerHTML = '';
    fetch('./Ferrari.json')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            data.forEach(element => {
                kol.innerHTML +=`
                <div class="card">
                <img src=${element.img} alt="img">
                <h3>name:${element.name}</h3>
                <p>Ult:${element.title}</p>
                <p>Age:${element.age}</p>
            </div>`
        })
        })



}

kova()