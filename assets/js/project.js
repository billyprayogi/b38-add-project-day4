let projects = []

function addproject() {

 let name = document.getElementById("name").value;
 let image = document.getElementById("image").files[0]; 
 let startdate = document.getElementById ("startdate").value;
 let enddate = document.getElementById("enddate").value;
 let Description = document.getElementById("Description").value;
image = URL.createObjectURL(image)

 

let project = {
    name: name,
    image: image,
    startdate: startdate,
    enddate: enddate,
    Description: Description,
}

projects.push(project)
renderProjects()
}

function renderProjects(){
    let webProject = document.getElementById("card")

    webProject.innerHTML=`    
    <div id="card" class="card">
    <div style="
    border: 1px solid; 
    width: 300px; 
    margin: auto;
    border-radius: 5px;
    background: white;
    padding: 10px 10px 10px 10px;">

    <img style="border-radius: 10px;" src="assets/Billyp.jpg" alt="My Photo" 
        width="300px">
    <h3 style="padding: 10px 10px 0px 10px; margin:0px 0px 0px 0px;">dumbways mobile app - 2021</h3>
    <p style="padding: 1px 10px 0px 10px; margin:0px 0px 0px 0px;">duration: 3 bulan</p>
    <p style="padding: 10px 10px 0px 10px;
    margin:0px 0px 10px 0px;" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus corporis maiores maxime odio aliquid ea, facilis eius saepe nobis necessitatibus optio. Quidem non quia quod blanditiis ipsum id unde adipisci Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    <table class="mb-3" style="margin-left: 20px">
        <tr>
        <th><i class="fa-brands fa-node-js fa-2x"></i></th>
        <th><i class="fa-brands fa-angular fa-2x px-2"></i></th>
        <th><i class="fa-brands fa-react fa-2x"></i></th>
        <th><i class="fa-brands fa-java fa-2x px-2"></i></th>
        </tr>
      </table>

    <div style="margin-left: 10px; padding-top: 10px;">
        <button type="button" "
        style="
        border: none;
        font-size: 18px;
        color: white;
        background-color: rgb(3, 3, 3);
        border-radius: 5px;
        padding: 2px 50px;
        cursor: pointer;">edit</button>
    
      
        <button type="button" "
        style="
        border: none;
        font-size: 18px;
        color: white;
        background-color: rgb(12, 12, 12);
        border-radius: 5px;
        padding: 2px 50px;
        cursor: pointer;">delete</button>
    </div>
    </div>
</div>`

for (let i = 0; i <projects.length; i++) {
     webProject.innerHTML += `<div id="card" class="card">
     <div style="
     border: 1px solid; 
     width: 300px; 
     margin: auto;
     border-radius: 5px;
     background: white;
     padding: 10px 10px 10px 10px;">
 
     <img style="border-radius: 10px;" src="${projects[i].image}" alt="My Photo" 
         width="300px">
     <h3 style="padding: 10px 10px 0px 10px; margin:0px 0px 0px 0px;">${projects[i].name}</h3>
     <p style="padding: 1px 10px 0px 10px; margin:0px 0px 0px 0px;">duration: ${projects[i].startdate}/${projects[i].enddate}</p>
     <p style="padding: 10px 10px 0px 10px;
     margin:0px 0px 10px 0px;" >${projects[i].Description}</p>
     <table class="mb-3" style="margin-left: 20px">
         <tr>
         <th><i class="fa-brands fa-node-js fa-2x"></i></th>
         <th><i class="fa-brands fa-angular fa-2x px-2"></i></th>
         <th><i class="fa-brands fa-react fa-2x"></i></th>
         <th><i class="fa-brands fa-java fa-2x px-2"></i></th>
         </tr>
       </table>
 
     <div style="margin-left: 10px; padding-top: 10px;">
         <button type="button" "
         style="
         border: none;
         font-size: 18px;
         color: white;
         background-color: rgb(3, 3, 3);
         border-radius: 5px;
         padding: 2px 50px;
         cursor: pointer;">edit</button>
     
       
         <button type="button" "
         style="
         border: none;
         font-size: 18px;
         color: white;
         background-color: rgb(12, 12, 12);
         border-radius: 5px;
         padding: 2px 50px;
         cursor: pointer;">delete</button>
     </div>
     </div>
 </div>`
  }


}


/*let name = document.getElementById("name").value;
let start = document.getElementById("start").value; 
let end = document.getElementById("end").value;
let Description = document.getElementById("Description").value; 
let node = document.getElementById("node").value;
let next = document.getElementById("next").value;
//document.getElementById("node").checked = true;
//document.getElementById("react").checked = true;
//document.getElementById("next").checked = true;
//document.getElementById("Typescript").checked = true;
let image = document.getElementById("next").file; 
//Image = URL.createObjectURL()


if (!name) {
    return alert ("name tidak boleh kosong");
}
else if (!start) {
    return alert ("start date tidak boleh kosong");
}
else if (!end) {
    return alert ("end date tidak boleh kosong");
}
else if (!Description) {
    return alert ("Description tidak boleh kosong");
}
 //else if (!node) {
    //return alert ("node tidak boleh kosong");
 //}
 //else if (!next) {
    //return alert ("next tidak boleh kosong");
 //}
*/