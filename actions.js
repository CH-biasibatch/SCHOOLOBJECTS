function addStudent(){
    var firstName = document.getElementById("studentFirstName").value;
    var lastName = document.getElementById("studentLastName").value;
    var grade = document.getElementById("studentGrade").value;
    allStudents.push(new Student(firstName,lastName,grade));
}

function addTeacher(){
    var firstName = document.getElementById("teacherFirstName").value;
    var lastName = document.getElementById("teacherLastName").value;
    var subject = document.getElementById("teacherSubject").value;
    allTeachers.push(new Teacher(firstName,lastName,subject));
}

function addSection(){
    var name = document.getElementById("sectionName").value;
    var spaces = document.getElementById("sectionSpaces").value;
    allSections.push(new Section(name,spaces));
}

function listStudents(){
    var html = "<table border = '1'>"
    for(var i = 0; i <allStudents.length; i++){
        html += "<tr>";
        html += "<td>" + allStudents[i].firstName + "</td>";
        html += "<td>" + allStudents[i].lastName + "</td>";
        html += "<td>" + allStudents[i].grade + "</td>";
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById("listThings").innerHTML = html;
}

function listTeachers(){
    var html = "<table border = '1'>"
    for(var i = 0; i <allTeachers.length; i++){
        html += "<tr>";
        html += "<td>" + allTeachers[i].firstName + "</td>";
        html += "<td>" + allTeachers[i].lastName + "</td>";
        html += "<td>" + allTeachers[i].subject + "</td>";
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById("listThings").innerHTML = html;
}

function listSections(){
    var html = "<table border = '1'>"
    for(var i = 0; i <allSections.length; i++){
        html += "<tr>";
        html += "<td>" + allSections[i].name + "</td>";
        html += "<td>" + allSections[i].spaces + "</td>";
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById("listThings").innerHTML = html;
}

function list(){
    var items = document.getElementById("list").value;
    if(items == "0"){
        listStudents();
    }
    if(items == "1"){
        listTeachers();
    }
    if(items == "2"){
        listSections();
    }
}

function populateLists() {
    var students, sections, teachers;
    for(var i=0;i<allItems[0].length;i++) {
        students += "<option value = studentList>" + allStudents[i].firstName + " " + allStudents[i].lastName + "</option>"
    }
    for(var j=0;j<allItems[1].length;j++) {
        teachers += "<option value = teacherList>" + allTeachers[j].firstName + " " + allTeachers[j].lastName + "</option>"
    }
    for(var k=0;k<allItems[2].length;k++) {
        sections += "<option value = sectionList>" + allSections[k].name + "</option>"
    }
    document.getElementById("studentList").innerHTML = students;
    document.getElementById("teacherList").innerHTML = teachers;
    document.getElementById("sectionList").innerHTML = sections;
    document.getElementById("sectionList2").innerHTML = sections;
}


function createClass(){
    var student = document.getElementById("")

    var classes =
}




function clearBoxes(){
}

function listStudentsInSection(){
}



// var x = document.getElementById("buildingSections");
// if (x.style.display === "block") {
//     x.style.display = "none";
// } else {
//     x.style.display = "block";
// }