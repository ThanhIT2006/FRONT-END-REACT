class Product {
    id;
    name;
    price;
    stock;
    constructor(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    sell(quantity) {
        if (quantity <= this.stock) {
            this.stock -= quantity;
        }
    }
    restock(quantity) {
        this.stock += quantity;
    }
}
class ElectronicsProduct extends Product {
    warrantyPeriod;
    constructor(id, name, price, stock, warrantyPeriod) {
        super(id, name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }
    getProductInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Stock: ${this.stock}, Category: ${this.getCategory()}, Warranty: ${this.warrantyPeriod} months`;
    }
    getShippingCost() {
        return 50000;
    }
    getCategory() {
        return "Electronics";
    }
}
class ClothingProduct extends Product {
    size;
    color;
    constructor(id, name, price, stock, size, color) {
        super(id, name, price, stock);
        this.size = size;
        this.color = color;
    }
    getProductInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Stock: ${this.stock}, Category: ${this.getCategory()}, Size: ${this.size}, Color: ${this.color}`;
    }
    getShippingCost() {
        return 25000;
    }
    getCategory() {
        return "Clothing";
    }
}
class Customer {
    id;
    name;
    email;
    shippingAddress;
    constructor(id, name, email, shippingAddress) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Address: ${this.shippingAddress}`;
    }
}
class Order {
    orderId;
    customer;
    products;
    totalAmount;
    constructor(orderId, customer, products, totalAmount) {
        this.orderId = orderId;
        this.customer = customer;
        this.products = products;
        this.totalAmount = totalAmount;
    }
    getDetails() {
        let items = this.products.map(p => `${p.product.name} (x${p.quantity})`).join(", ");
        return `Order ID: ${this.orderId}, Customer: ${this.customer.name}, Products: ${items}, Total: ${this.totalAmount}`;
    }
}
class Store {
    products = [];
    customers = [];
    orders = [];
    addProduct() {
        const id = this.products.length + 1;
        const type = prompt("Chọn loại sản phẩm: 1. Electronics  2. Clothing") || "";
        const name = prompt("Tên sản phẩm:") || "";
        const price = Number(prompt("Giá:"));
        const stock = Number(prompt("Tồn kho:"));
        if (type === "1") {
            const warranty = Number(prompt("Thời gian bảo hành (tháng):"));
            this.products.push(new ElectronicsProduct(id, name, price, stock, warranty));
        }
        else if (type === "2") {
            const size = prompt("Kích cỡ:") || "";
            const color = prompt("Màu sắc:") || "";
            this.products.push(new ClothingProduct(id, name, price, stock, size, color));
        }
        else {
            alert("Loại sản phẩm không hợp lệ!");
        }
        alert("Đã thêm sản phẩm!");
    }
    addCustomer() {
        const id = this.customers.length + 1;
        const name = prompt("Tên khách hàng:") || "";
        const email = prompt("Email:") || "";
        const address = prompt("Địa chỉ:") || "";
        this.customers.push(new Customer(id, name, email, address));
        alert("Đã thêm khách hàng!");
    }
    createOrder() {
        const customerId = Number(prompt("Nhập ID khách hàng:"));
        const customer = this.findEntityById(this.customers, customerId);
        if (!customer) {
            alert("Không tìm thấy khách hàng!");
            return;
        }
        let items = [];
        let total = 0;
        let more = true;
        while (more) {
            const productId = Number(prompt("Nhập ID sản phẩm:"));
            const quantity = Number(prompt("Nhập số lượng:"));
            const product = this.findEntityById(this.products, productId);
            if (!product || product.stock < quantity) {
                alert("Sản phẩm không tồn tại hoặc tồn kho không đủ!");
            }
            else {
                product.sell(quantity);
                total += product.price * quantity;
                items.push({ product, quantity });
            }
            more = confirm("Thêm sản phẩm khác vào đơn hàng?");
        }
        const orderId = this.orders.length + 1;
        const order = new Order(orderId, customer, items, total);
        this.orders.push(order);
        alert("Đã tạo đơn hàng:\n" + order.getDetails());
    }
    cancelOrder() {
        const orderId = Number(prompt("Nhập ID đơn hàng cần hủy:"));
        const order = this.orders.find(o => o.orderId === orderId);
        if (!order) {
            alert("Không tìm thấy đơn hàng!");
            return;
        }
        order.products.forEach(item => item.product.restock(item.quantity));
        this.orders = this.orders.filter(o => o.orderId !== orderId);
        alert("Đơn hàng đã được hủy!");
    }
    listAvailableProducts() {
        const available = this.products.filter(p => p.stock > 0);
        if (available.length === 0) {
            alert("Không có sản phẩm nào còn hàng!");
            return;
        }
        alert(available.map(p => p.getProductInfo()).join("\n"));
    }
    listCustomerOrders() {
        const customerId = Number(prompt("Nhập ID khách hàng:"));
        const orders = this.orders.filter(o => o.customer.id === customerId);
        if (orders.length === 0) {
            alert("Khách hàng này chưa có đơn hàng!");
            return;
        }
        alert(orders.map(o => o.getDetails()).join("\n"));
    }
    calculateTotalRevenue() {
        const total = this.orders.reduce((sum, o) => sum + o.totalAmount, 0);
        alert(`Tổng doanh thu: ${total}`);
    }
    countProductsByCategory() {
        const stats = this.products.reduce((acc, p) => {
            const cat = p.getCategory();
            acc[cat] = (acc[cat] || 0) + 1;
            return acc;
        }, {});
        alert(JSON.stringify(stats, null, 2));
    }
    updateProductStock() {
        const productId = Number(prompt("Nhập ID sản phẩm:"));
        const newStock = Number(prompt("Nhập số lượng tồn kho mới:"));
        if (isNaN(newStock) || newStock < 0) {
            alert("Số lượng tồn kho không hợp lệ!");
            return;
        }
        const product = this.findEntityById(this.products, productId);
        if (!product) {
            alert("Không tìm thấy sản phẩm!");
            return;
        }
        product.stock = newStock;
        alert(`Đã cập nhật tồn kho của sản phẩm "${product.name}" thành ${newStock}`);
    }
    searchById() {
        const type = prompt("Tìm kiếm: 1. Customer  2. Product") || "";
        const id = Number(prompt("Nhập ID:"));
        if (type === "1") {
            const customer = this.findEntityById(this.customers, id);
            alert(customer ? customer.getDetails() : "Không tìm thấy khách hàng!");
        }
        else if (type === "2") {
            const product = this.findEntityById(this.products, id);
            alert(product ? product.getProductInfo() : "Không tìm thấy sản phẩm!");
        }
        else {
            alert("Lựa chọn không hợp lệ!");
        }
    }
    viewProductDetails() {
        const productId = Number(prompt("Nhập ID sản phẩm:"));
        const product = this.findEntityById(this.products, productId);
        if (!product) {
            alert("Không tìm thấy sản phẩm!");
            return;
        }
        alert(product.getProductInfo());
    }
    findEntityById(collection, id) {
        return collection.find(item => item.id === id);
    }
}
function mainMenu() {
    const store = new Store();
    let exit = false;
    do {
        const choice = prompt("===== MENU =====\n" +
            "1. Thêm sản phẩm\n" +
            "2. Thêm khách hàng\n" +
            "3. Tạo đơn hàng\n" +
            "4. Hủy đơn hàng\n" +
            "5. Hiển thị sản phẩm còn hàng\n" +
            "6. Hiển thị đơn hàng của khách hàng\n" +
            "7. Tính tổng doanh thu\n" +
            "8. Thống kê sản phẩm theo danh mục\n" +
            "9. Cập nhật số lượng tồn kho\n" +
            "10. Tìm kiếm theo ID\n" +
            "11. Xem chi tiết sản phẩm\n" +
            "0. Thoát\n" +
            "Nhập lựa chọn:");
        switch (choice) {
            case "1":
                store.addProduct();
                break;
            case "2":
                store.addCustomer();
                break;
            case "3":
                store.createOrder();
                break;
            case "4":
                store.cancelOrder();
                break;
            case "5":
                store.listAvailableProducts();
                break;
            case "6":
                store.listCustomerOrders();
                break;
            case "7":
                store.calculateTotalRevenue();
                break;
            case "8":
                store.countProductsByCategory();
                break;
            case "9":
                store.updateProductStock();
                break;
            case "10":
                store.searchById();
                break;
            case "11":
                store.viewProductDetails();
                break;
            case "0":
                exit = true;
                break;
            default: alert("Lựa chọn không hợp lệ!");
        }
    } while (!exit);
}
mainMenu();
export {};
//# sourceMappingURL=HackathonTest.js.map