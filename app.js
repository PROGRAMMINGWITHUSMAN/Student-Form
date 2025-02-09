var studentName = document.getElementById("name");
var studentEmail = document.getElementById("email");
var studentNum = document.getElementById("id");
var table = document.getElementById("table");
var btn = document.getElementById("btn");
var male = document.getElementById("male");
var female = document.getElementById("female");
var checkboxes = document.querySelectorAll("input[type='checkbox']");

var data = [];
var newTable = document.createElement("table");
table.appendChild(newTable);
newTable.innerHTML = `
    <thead>
        <tr>
            <th>Id:</th>
            <th>Name:</th>
            <th>Gender:</th>
            <th>Email:</th>
            <th>Courses:</th>
        </tr>
    </thead>
    <tbody id="table-body"></tbody>`;

var tableBody = document.getElementById("table-body");

btn.addEventListener("click", () => {
    var gender;
    var checkedValue = [];

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkedValue.push(checkboxes[i].value);
        }
    }
    console.log(checkedValue);

    if (male.checked) {
        gender = "Male";
    } else if (female.checked) {
        gender = "Female";
    } else {
        gender = "Not specified";
    }

    if (studentName.value && studentEmail.value && studentNum.value) {
        var StudentData = {
            Name: studentName.value,
            Email: studentEmail.value,
            Id: studentNum.value,
            Gender: gender,
            Courses: checkedValue,
        };

        data.push(StudentData);

        var newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${StudentData.Id}</td><td>${StudentData.Name}</td><td>${StudentData.Gender}</td><td>${StudentData.Email}</td><td>${StudentData.Courses.join(", ")}</td>`;
        tableBody.appendChild(newRow);

        studentName.value = "";
        studentEmail.value = "";
        studentNum.value = "";
        
        male.checked = false;
        female.checked = false;
        checkboxes.checked = false;
    } else {
        alert("Please fill in all fields!");
    }
});
