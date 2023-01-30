// var ham=document.getElementsByClassName("ri-more-2-fill");
document.querySelector(".icon").addEventListener("click",()=>{
    // console.log("clikkking")
    // document.querySelector('.sidebar').style.display='inline';
    document.querySelector('.sidebar').classList.toggle("sidebarGO");
    
})



document.querySelector('.statuspage').style.display='none';
document.querySelector('.callpage').style.display='none';

document.querySelector(".statusclick").addEventListener("click",()=>{
    document.querySelector('.statuspage').style.display='inline';
    document.querySelector('.chatpage').style.display='none';
    document.querySelector('.callpage').style.display='none';
    console.log("clicking stats");
    
})
document.querySelector(".chatclick").addEventListener("click",()=>{
    document.querySelector('.statuspage').style.display='none';
    document.querySelector('.chatpage').style.display='inline';
    document.querySelector('.callpage').style.display='none';
    console.log("clicking chat");
    
})


document.querySelector(".callclick").addEventListener("click",()=>{
    document.querySelector('.statuspage').style.display='none';
    document.querySelector('.chatpage').style.display='none';
    document.querySelector('.callpage').style.display='inline';
    console.log("clicking chat");
    
})



