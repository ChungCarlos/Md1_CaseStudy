class Person {
    constructor(name, gender, date, address, telephone, room, vehicle,note) {
        this.name = name
        this.gender = gender
        this.date = date
        this.address = address
        this.telephone = telephone
        this.room = room
        this.vehicle = vehicle
        this.note = note
    }

    setAll(name, gender, date, address, telephone, room, vehicle,note) {
        this.name = name
        this.gender = gender
        this.date = date
        this.address = address
        this.telephone = telephone
        this.room = room
        this.vehicle = vehicle
        this.note = note
    }

    getName() {
        return this.name
    }

    getGender() {
        return this.gender
    }

    getDate() {
        return this.date
    }

    getAddress() {
        return this.address
    }

    getTelephone() {
        return this.telephone
    }

    getRoom() {
        return this.room
    }

    getVehicle() {
        return this.vehicle
    }
    getNote(){
        return this.note
    }
}

let resident1 = new Person("Messi Lùn", "Male", "1995-12-05", "Argentina", "0123456789", "P12a10", "Car","Thường đóng tiền chậm")
let resident2 = new Person("Ronaldo Điệu", "Male", "1988-10-05", "Portugal", "09699969", "P302", "Car","Điệu chẩy dãi")
let resident3 = new Person("Harry Maguire", "Male", "1993-03-05", "England", "0946123456", "P405", "Bike","Thường diễn hài")
let resident4 = new Person("Neymar Jr", "Male", "1995-12-05", "Brazil", "0123456789", "P12a10", "Car", "Hát rất dở")
let resident5 = new Person("Rô Vẩu", "Male", "1988-10-05", "Brazil", "09699969", "P302", "Car","Nói phét hơi siêu")
let resident6 = new Person("Luis Suárez", "Male", "1987-05-05", "Uruguay", "0946123456", "P405", "Car","Răng hơi nhọn")
let resident7 = new Person("Chung Carlos", "Male", "1995-05-10", "Nam Định", "0969969415", "P100", "Car","Hơi bị nhiều tiền")

let arr = [resident1, resident2, resident3, resident4, resident5, resident6, resident7]

function searchResident() {
    let val = document.getElementById("txtSearch").value;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Object.values(arr[i]).toString().toLowerCase().includes(val.toLowerCase())) {
            result.push(arr[i]);
        }
    }
    let list = document.getElementById("result");
    list.innerHTML = "";
    let listS = document.createElement("table")
    for (let i = 0; i < result.length; i++) {
        if (val !== '' && val !== ' ') {
            listS.innerHTML += `<tr><td>${result[i].name}</td><td>${result[i].gender}</td><td>${arr[i].date}</td><td>${result[i].address}</td><td>${result[i].room}</td><td>${result[i].vehicle}</td><td>${result[i].telephone}</td><td>${result[i].note}</td></tr>`;
            list.appendChild(listS); // Thêm phần tử của Lists vào 1 phần tử List vào cuối danh sách
        }
    }
}

// Display danh sach:
function displayList() {
    let count = 0;
    let list = `<tr><th>STT</th><th>Họ Tên</th><th>Giới Tính</th><th>Ngày Sinh</th><th>Địa Chỉ TT</th><th>Số Điện Thoại</th><th>Căn Hộ</th><th>Phương Tiện</th><th>Note</th><th colspan="2">Chức Năng</th></tr>`;
    for (let i = 0; i < arr.length; i++) {
        count++;
        list += `<tr><td id="td1">${i + 1}</td><td>${arr[i].name}</td><td>${arr[i].gender}</td><td>${arr[i].date}</td><td>${arr[i].address}</td> <td>${arr[i].telephone}</td><td>${arr[i].room}</td><td  id="th1">${arr[i].vehicle}</td><td>${arr[i].note}</td><td><button onclick='edit(${i})'>Edit</button></td><td><button onclick='deleteProduct(${i})'>Delete</button></td></tr>`;
    }
    return document.getElementById("residentList").innerHTML = `<table>${list}<tr id="tr1"><td>Tổng:</td><td colspan="10">${count}</td></tr></table>`;
}

displayList();

function deleteProduct(i) {
    let result = confirm("Suy nghĩ kỹ đi anh trai");
    if (result) {
        arr.splice(i, 1);
        alert("Ở dơ quá...Goodbye babe!")
        displayList();
    } else {
        alert("Nhớ lần sau đóng tiền nhé e")
    }
}

function addResident() {
    let temptPerson = new Person()
    const newName = document.getElementById("addName").value;
    const newGender = document.querySelector('input[name="Gender"]:checked').value;
    const newDate = document.getElementById("addDate").value;
    const newAddress = document.getElementById("addAddress").value;
    const newTelephone = document.getElementById("addTelephone").value;
    const newRoom = document.getElementById("addRoom").value;
    const newVehicle = document.getElementById("vehicle").value;
    const newNote = document.getElementById("note").value;
    temptPerson.setAll(newName, newGender, newDate, newAddress, newTelephone, newRoom, newVehicle,newNote)
    if (newName !== '' && newDate !== '' && newAddress !== '' && newTelephone && newRoom !== '') {
        arr.push(temptPerson)
    } else {
        alert("Vui lòng nhập đầy đủ thông tin!")
    }

    document.getElementById("updates").style.display="none";

    displayList();
    document.getElementById("myForm").reset();
}

