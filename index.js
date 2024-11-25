var siteNameInput= document.getElementById("siteName")
var siteURLInput= document.getElementById("siteURL")

var siteList=[];
if(localStorage.getItem("siteContainer")!==null){
siteList=JSON.parse(localStorage.getItem("siteContainer"))
displaySite()
}

function addSite(){
    if(Validation(siteName)&&Validation(siteURL))
    var site={
        name:siteNameInput.value,
        siteURL:siteURLInput.value
    }
    siteList.push(site)
    localStorage.setItem("siteContainer", JSON.stringify(siteList))
    displaySite()
    clearForm()

}
function clearForm(){
    var site={
        name:siteNameInput.value=null,
        siteURL:siteURLInput.value=null
    }
}

function displaySite(){
    var cartona=""
    for(var i=0;i<siteList.length;i++){
        cartona+= `
        
   <div class="col-md-3">

            <div class="col md-3 ">${i}</div>
             </div>
             
            <div class="col md-3">${siteList[i]?.name}</div>
            
            <div class="col-md-3">
            <a href="${siteList[i]?.siteURL}">Visit</a>
            </div>
            <div class="col-md-3">
                <button  onclick="deleteSite(${i})" class="btn bg-white fw-bold">Delete</button>
                </div>
            `

        
    }
    document.getElementById("site").innerHTML=cartona
}

function deleteSite(index){
    siteList.splice(index,1)
    localStorage.setItem("siteContainer", JSON.stringify(siteList))
    displaySite()

}

function Validation(input){
    var Regex={
        siteName: /^(?!-|\.)[a-zA-Z0-9.-]{3,63}(?<!-|\.)$/,
        siteURL:/^(https?:\/\/)?(www\.)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(:\d+)?(\/[^\s]*)?$/,
    }
    if(Regex[input.id].test(input.value)){
        input.classList.add("is-valid")
        input.classList.remove("is-invalid")
        input.nextElementSibling.classList.replace("d-block","d-none")
        return true
    
    }
    else{
        input.classList.add("is-invalid")
        input.classList.remove("is-valid")
        input.nextElementSibling.classList.replace("d-none", "d-block")
        return false
    }

  
}