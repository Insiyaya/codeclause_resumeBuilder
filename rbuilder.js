function addNewWEField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder","Enter Here")

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder","Enter Here")

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

function generateResume() {
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;
    let nameT2 = document.getElementById("nameT2");
    nameT2.innerHTML = nameField;

    let contactField = document.getElementById("contactField").value;
    let contactT = document.getElementById("contactT");
    contactT.innerHTML = contactField;

    let ghField = document.getElementById("ghField").value;
    let ghT = document.getElementById("ghT");
    ghT.innerHTML = ghField;

    let instaField = document.getElementById("instaField").value;
    let instaT = document.getElementById("instaT");
    instaT.innerHTML = instaField;

    let linkedField = document.getElementById("linkedField").value;
    let linkedT = document.getElementById("linkedT");
    linkedT.innerHTML = linkedField;

    let skillField = document.getElementById("skillField").value;
    let skillT = document.getElementById("skillT");
    skillT.innerHTML = skillField;

    
    let wes = document.getElementsByClassName("weField");
    let str = "";
    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML = str;

    let aqs = document.getElementsByClassName("aqField");
    let str1 = "";
    for (let e of aqs) {
        str1 += `<li> ${e.value} </li>`
    }
    document.getElementById('aqT').innerHTML = str1;

    let file = document.getElementById("imgField").files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function () {
        document.getElementById("imgTemplate").src = reader.result;
    }

    document.getElementById('cv-form').style.display ='none';
    document.getElementById('cv-template').style.display ='block';
}

function printResume() {
    window.print()
}