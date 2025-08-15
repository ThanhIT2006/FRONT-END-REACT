class Audience{
    id: number;
    name:string;
    email:string;
    phone:string;
    constructor(id:number,name:string,email:string,phone:string){
        this.id=id;
        this.name=name;
        this.email=email;
        this.phone=phone;
    }
    getDetail():string{
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`;
    }
}
abstract class Movie{
    id:number;
    title:string;
    genre:string;
    ticketPrice:number;
    isShowing:boolean;
    constructor(id:number,title:string,genre:string,ticketPrice:number,isShowing:boolean){
        this.id=id;
        this.title=title;
        this.genre=genre;
        this.ticketPrice=ticketPrice;
        this.isShowing=isShowing;
    }
    startShow():void{
        this.isShowing=true;
    }
    stopShow():void{
        this.isShowing=false;
    }
    
    abstract calculateTicketCost(quantity:number):number;
    abstract getSpecialOffer():string[];
    abstract getMovieInfo():string;
}
class ActionMovie extends Movie{
    constructor(id:number,title:string,genre:string,ticketPrice:number,isShowing:boolean){
        super(id,title,genre,ticketPrice,isShowing);
    }
    calculateTicketCost(quantity:number):number{
        return this.ticketPrice * quantity;
    }
    getSpecialOffer():string[]{
        return ["Mien phi bap rang", "Tang poster"];
    }
    getMovieInfo():string{
        return `Phim hanh dong gay can, ky xoa hoanh trang`;
    }
}
class ComedyMovie extends Movie{
    constructor(id:number,title:string,genre:string,ticketPrice:number,isShowing:boolean){
        super(id,title,genre,ticketPrice,isShowing);
    }
    calculateTicketCost(quantity:number):number{
        return this.ticketPrice * quantity;
    }
    getSpecialOffer():string[]{
        return ["Giam 10% cho nhom tren 4 nguoi"];
    }
    getMovieInfo():string{
        return `Phim hai nhe nhang vui nhon`;
    }
}
class AnimationMovie extends Movie{
    constructor(id:number,title:string,genre:string,ticketPrice:number,isShowing:boolean){
        super(id,title,genre,ticketPrice,isShowing);
    }
    calculateTicketCost(quantity:number):number{
        return this.ticketPrice * quantity;
    }
    getSpecialOffer():string[]{
        return ["Giam gia cho tre duoi 12 tuoi"];
    }
    getMovieInfo():string{
        return `Phim hoat hinh voi hinh anh song dong`;
    }
}
class TicketBooking{
    bookingId:number;
    audience:Audience;
    movie:Movie;
    quantity:number;
    totalPrice:number;
    constructor(bookingId:number,audience:Audience,movie:Movie,quantity:number,totalPrice:number){
        this.bookingId=bookingId;
        this.audience=audience;
        this.movie=movie;
        this.quantity=quantity;
        this.totalPrice=totalPrice;
    }
    getDetail():string{
        return `Booking Id: ${this.bookingId}, Audience: ${this.audience}, Movie: ${this.movie},Quantity: ${this.quantity},TotalPrice: ${this.totalPrice}`;
    }
}
class Cinema{
    movie:Movie[];
    audience:Audience[];
    bookings:TicketBooking[];
    constructor(movie:Movie[],audience:Audience[],bookings:TicketBooking[]){
        this.movie=movie;
        this.audience=audience;
        this.bookings=bookings;
    }
    addMovie():void{
        const id=this.movie.length+1;
        const name=prompt("Nhập tên phim:") || "";
        const genre = prompt("Chọn loại phim: 1. Hành động  2. Hài  3. Hoạt hình") || "";
        const price = Number(prompt("Giá:"));
        if(genre === "1"){
            this.movie.push(new ActionMovie(id,name,genre,price,true));
        }else if(genre === "2"){
            this.movie.push(new ComedyMovie(id,name,genre,price,true));
        }else if(genre === "3"){
            this.movie.push(new AnimationMovie(id,name,genre,price,true));
        }else{
            alert("Loại phim không hợp lệ!");
        }
        alert("Thêm phim thành công!");
    }
    addAudience():void{
        const id = this.audience.length + 1;
        const name = prompt("Tên Khán giả:") || "";
        const email = prompt("Email:") || "";
        const phone = prompt("Số điện thoại:") || "";
        this.audience.push(new Audience(id,name,email,phone));
        alert("Thêm khán giả thành công!");
    }
    bookTickets():void{
        const AudienceId=Number(prompt("Nhập ID Khán giả:"));
        const Audience = this.findTicketBookingById(this.audience,AudienceId);
         if (!Audience) {
            alert("Không tìm thấy Khán giả!");
            return;
        }
        let items: { movie: Movie; quantity: number }[] = [];
        let total = 0;
        let more = true;
        while (more) {
            const movieId = Number(prompt("Nhập ID phim:"));
            const quantity = Number(prompt("Nhập số lượng vé:"));
            const movie = this.findTicketBookingById(this.movie, movieId);

            if (!movie) {
                alert("Phim không tồn tại!");
            } else {
                total += items.reduce((sum, item) => sum + item.movie.ticketPrice * item.quantity, 0);
                items.push({ movie, quantity });
            }
            more = confirm("Thêm phim khác vào đơn hàng?");
        }
        const TicketBookingId = this.bookings.length + 1;
        // const booking = new TicketBooking(TicketBookingId, Audience, items, total,);
        // this.bookings.push(booking);
        // alert("Đã tạo vé:\n" + booking.getDetail());
    }
    cancelMovie(): void {
        const movieId = Number(prompt("Nhập ID phim cần hủy:"));
        const movie = this.movie.find(m => m.id === movieId);
        if (!movie) {
            alert("Không tìm thấy phim!");
            return;
        }
        this.movie = this.movie.filter(m => m.id !== movieId);
        alert("Phim đã được hủy!");
    }
    listShowingMovies(): void {
        const available = this.movie.filter(m => m.isShowing);
        if (available.length === 0) {
            alert("Không còn phim nào còn chiếu!");
            return;
        }
        let message = "Danh sách phim đang chiếu:\n";
        available.forEach(m => {
            message += `- ${m.title}\n`;
        });
        alert(message);
    }
    listAudienceBookings(): void {
        const AudienceId = Number(prompt("Nhập ID khách hàng:"));
        const orders = this.bookings.filter(o => o.audience.id === AudienceId);
        if (orders.length === 0) {
            alert("Khách hàng này chưa có đơn hàng!");
            return;
        }
        alert(orders.map(o => o.getDetail()).join("\n"));
    }
    calculateTotalRevenue(): void {
        const total = this.bookings.reduce((sum, o) => sum + o.totalPrice, 0);
        alert(`Tổng doanh thu: ${total}`);
    }
    getMovieSpecialOffers(movieId: number): void{
        const movie = this.findTicketBookingById(this.movie, movieId);
        if (!movie) {
            alert("Không tìm thấy phim!");
            return;
        }
        const offers = movie.getSpecialOffer();
        if (offers.length === 0) {
            alert("Phim này không có ưu đãi nào!");
            return;
        }
        alert("Ưu đãi của phim:\n" + offers.join("\n"));
    }
    findMovieById (collection: Movie[], id: number): Movie | undefined{
        return collection.find(item => item.id === id);
    }
    findAudienceById (collection: Audience[], id: number):  Audience | undefined {
        return collection.find(item => item.id === id);
    }
    findTicketBookingById<TicketBooking extends { id: number }>(collection: TicketBooking[], id: number): TicketBooking | undefined {
        return collection.find(item => item.id === id);
    }
}

function MainMenu(){
    const cinema=new Cinema([],[],[]);
    let choice=0;
    do{
        choice=Number(prompt(
            "===== MENU =====\n" +
            "1. Thêm khán giả mới\n" +
            "2. Thêm phim mới\n" +
            "3. Đặt vé\n" +
            "4. Ngừng chiếu phim\n" +
            "5. Hiển thị danh sách phim đang chiếu\n" +
            "6. Hiển thị các đặt vé của một khán giả \n" +
            "7. Tính và hiển thị tổng doanh thu \n" +
            "8. Đếm số lượng từng thể loại phim\n" +
            "9. Tìm kiếm và hiển thị thông tin bằng mã định danh\n" +
            "10. Hiển thị ưu đãi của một phim\n" +
            "11. Thoát\n" +
            "Nhập lựa chọn:"
        ));
        switch(choice){
            case 1:
                cinema.addAudience();
                break;
            case 2:
                cinema.addMovie();
                break;
            case 3:
                break;
            case 4:
                cinema.cancelMovie();
                break;
            case 5:
                cinema.listShowingMovies();
                break;
            case 6:
                cinema.listAudienceBookings();
                break;
            case 7:
                cinema.calculateTotalRevenue();
                break;
            case 8:
                break;
            case 9:
                const id = Number(prompt("Nhập ID để tìm kiếm:"));
                cinema.findMovieById(cinema.movie,id);
                break;
            case 10:
                const movieId = Number(prompt("Nhập ID phim:"));
                cinema.getMovieSpecialOffers(movieId);
                break;
            case 11:
                alert("Xin chào tạm biệt!");
                break;
            default:
                alert("Lựa chọn không hợp lệ!");
        }
    }while(choice !==11);
}
MainMenu();