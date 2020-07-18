let episode = document.querySelector('.episode');
let topics = document.querySelectorAll('.topic');
let topBound = document.querySelector('.oglavlenie').offsetHeight;

/*  ДОБАВЛЯЮТСЯ НАЗВАНИЯ РАЗДЕЛОВ  */

window.onscroll = function(){
    
    for(let topic of topics){
        if(window.pageYOffset > topic.offsetTop-50){
        episode.classList.remove('hide');             
        episode.textContent = '~' + topic.textContent + '~';               
    }else if(window.pageYOffset < topics[0].offsetTop-50){
             episode.classList.add('hide'); 
             }
    }
};
