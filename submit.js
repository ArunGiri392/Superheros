let superHeros = [];


fetch("https://raw.githubusercontent.com/bpeddapudi/sampleJson/main/superhero.json")
       .then(response =>{
          return response.json();
        })

       .then (data =>{
           superHeros = data;
           
        //    console.log(typeof(superHeros));
        //    console.log(typeof(data));
           renderdata(superHeros);
        //    console.log(superHeros);
        //    console.log(superHeros);
        //    name();
        //    console.log(data);    
        });

// console.log(superHeros);
const searchInput = document.querySelector('#btn-search');
    searchInput.addEventListener('click',()=>{
        // const data = document.querySelector('.form-control')
        // console.log(data.value);
        // console.log(superHeros);
        let filteredList = filterByName();
        renderdata(filteredList);
        
    })

function filterByName(){
    let userInput = document.querySelector('.form-control').value;
    let filterarray = [];
    if (userInput){
        // console.log(true);
        superHeros.forEach(hero=>{
            // console.log(hero.name);
            if(hero.name.toLowerCase().startsWith(userInput.toLowerCase())){
                filterarray.push(hero);
            }
        });
        // console.log(filterarray);
        return filterarray;
    }

}

function renderdata(data){
    // console.log(superHeros);
    let html = '';
    data.forEach(hero=>{
        let htmlSegment = `<div class="col">
        <div class="card">
            <img src="${hero.images.sm}"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${hero.name}</h5>
                <p class="card-text">${hero.work.occupation}</p>
            </div>
        </div>
    </div>`;
        html += htmlSegment;

    });
    let container = document.querySelector('#superhero-grid');
    container.innerHTML = html;
    

}