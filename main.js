
let name= document.getElementById('my-name');
let bio = document.getElementById('bio');





let nameDisplay = () =>{
    name.classList.add("rotateIn");
}
document.addEventListener('DOMContentLoaded',nameDisplay());

let display = () =>{
    bio.classList.add("rotateInBio");
}
name.onload = display();



let about= document.getElementById('about');
let logo = document.getElementsByClassName('icon-div');
let iconContainer = document.getElementById('icon-container');
let description = document.getElementById('description');
let img = document.getElementById('my-img');
let head = document.getElementById('head');
let firstPar = document.getElementById('first-par');
let secondPar=document.getElementById('second-par');
let skillText= document.getElementById('skills-div');
let skillLogo = document.getElementById('skill-logos');
let projectTitle = document.getElementById('portfolio');
let firstRow = document.getElementById('firstrow');

let contact= document.getElementById('contact-me');
let firstContact = document.getElementById('first-contact');
let secondContact = document.getElementById('second-contact');
let thirdContact = document.getElementById('third-contact');



let inViewport = (element)=>{
    let bounding = element.getBoundingClientRect();
    return (bounding.top >=0 && bounding.left >=0 && bounding.bottom<=(window.innerHeight || document.documentElement.clientHeight)&&bounding.right <=(window.innerWidth || document.documentElement.clientWidth));
}

let ids=[about,iconContainer,skillText,skillLogo,img,head,firstPar,secondPar,projectTitle,firstRow,contact, firstContact,secondContact,thirdContact];


window.addEventListener('scroll',(event)=>{
    let check = (el)=>{
        if(inViewport(el)){
            el.classList.add('slideUp');
        }
    }

    ids.forEach(check);
},true);



