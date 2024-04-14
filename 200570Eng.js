const backgroundElement = document.getElementById('background');
const c1 = document.getElementById("c1");
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');
const c5 = document.getElementById('c5');
const c6 = document.getElementById('c6');
const menu1=document.getElementById('m1');
const menu2=document.getElementById('m2');
const menu3=document.getElementById('m3');
const menu4=document.getElementById('m4');
const menu5=document.getElementById('m5');
const service = document.getElementById('SS');
const topParts = document.getElementById('TP');
const SerVV=document.getElementById('Services');
const Advice=document.getElementById('AdvPage');
const HumanR=document.getElementById('HumanR');
const partsshow=document.getElementById('MoreParts')
const footer=document.getElementById('footer');
const PopUp=document.getElementById('PopUp');
const ArrowUp=document.getElementById('Aup');
const ArrowDown=document.getElementById('Adown');
const Allpartstext=document.getElementById('Allparts');
const ProName=document.getElementById('MWT');
const Specs=document.getElementById('SPCs')

PopUp.onclick=function(){
    var displaysettings = partsshow.style.display;
    if(displaysettings=='flex'){
        partsshow.style.display='none'
        ArrowDown.style.display='none'
        ArrowUp.style.display='flex'
        Allpartstext.innerHTML='Бүх сэлбэгийг харах'
    }
    else{
        partsshow.style.display='flex'
        ArrowDown.style.display='flex'
        ArrowUp.style.display='none'
        Allpartstext.innerHTML='Хураах'
    }
}



menu1.onclick=function(){
    backgroundElement.style.backgroundImage='url("LandingPL.png")'
    backgroundElement.style.backgroundColor='var(--lightBGColor)'
    backgroundElement.style.backgroundSize='100%'
    backgroundElement.style.backgroundRepeat='no-repeat'
    backgroundElement.style.backgroundPosition='center'
    menu1.style.background='#b02e24'
    menu2.style.background=''
    menu3.style.background=''
    menu4.style.background=''
    menu5.style.background=''
    topParts.style.display='none'
    service.style.display='none'
    Advice.style.display='none'
    HumanR.style.display='none'
    var servstate = SerVV.style.display;
    if(SerVV.style.display=='flex'){
        SerVV.style.display='none'
        SerVV.style.left='70%'
    }
    else{
        SerVV.style.display='flex'
        SerVV.style.left='0%'
    }
}
menu2.onclick=function(){
    backgroundElement.style.backgroundImage='url("P4.jpg")'
    backgroundElement.style.backgroundColor='var(--lightBGColor)'
    backgroundElement.style.backgroundSize='100%'
    backgroundElement.style.backgroundRepeat='no-repeat'
    backgroundElement.style.backgroundPosition='bottom'
    SerVV.style.display='none'
    topParts.style.display='flex'
    service.style.display='flex'
    HumanR.style.display='none'
    menu1.style.background=''
    menu2.style.background='#b02e24'
    menu3.style.background=''
    menu4.style.background=''
    menu5.style.background=''
    Advice.style.display='none'
};  
menu3.onclick=function(){
    backgroundElement.style.backgroundImage='url("LandingPL.png")'
    backgroundElement.style.backgroundColor='var(--lightBGColor)'
    backgroundElement.style.backgroundSize='100%'
    backgroundElement.style.backgroundRepeat='no-repeat'
    backgroundElement.style.backgroundPosition='center'
    SerVV.style.display='none'
    SerVV.style.left='70%'
    footer.scrollIntoView();
    menu3.style.background='#b02e24'
    menu5.style.background=''
    menu2.style.background=''
    menu4.style.background=''
    menu1.style.background=''
    topParts.style.display='none'
    service.style.display='none'
    Advice.style.display='none'
    HumanR.style.display='none'
}; 
menu4.onclick=function(){
    backgroundElement.style.background='var(--hoverBGColor)'
    backgroundElement.style.backgroundSize='100%'
    backgroundElement.style.backgroundRepeat='no-repeat'
    backgroundElement.style.backgroundPosition='bottom'
    menu1.style.background=''
    menu2.style.background=''
    menu3.style.background=''
    menu4.style.background='#b02e24'
    menu5.style.background=''
    SerVV.style.display='none'
    topParts.style.display='none'
    service.style.display='none'
    Advice.style.display='none'
    HumanR.style.display='flex'
} 
menu5.onclick=function(){
    backgroundElement.style.background='var(--hoverBGColor)'
    SerVV.style.display='none'
    topParts.style.display='none'
    service.style.display='none'
    HumanR.style.display='none'
    Advice.style.display='flex'
    menu5.style.background='#b02e24'
    menu1.style.background=''
    menu2.style.background=''
    menu3.style.background=''
    menu4.style.background=''
};



