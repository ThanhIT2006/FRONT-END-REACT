type Product = {
    id: string;
    name: string;
    price: number;
    category: {
        id: string;
        name: string;
    };
    discount?: number; // optional
};
let listProducts: Product[] = [
    {
        id: "P001",
        name: "Ao thun",
        price: 200000,
        category: {
            id: "C001",
            name: "Thoi trang"
        },
        discount: 10
    },
    {
        id: "P002",
        name: "Quan jean",
        price: 300000,
        category: {
            id: "C001",
            name: "Thoi trang"
        }
    }
    ,
    {
        id: "P003",
        name: "Giay the thao",
        price: 500000,
        category: {
            id: "C002",
            name: "The thao"
        },
        discount: 5
    }
];
function getfinalprice(product: Product): number {
    if (product.discount) {
        return product.price - (product.price * product.discount / 100);
    }
    return product.price;
}
function printProductInfo(product: Product): void {
    const finalPrice = getfinalprice(product);
    console.log(`\tTen: ${product.name}
    Gia goc: ${product.price} VND
    Gia sau giam: ${finalPrice} VND
    Danh muc: ${product.category.name}`);
}
listProducts.forEach(product => printProductInfo(product));