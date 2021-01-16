

async function generateCard(sectionC, flag) {

   //FETCHING URL

   var url = 'https://api.nytimes.com/svc/topstories/v2/' + sectionC + '.json?api-key=coq4FGEmElOC1uPGW3Jm3wHelYeRG1Cm';
   let res = await fetch(url);
   let response = await res.json();

   if (sectionC !== 'home' && sectionC !== 'food') {
      response.results = (response.results).filter(function (e) {
         return e.section === sectionC;

      })
   }
   else if (sectionC === 'food') {
      response.results = (response.results).filter(function (e) {
         return e.section === 'dining';

      })
   }





   var card = []
   var cardRow = [];
   var news = [];
   var cardBody = [];
   var section = [];
   var title = [];
   var dateCard = [];
   var smallDate = [];
   var abstract = [];
   var continueReading = [];
   var image = [];
   var img = [];

   if (flag === 1) {
      $('.mycard').remove()
   }


   //GENERTAING CARD

   for (var index = 0; index < response.results.length; index++) {


      //CONTAINER
      var container = document.createElement('div');
      container.setAttribute('class', 'container-fluid mycard');
      container.setAttribute('id', 'containerID');
      document.body.append(container);




      //CARD

      card[index] = document.createElement('div');
      card[index].setAttribute('class', 'card');
      container.append(card[index]);


      //ROW

      cardRow[index] = document.createElement('div');
      cardRow[index].setAttribute('class', 'row no-gutters justify-content-around');
      card[index].append(cardRow[index]);

      //NEWS 

      news[index] = document.createElement('div');
      news[index].setAttribute('class', 'col-lg-8 ');
      cardRow[index].append(news[index]);

      //CARD-BODY

      cardBody[index] = document.createElement('div');
      cardBody[index].setAttribute('class', 'card-body');
      news[index].append(cardBody[index]);

      //SECTION 

      section[index] = document.createElement('a');
      section[index].setAttribute('class', 'section-card');

      cardBody[index].append(section[index]);


      //TITLE

      title[index] = document.createElement('h3');
      title[index].setAttribute('class', 'card-title  titlecard');
      cardBody[index].append(title[index]);

      //DATE-CARD 

      dateCard[index] = document.createElement('p');
      dateCard[index].setAttribute('class', 'card-text ');
      cardBody[index].append(dateCard[index]);
      //SMALL

      smallDate[index] = document.createElement('small');
      smallDate[index].setAttribute('class', 'text-muted date-card');
      dateCard[index].append(smallDate[index]);
      //ABSTRACT

      abstract[index] = document.createElement('p');
      abstract[index].setAttribute('class', 'card-text abstract-card pt-2');
      cardBody[index].append(abstract[index]);

      //CONTINUE-READING

      continueReading[index] = document.createElement('h6');
      continueReading[index].setAttribute('class', 'continue-reading ');
      continueReading[index].innerHTML = '<a href="response.results[index].short_url" class=" "></a>';


      //LINK 

      var link = document.createElement('a');
      link.setAttribute('class', 'continue-reading');
      link.setAttribute('href', response.results[index].short_url);
      link.innerHTML = 'Continue reading';
      continueReading[index].append(link);
      cardBody[index].append(continueReading[index]);

      //IMAGE-COL
      image[index] = document.createElement('div');
      image[index].setAttribute('class', 'col-lg-4');
      cardRow[index].append(image[index]);


      //img

      img[index] = document.createElement('img');
      img[index].setAttribute('class', 'img-thumbnail p-3 p-lg-0 ');
      img[index].setAttribute('alt', 'IMG');
      image[index].append(img[index]);




      //INITIALIZATIONs

      if (sectionC === 'food') {
         section[index].innerHTML = sectionC.toUpperCase();
      }
      else {
         section[index].innerHTML = response.results[index].section.toUpperCase();
      }


      var date = new Date(response.results[index].created_date);

      title[index].innerHTML = response.results[index].title;
      smallDate[index].innerHTML = date.toDateString().slice(4, 10);


      abstract[index].innerHTML = response.results[index].abstract;
      img[index].setAttribute('src', response.results[index].multimedia[3].url);

   };


}
//HEADER 

var header = document.createElement('div');
header.setAttribute('class','container-fluid text-center header');
header.innerHTML='The New York Times';
document.body.append(header);

//NAVBAR 

var nav = document.createElement('nav');
nav.setAttribute('class', 'navbar  navbar-expand-lg navbar-light bg-light ');
document.body.append(nav);


//BUTTON



var nav_btn = document.createElement('button');
nav_btn.setAttribute('class', 'navbar-toggler');
nav_btn.setAttribute('type', 'button');
nav_btn.setAttribute('data-toggle', 'collapse');
nav_btn.setAttribute('data-target', '#collapse_btn');
nav_btn.innerHTML = '<span class="navbar-toggler-icon"></span>';

nav.append(nav_btn);


//COLLAPSE
var collapse = document.createElement('div');
collapse.setAttribute('class', 'collapse navbar-collapse');
collapse.setAttribute('id', 'collapse_btn');
nav.append(collapse);

//UL