c1.onmouseenter=function(){
    backgroundElement.style.backgroundImage='url("P4.jpg")';
    service.style.backgroundColor='#bdbec700'
    service.style.opacity='100%'
    c1.style.opacity='100%'
    c1.style.borderColor='#3b3d4880'
    c2.style.opacity='10%'
    c3.style.opacity='10%'
    c4.style.opacity='10%'
    c5.style.opacity='10%'
    c6.style.opacity='10%'
    ProName.innerHTML='V6 Engine'
    Specs.innerHTML='V6 Engine is a 6-cylinder engine. The "V" represents the way cylinders are arranged in your engine. Or to put it the other way, in two equal rows.'
}
c1.onmouseleave=function(){
    service.style.backgroundColor='#bdbec700'
    c1.style.borderColor='#3b3d4880'
    c1.style.opacity='30%'
    c2.style.opacity='30%'
    c3.style.opacity='30%'
    c4.style.opacity='30%'
    c5.style.opacity='30%'
    c6.style.opacity='30%'
}
c2.onmouseenter=function(){
    backgroundElement.style.backgroundImage='url("P10.jpg")';
    service.style.backgroundColor='#bdbec700'
    service.style.opacity='100%'
    c1.style.opacity='10%'
    c2.style.opacity='100%'
    c2.style.borderColor='#3b3d4880'
    c3.style.opacity='10%'
    c4.style.opacity='10%'
    c5.style.opacity='10%'
    c6.style.opacity='10%'
    ProName.innerHTML='Liftgate latch actuator'
    Specs.innerHTML='The Liftgate Actuator is responsible for locking, unlocking, and opening the rear liftgate when you press the button on your car.'
}
c2.onmouseleave=function(){
    service.style.backgroundColor='#bdbec700'
    c1.style.opacity='30%'
    c2.style.borderColor='#3b3d4880'
    c2.style.opacity='30%'
    c3.style.opacity='30%'
    c4.style.opacity='30%'
    c5.style.opacity='30%'
    c6.style.opacity='30%'
}
c3.onmouseenter=function(){
    backgroundElement.style.backgroundImage='url("P8.jpg")';
    service.style.backgroundColor='#bdbec700'
    service.style.opacity='100%'
    c1.style.opacity='10%'
    c2.style.opacity='10%'
    c3.style.opacity='100%'
    c3.style.borderColor='#3b3d4880'
    c4.style.opacity='10%'
    c5.style.opacity='10%'
    c6.style.opacity='10%'
    ProName.innerHTML='Altenator'
    Specs.innerHTML='Alternators main responsibility is to convert chemical energy to electrical energy so that you can charge and replenish the battery in your engine and other electrical components in a car.'
}
c3.onmouseleave=function(){
    service.style.backgroundColor='#bdbec700'
    c1.style.opacity='30%'
    c2.style.opacity='30%'
    c3.style.borderColor='#3b3d4880'
    c3.style.opacity='30%'
    c4.style.opacity='30%'
    c5.style.opacity='30%'
    c6.style.opacity='30%'
}
c4.onmouseenter=function(){
    backgroundElement.style.backgroundImage='url("P5.jpg")';
    service.style.backgroundColor='#bdbec700'
    service.style.opacity='100%'
    c1.style.opacity='10%'
    c2.style.opacity='10%'
    c3.style.opacity='10%'
    c4.style.opacity='100%'
    c4.style.borderColor='#3b3d4880'
    c5.style.opacity='10%'
    c6.style.opacity='10%'
    ProName.innerHTML='Vapor canister'
    Specs.innerHTML='A vehicles vapor canister is an important part of its federally mandated emissions control system. When properly installed and maintained, the vapor canister reduces the amount of evaporated fuel a car or truck emits.'
}
c4.onmouseleave=function(){
    service.style.backgroundColor='#bdbec700'
    c1.style.opacity='30%'
    c2.style.opacity='30%'
    c3.style.opacity='30%'
    c4.style.borderColor='#3b3d4880'
    c4.style.opacity='30%'
    c5.style.opacity='30%'
    c6.style.opacity='30%'
}
c5.onmouseenter=function(){
    backgroundElement.style.backgroundImage='url("P6.jpg")';
    service.style.backgroundColor='#bdbec700'
    service.style.opacity='100%'
    c1.style.opacity='10%'
    c2.style.opacity='10%'
    c3.style.opacity='10%'
    c4.style.opacity='10%'
    c5.style.opacity='100%'
    c5.style.borderColor='#3b3d4880'
    c6.style.opacity='10%'
    ProName.innerHTML='Height control pump'
    Specs.innerHTML='The height control pump is responsible for pressurizing the air reservoir and regulating the air flow to the suspension components to maintain the desired ride height.'
}
c5.onmouseleave=function(){
    service.style.backgroundColor='#bdbec700'
    c1.style.opacity='30%'
    c2.style.opacity='30%'
    c3.style.opacity='30%'
    c4.style.opacity='30%'
    c5.style.borderColor='#3b3d4880'
    c5.style.opacity='30%'
    c6.style.opacity='30%'
}
c6.onmouseenter=function(){
    backgroundElement.style.backgroundImage='url("P7.jpg")';
    service.style.backgroundColor='#bdbec700'
    service.style.opacity='100%'
    c1.style.opacity='10%'
    c2.style.opacity='10%'
    c3.style.opacity='10%'
    c4.style.opacity='10%'
    c5.style.opacity='10%'
    c6.style.opacity='100%'
    c6.style.borderColor='#3b3d4880'
    ProName.innerHTML='Clutch'
    Specs.innerHTML='The primary function of the clutch is to engage and disengage the connection between the engine and the transmission. When the clutch pedal is pressed down, the clutch disengages, separating the engines power from the transmission.'
}
c6.onmouseleave=function(){
    service.style.backgroundColor='#bdbec700'
    c1.style.opacity='30%'
    c2.style.opacity='30%'
    c3.style.opacity='30%'
    c4.style.opacity='30%'
    c5.style.opacity='30%'
    c6.style.borderColor='#3b3d4880'
    c6.style.opacity='30%'
}



