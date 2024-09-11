
const activeGroup0 = document.querySelector('#active-group0')               //Куньи
const activeGroup1 = document.querySelector('#active-group1')               //Кошачьи
const arrGroups = ['Куницы', 'Кошки']

const cells = document.querySelectorAll('.images-section__cards figure');
const imgs = document.querySelectorAll('.images-section__cards img');       //фотки
const names = document.querySelectorAll('.images-section__cards h3');       //имена
const mainName = document.querySelectorAll('.main-section h1');             //элементы main-section
const mainDescription = document.querySelectorAll('.main-section p');
const mainImage = document.querySelectorAll('.main-section img');
const arrowLeft = document.querySelector('.arrow-left')                     //стрелки
const arrowRight = document.querySelector('.arrow-right')
const familyH2 = document.querySelector('.images-section__arrows h2')


let activeCell = 0;                                                         //индекс активной картинки
let indexZero = 0;                                                          //индекс зверя, расположенного на нулевой (левой) картинке
let indexGroup = 0;                                                         //индекс семейства
let arrAnimals =[];
getArray();                                                                 //заполняем массив
refreshPage();   

//слайдер
let nIntervId;

function sliderOn() {
    if (!nIntervId) {
      nIntervId = setInterval(slider, 10000);
    }
  }
function slider() {
  right();
}
function sliderOff() {
  clearInterval(nIntervId);
  nIntervId = null;
}
document.querySelector(".start").addEventListener("click", sliderOn);
document.querySelector(".stop").addEventListener("click", sliderOff);
//слайдер

//----------------------------------------------------------------------------------------------------------------------
arrowRight.addEventListener('click', right);                                //клик вправо, обновляем indexZero
    function right(){
        indexZero = indexZero + 1;
        if(indexZero > arrAnimals[indexGroup].length - 1){indexZero = 0}
        refreshPage();
    }

arrowLeft.addEventListener('click', left);                                  //клик влево, обновляем indexZero
    function left(){
        indexZero = indexZero - 1;
        if(indexZero < 0){indexZero = arrAnimals[indexGroup].length - 1}
        refreshPage();
    }
//----------------------------------------------------------------------------------------------------------------------
    for(let i = 0; i < cells.length; i++){                                  //обновляем индекс activeCell
        cells[i].addEventListener('click', ()=>{
            activeCell = i;
            refreshPage();                                                  
            
        })
    }
//----------------------------------------------------------------------------------------------------------------------
    activeGroup0.addEventListener('click', ()=>{                            //обновляем indexGroup
        if(indexGroup == 1){
            indexGroup = 0;
            activeCell = 0;                                                    
            indexZero = 0;
            refreshPage();  
        }
    })
    activeGroup1.addEventListener('click', ()=>{                            //обновляем indexGroup
        if(indexGroup == 0){
            indexGroup = 1;
            activeCell = 0;                                                     
            indexZero = 0;
            refreshPage(); 
        }
    })
//----------------------------------------------------------------------------------------------------------------------
function refreshPage(){                                                     //обновляем страницу
    let j;
    let countAnimals = arrAnimals[indexGroup].length;
        for(let i = 0; i < 4; i++){                                         //обновляем строку картинок
            j = i + indexZero;
            if(j > countAnimals - 1){j = j - countAnimals}
            if(j < 0){j = j + countAnimals}
            names[i].innerHTML = arrAnimals[indexGroup][j][0];
            imgs[i].src = arrAnimals[indexGroup][j][1];
            cells[i].style.border = "";
        }
    j = activeCell + indexZero;
    if(j > countAnimals - 1){j = j - countAnimals}
    cells[activeCell].style.border = "3px solid white";                     //выделяем активную картинку
    mainName[0].innerHTML =  arrAnimals[indexGroup][j][0];
    mainDescription[0].innerHTML =  arrAnimals[indexGroup][j][2];
    mainImage[0].src =  arrAnimals[indexGroup][j][1];
    familyH2.innerHTML = arrGroups[indexGroup];
}
