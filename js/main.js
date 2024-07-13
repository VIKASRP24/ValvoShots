const mobileSearchForm = document.querySelector('#mobileSearchForm');

function openMobileMenu(){
    document.querySelector('.mobileMenu').classList.add('mmOpen');
}

function closeMobileMenu(){
    document.querySelector('.mobileMenu').classList.remove('mmOpen');
}

function searchMovie(input){
    let searchText = input.value.toLowerCase();
    let movieSection = document.querySelector('.movieSection').children;
    let br=0;
    for (let i = 0; i < movieSection.length; i++) {
        let movieName = movieSection[i].children[1].children[0].innerHTML.toLowerCase();
        if(movieName.includes(searchText)){
            movieSection[i].classList.remove('hidden');
        }else{
            br++;
            movieSection[i].classList.add('hidden');
        }
    }
    if(br < movieSection.length){
        document.querySelector('.movieSection').classList.remove('hidden');
        document.querySelector('.noMoviesFound').classList.add('hidden');
    }else{
        document.querySelector('#nmfText').innerHTML=searchText;
        document.querySelector('.movieSection').classList.add('hidden');
        document.querySelector('.noMoviesFound').classList.remove('hidden');
    }
}

if(mobileSearchForm != undefined){
    mobileSearchForm.onsubmit = (e) => {
        e.preventDefault();
    
        searchMovie(mobileSearchForm.children[0]);
        closeMobileMenu();
    }
}

function turnLoaderOn(){
    document.querySelector('.loader').classList.remove('hidden');
}

function turnLoaderOff(){
    setTimeout(() => {
        document.querySelector('.loader').classList.add('hidden');
    }, 100);
}