const Milestone=document.getElementById('Milestone');
/*new IntersectionObserver();
const theObserver = IntersectionObserver(callbackFunction,options);
theObserver.observe(Milestone);
const options={

}*/

let valueDisplays = document.querySelectorAll('.counter')
let interval=8000;
valueDisplays.forEach(valueDisplay =>{
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration =Math.floor(interval / endValue);
    let counterr =setInterval(function(){
        if(endValue<=500){
            startValue += 1;
            valueDisplay.textContent = startValue;
            if(startValue == endValue){
                clearInterval(counterr);
            }
        }
        else if(endValue>=900 && endValue<=5000){
            startValue += 10;
            valueDisplay.textContent = startValue;
            if(startValue == endValue){
                clearInterval(counterr);
            }
        }
        else {
            startValue += 100;
            valueDisplay.textContent = startValue;
            if(startValue == endValue){
                clearInterval(counterr);
            }
        }
    });
});


    
Milestone.onclick=function(){
    
}

/*ene hesegt advice page deh medeellig delgerengui uzeh bolon haahad zoriulagdsan code bgaa*/
function More1(){
    var pelement=document.querySelector('#card1 p')
    var buttonname=document.getElementById('More1');
    if(pelement.style.overflow==="visible")
    {
        buttonname.innerHTML="More..."
        pelement.style.overflow="hidden"
        pelement.style.height="50px"
    }
    else
    {
        buttonname.innerHTML="Hide"
        pelement.style.overflow="visible"
        pelement.style.height="auto"
    }
}
function More2(){
    var pelement=document.querySelector('#card2 p')
    var buttonname=document.getElementById('More2');
    if(pelement.style.overflow==="visible")
    {
        buttonname.innerHTML="More..."
        pelement.style.overflow="hidden"
        pelement.style.height="50px"
    }
    else
    {
        buttonname.innerHTML="Hide"
        pelement.style.overflow="visible"
        pelement.style.height="auto"
    }
}
function More3(){
    var pelement=document.querySelector('#card3 p')
    var buttonname=document.getElementById('More3');
    if(pelement.style.overflow==="visible")
    {
        buttonname.innerHTML="More..."
        pelement.style.overflow="hidden"
        pelement.style.height="50px"
    }
    else
    {
        buttonname.innerHTML="Hide"
        pelement.style.overflow="visible"
        pelement.style.height="auto"
    }
}
function More4(){
    var pelement=document.querySelector('#card4 p')
    var buttonname=document.getElementById('More4');
    if(pelement.style.overflow==="visible")
    {
        buttonname.innerHTML="More..."
        pelement.style.overflow="hidden"
        pelement.style.height="50px"
    }
    else
    {
        buttonname.innerHTML="Hide"
        pelement.style.overflow="visible"
        pelement.style.height="auto"
    }
}
function More5(){
    var pelement=document.querySelector('#card5 p')
    var buttonname=document.getElementById('More5');
    if(pelement.style.overflow==="visible")
    {
        buttonname.innerHTML="More..."
        pelement.style.overflow="hidden"
        pelement.style.height="50px"
    }
    else
    {
        buttonname.innerHTML="Hide"
        pelement.style.overflow="visible"
        pelement.style.height="auto"
    }
}
function More6(){
    var pelement=document.querySelector('#card6 p')
    var buttonname=document.getElementById('More6');
    if(pelement.style.overflow==="visible")
    {
        buttonname.innerHTML="More..."
        pelement.style.overflow="hidden"
        pelement.style.height="50px"
    }
    else
    {
        buttonname.innerHTML="Hide"
        pelement.style.overflow="visible"
        pelement.style.height="auto"
    }
}
