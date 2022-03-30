 
 //Code for hide loading page
$(document).ready(function() 
{
   $('#readyPage').hide(300);
})

//pop up products box 
 const imgs = [],
    imgList = document.querySelectorAll(".img-item"),
    lightBox = document.querySelector(".lightbox"),
    close = document.getElementById("close"),
    lightBoxImg = document.querySelector(".lightbox-img"),
    next =
    document.getElementById("next"),
    prev =
    document.getElementById("prev");
     imgIndex = 0;
    for(let i =0 ; i<imgList.length ; i++)
    {
        imgs.push(imgList[i]);
        imgList[i].addEventListener("click" , function(Event){
            
            var targetSrc = Event.target.src;
            var imgIndex = imgs.indexOf(Event.target);
            lightBox.classList.add("show");
            lightBoxImg.style.backgroundImage = `url("${targetSrc}")`;
            currentIndex = imgs.indexOf(e.target);
            
            var targetSrc = e.target.src;
           // lightBox.style.display = "block";
    lightBoxImg.style.backgroundImage =  `url("${targetSrc}")`;
              lightBox.classList.add("show");
            lightBox.classList.remove("show");

        })
    }
    
    close.addEventListener("click" , function(){
        lightBox.classList.remove("show");
    })

next.addEventListener("click",function(){
        
       if(imgIndex == imgs.length)
           {
               imgIndex = 0;
           }
     imgIndex++;
       var currentImg = imgs[imgIndex].src
        lightBoxImg.style.backgroundImage = `url("${currentImg}")`;
   })
prev.addEventListener("click",function(){
   
       if(imgIndex < 0)
           {
               imgIndex = imgs.length-1;
           }
     imgIndex--;
       var currentImg = imgs[imgIndex].src
        lightBoxImg.style.backgroundImage = `url("${currentImg}")`;
   })
 document.addEventListener("keydown",function(e)
{
        if(e.keyCode == 27)
{
     lightBox.classList.remove("show");
}
    else(e.keyCode == 39)
    {
         imgIndex++;
       if(imgIndex == imgs.length)
           {
               imgIndex = 0;
           }
       var currentImg = imgs[imgIndex].src
        lightBoxImg.style.backgroundImage = `url("${currentImg}")`;
    }
})



//User Name RegEx

// let userName = document.querySelector("#userName input"),
//     userRegEx = /^[A-Z]{1}[a-z]{2,8} [A-Z]{1}[a-z]{2,8}$/,
//     alert = document.querySelector("#userName .alert"),
//     userValue = userName.value;
// userName.addEventListener("blur",function(){
//     if(userRegEx.test(userValue) == false)
//         {
//             alert.style.display= "block";
//         }
//     else
//         {
//             alert.style.display= "none";
//         }
// })


// // User Mail RegEx


// userMail.addEventListener("blur",function(){
//     var userMail = document.querySelector("#userMail input");
//     var userRegExMail = /^[A-Z][a-z]{2,7}[.-]?[A-Z][a-z]{2,7}@[a-z]{2,7}\.[a-z]{2,5}$/;
//     var alertMail = document.querySelector("#userMail .alert");
//     var userMailValue = userMail.value;
//     if(userRegExMail.test(userMailValue) == false)
//         {
//             alertMail.style.display= "block";
//         }
//     else
//         {
//             alertMail.style.display= "none";
//         }
// })

// //User Phone Number Regex



// userNumber.addEventListener("blur",function(){
//     var userNumber = document.querySelector("#userNumber input");
//     var userRegExNumber = /^(002)?01(0|1|2|5)[0-9]{8}$/;
//     var alertNumber = document.querySelector("#userNumber .alert");
//     var userNumberValue = userNumber.value;
//     if(userRegExNumber.test(userNumberValue) == false)
//         {
//             alertNumber.style.display= "block";
//         }
//     else
//         {
//             alertNumber.style.display= "none";
//         }
// })

// //User Masseg Regex




// userMassege.addEventListener("blur",function(){
//     var userMassege = document.querySelector("#userMassege textarea");
//     var userRegExMassege = /^[A-Z][a-z][0-9]{0-99}$/;
//     var alertMassege = document.querySelector("#userMassege textarea");
//     var userMassegeValue = userMassege.value;
//     if(userRegExMassege.test(userMassegeValue) == false)
//         {
//             alertMassege.style.display= "block";
//         }
//     else
//         {
//             alertMassege.style.display= "none";
//         }
// })