async function buscarInfoBack(){
    const main = document.querySelector("main")

    const persons = await fetch("http://localhost:3333/").then((response) => response.json())
    persons.map((person) =>{
        main.innerHTML += `
            <section id="${person.id}">
                <h2>Nome: ${person.name}</h2>
                <h3>Apelido: ${person.nickname}</h3>
                <h3>E-mail: ${person.email}</h3>
            </section>
            <hr>
        `
    })
}

buscarInfoBack()