var ul = document.createElement('ul');
ul.setAttribute('class', 'navbar-nav row justify-content-between');
collapse.append(ul);

//LI

//HOME
var home = document.createElement('li');
home.setAttribute('class', 'nav-item col');
ul.append(home)
//HOME BTN

var home_btn = document.createElement('button');
home_btn.setAttribute('class', 'btn');
home_btn.setAttribute('id', 'HOME')
home_btn.innerHTML = 'HOME';
home_btn.addEventListener('click', function () {

   generateCard('home', 1);
})
home.append(home_btn);


//WORLD
var world = document.createElement('li');
world.setAttribute('class', 'nav-item col');

ul.append(world);

//WORLD BTN

var world_btn = document.createElement('button');
world_btn.setAttribute('class', 'btn');
world_btn.setAttribute('id', 'WORLD')
world_btn.innerHTML = 'WORLD';
world_btn.addEventListener('click', function () {

   generateCard('world', 1);
})
world.append(world_btn);


//MAGAZINE
var magazine = document.createElement('li');
magazine.setAttribute('class', 'nav-item col');

ul.append(magazine);


//MAGAZINE BTN

var magazine_btn = document.createElement('button');
magazine_btn.setAttribute('class', 'btn');
magazine_btn.setAttribute('id', 'MAGAZINE')
magazine_btn.innerHTML = 'MAGAZINE';
magazine_btn.addEventListener('click', function () {

   generateCard('magazine', 1);
})
magazine.append(magazine_btn);



//TECHNOLOGY
var technology = document.createElement('li');
technology.setAttribute('class', 'nav-item col');

ul.append(technology);


//TECHNOLOGY BTN

var technology_btn = document.createElement('button');
technology_btn.setAttribute('class', 'btn');
technology_btn.setAttribute('id', 'TECHNOLOGY')
technology_btn.innerHTML = 'TECHNOLOGY';
technology_btn.addEventListener('click', function () {

   generateCard('technology', 1);
})
technology.append(technology_btn);


//SCIENCE
var science = document.createElement('li');
science.setAttribute('class', 'nav-item col');

ul.append(science);
//SCIENCE BTN

var science_btn = document.createElement('button');
science_btn.setAttribute('class', 'btn');
science_btn.setAttribute('id', 'SCIENCE')
science_btn.innerHTML = 'SCIENCE';
science_btn.addEventListener('click', function () {
   document.querySelector('.card').remove();
   generateCard('science', 1);
})
science.append(science_btn);


//HEALTH
var health = document.createElement('li');
health.setAttribute('class', 'nav-item col');

ul.append(health);


//HEALTH BTN

var health_btn = document.createElement('button');
health_btn.setAttribute('class', 'btn');
health_btn.setAttribute('id', 'HEALTH')
health_btn.innerHTML = 'HEALTH';
health_btn.addEventListener('click', function () {

   generateCard('health', 1);
})
health.append(health_btn);

//SPORTS
var sports = document.createElement('li');
sports.setAttribute('class', 'nav-item col');

ul.append(sports);



//SPORTS BTN

var sports_btn = document.createElement('button');
sports_btn.setAttribute('class', 'btn');
sports_btn.setAttribute('id', 'SPORTS')
sports_btn.innerHTML = 'SPORTS';
sports_btn.addEventListener('click', function () {

   generateCard('sports', 1);
})
sports.append(sports_btn);


//ARTS
var arts = document.createElement('li');
arts.setAttribute('class', 'nav-item col');

ul.append(arts);

//ARTS BTN

var arts_btn = document.createElement('button');
arts_btn.setAttribute('class', 'btn');
arts_btn.setAttribute('id', 'ARTS')
arts_btn.innerHTML = 'ARTS';
arts_btn.addEventListener('click', function () {

   generateCard('arts', 1);
})
arts.append(arts_btn);


//FASHION
var fashion = document.createElement('li');
fashion.setAttribute('class', 'nav-item col');

ul.append(fashion);

//FASHION BTN

var fashion_btn = document.createElement('button');
fashion_btn.setAttribute('class', 'btn');
fashion_btn.setAttribute('id', 'FASHION')
fashion_btn.innerHTML = 'FASHION';
fashion_btn.addEventListener('click', function () {

   generateCard('fashion', 1);
})
fashion.append(fashion_btn);



//FOOD
var food = document.createElement('li');
food.setAttribute('class', 'nav-item col ');

ul.append(food);


//FOOD BTN,id

var food_btn = document.createElement('button');
food_btn.setAttribute('class', 'btn');
food_btn.setAttribute('id', 'FOOD')
food_btn.innerHTML = 'FOOD';
food_btn.addEventListener('click', function () {

   generateCard('food', 1);
})
food.append(food_btn);

//TRAVEL
var travel = document.createElement('li');
travel.setAttribute('class', 'nav-item col ');
ul.append(travel);



//TRAVEL BTN

var travel_btn = document.createElement('button');
travel_btn.setAttribute('class', 'btn');
travel_btn.setAttribute('id', 'TRAVEL')
travel_btn.innerHTML = 'TRAVEL';
travel_btn.addEventListener('click', function() {

   generateCard('travel', 1);
})
travel.append(travel_btn);

generateCard('home', 0);


