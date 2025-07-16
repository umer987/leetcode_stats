document.addEventListener("DOMContentLoaded",()=>{
let  bott=document.querySelector(".sear")
let text = document.querySelector(".user")
let easy = document.querySelector(".easy")
let medium = document.querySelector(".medium")
let hard = document.querySelector(".hard")
let progress = document.querySelector(".circle")
let easylabel = document.querySelector(".easyla")
let mediumlabel = document.querySelector(".mediumla")
let hardlabel = document.querySelector(".hardla")
let paraq = document.querySelector(".zzz")
let statss = document.querySelector(".cic")
let reloadd = document.querySelector(".rel")

console.log(reloadd)
reloadd.addEventListener("click", ()=>{
    window.location.reload();
})
function validateusername(user) {
    if (user.trim() === "") {
        alert("enter username ")   
        return false
    }
    const regix = /^[a-zA-Z0-9 _-]{1,35}$/;
    const ismatch = regix.test(user);

    if (!ismatch) {
        alert("invalid username")
    }
return ismatch
}





async function fatchdetails(user) {
    console.log(user)
     let url =`https://leetcode-stats-api.herokuapp.com/${user}`;
     
     try{
        bott.innerHTML = "Searching....."
                progress.disable=true

        const response = await fetch(url)
        // let eass =response.easySolved
        // console.log(eass)
        if (!response.ok) {
            throw new Error("fuck u")
        }
        const data = await response.json()
        console.log(data)
        console.log(data)
        easy.style.setProperty('--degree', `${data.easySolved*3}%`)
        hard.style.setProperty('--degree', `${data.hardSolved*3}%`)
        medium.style.setProperty('--degree', `${data.mediumSolved*3}%`)
        easylabel.innerHTML+=data.easySolved
        mediumlabel.innerHTML+=data.mediumSolved
        hardlabel.innerHTML+=data.hardSolved
       
        if(data.status == "error" ){
            statss.style.setProperty('display','none')
             paraq.innerHTML="Data Not Found!"
        }
     }
     catch(error){
        
        // para.innerHTML="NO DATA FOUND"
       
         
     }
     finally{
                bott.innerHTML = "Search"
                setTimeout(()=>{
                    
                })

     }
}


bott.addEventListener("click", ()=>{

    const val = text.value
    console.log(val)
    if (validateusername(val) ) {
        fatchdetails(val)
    }



})






})