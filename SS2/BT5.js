let phoneBooks = [];

function addContact() {
    let name = prompt("Nhập tên liên hệ:");
    let phone = prompt("Nhập số điện thoại:");
    let email = prompt("Nhập email:");

    if (name && phone && email) {
        phoneBooks.push({ name: name, phone: phone, email: email });
        console.log(`Đã thêm liên hệ: ${name} - ${phone} - ${email}`);
    } else {
        console.log("Thông tin không hợp lệ. Vui lòng nhập đầy đủ tên, số điện thoại và email.");
    }
}

function displayContact() {
    if (phoneBooks.length === 0) {
        console.log("Danh bạ rỗng.");
    } else {
        console.log("Danh sách liên hệ:");
        phoneBooks.forEach(contact => {
            console.log(`${contact.name} - ${contact.phone} - ${contact.email}`);
        });
    }
}

addContact();
displayContact();