function resetForm() {
    let reset = document.getElementById("updates")
    reset.innerHTML = '<form id="myForm" onSubmit="addResident(); return false;"> <p>Tên Cư Dân:<br> ' +
        '<input type="text" id="addName" placeholder="Enter Name"><br>Giới Tính:<br> ' +
        '<input type="radio" name="Gender" value="Male" checked>Male<br> ' +
        '<input type="radio" name="Gender" value="Female">Female<br> ' +
        '<input type="radio" name="Gender" value="Other">Other<br>Ngày Sinh:<br> ' +
        '<input type="date" id="addDate" placeholder="Enter Date"><br>Địa Chỉ TT:<br> ' +
        '<input type="text" id="addAddress" placeholder="Enter Address"><br>Số Điện Thoại:<br> ' +
        '<input type="number" maxLength="11" id="addTelephone" placeholder="Enter Telephone Number"><br>Số Căn Hộ:<br> ' +
        '<input type="text" id="addRoom" placeholder="Enter Room Number"><br>Phương Tiện:<br><form> ' +
        '<select id="vehicle"> ' +
        '<option value="Bike">Bike</option> ' +
        '<option value="Car">Car</option> ' +
        '</select><br>Note:<br>' +
        '<textarea id="note" placeholder="Enter 1 more information:" rows="5" cols="35"></textarea></br>' +
        '<button type="button" onclick="update()">Thêm cư dân</button></p></form>'
}

function edit(i) {
    document.getElementById("updates").style.display="block";
    let upDate = document.getElementById("updates")
    upDate.innerHTML = '<form id="myForm" onSubmit="addResident(); return false;"> <p>Tên Cư Dân:<br> ' +
        '<input type="text" id="addName" placeholder="Enter Name"><br>Giới Tính:<br> ' +
        '<input type="radio" name="Gender" value="Male" checked>Male<br> ' +
        '<input type="radio" name="Gender" value="Female">Female<br> ' +
        '<input type="radio" name="Gender" value="Other">Other<br>Ngày Sinh:<br> ' +
        '<input type="date" id="addDate" placeholder="Enter Date"><br>Địa Chỉ TT:<br> ' +
        '<input type="text" id="addAddress" placeholder="Enter Address"><br>Số Điện Thoại:<br> ' +
        '<input type="number" maxLength="11" id="addTelephone" placeholder="Enter Telephone Number"><br>Số Căn Hộ:<br> ' +
        '<input type="text" id="addRoom" placeholder="Enter Room Number"><br>Phương Tiện:<br><form> ' +
        '<select id="vehicle"> ' +
        '<option value="Bike">Bike</option> ' +
        '<option value="Car">Car</option> ' +
        '</select><br>Note:<br>' +
        '<textarea id="note" placeholder="Enter 1 more information:" rows="5" cols="35"></textarea><br>' +
        '<button type="button" onclick="update()">Update</button></form>'
    upDate.scrollIntoView();

    document.getElementById('addName').value = arr[i].getName();
    document.querySelector('input[name="Gender"]:checked').value = arr[i].getGender();
    document.getElementById('addDate').value = arr[i].getDate();
    document.getElementById('addRoom').value = arr[i].getRoom();
    document.getElementById('addAddress').value = arr[i].getAddress();
    document.getElementById('addTelephone').value = arr[i].getTelephone();
    document.getElementById('vehicle').value = arr[i].getVehicle();
    document.getElementById('note').value = arr[i].getNote();

    this.update = function () {
        let ptPerson = new Person()
        const ewName = document.getElementById("addName").value;
        const ewGender = document.querySelector('input[name="Gender"]:checked').value;
        const ewDate = document.getElementById("addDate").value;
        const ewAddress = document.getElementById("addAddress").value;
        const ewTelephone = document.getElementById("addTelephone").value;
        const ewRoom = document.getElementById("addRoom").value;
        const ewVehicle = document.getElementById("vehicle").value;
        const ewNote = document.getElementById("note").value;
        ptPerson.setAll(ewName, ewGender, ewDate, ewAddress, ewTelephone, ewRoom, ewVehicle,ewNote)
        if (ewName !== '' && ewDate !== '' && ewAddress !== '' && ewTelephone && ewRoom !== '') {
            arr[i] = ptPerson
            document.getElementById("updates").style.display="none";
            displayList()
            document.getElementById("myForm").reset();
            resetForm();
        } else {
            alert("Vui lòng nhập đầy đủ thông tin!")
        }
    }
}

function addRes(){
    document.getElementById("updates").style.display = "block";
}