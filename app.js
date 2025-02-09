var studentName = document.getElementById("name")
var studentEmail = document.getElementById("email")
var studentNum = document.getElementById("id")
var table = document.getElementById("table")
var btn = document.getElementById("btn")

var data = []
var newTable = document.createElement("table")
table.appendChild(newTable)
newTable.innerHTML = `
    <thead>
        <tr>
            <th>Id:</th>
            <th>Name:</th>
            <th>Email:</th>
        </tr>
    </thead>
    <tbody id="table-body"></tbody>`;

var tableBody = document.getElementById("table-body");

btn.addEventListener("click", () => {
    if (studentName.value && studentEmail.value && studentNum.value) {
        var StudentData = {
            Name: studentName.value,
            Email: studentEmail.value,
            Id: studentNum.value,
        };

        data.push(StudentData);
        var newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${StudentData.Id}</td><td>${StudentData.Name}</td><td>${StudentData.Email}</td>`;
        tableBody.appendChild(newRow);

        studentName.value = "";
        studentEmail.value = "";
        studentNum.value = "";
    } else {
        alert("Please fill in all fields!");
    }
});
