const init = () =>{
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit',(event)=>{
        event.preventDefault();
        const input = document.querySelector('#input#searchByID');

        fetch(`http://localhost:3000/movies${input.value}`)
        .then((response)=>response.json())
        .then((data)=>{
            const title = document.querySelector('sectionmovieDetails h4');
            const summary = document.querySelector('sectionmovieDetails p');

            title.innerText = data.title;
            summary.innerText = data.summary;
        })

    })

}

document.addEventListener('DOMContentLoaded',init);