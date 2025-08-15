class Audience {
    id;
    name;
    email;
    phone;
    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    getDetail() {
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`;
    }
}
class Movie {
    id;
    title;
    genre;
    ticketPrice;
    isShowing;
    constructor(id, title, genre, ticketPrice, isShowing) {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.ticketPrice = ticketPrice;
        this.isShowing = isShowing;
    }
    startShow() {
        this.isShowing = true;
    }
    stopShow() {
        this.isShowing = false;
    }
}
class ActionMovie extends Movie {
    calculateTicketCost(quantity) {
        return this.ticketPrice * quantity;
    }
    getSpecialOffer() {
        return ["Miễn phí bắp rang", "Tặng poster"];
    }
    getMovieInfo() {
        return `Phim hành động gay cấn, kỹ xảo hoành tráng`;
    }
}
class ComedyMovie extends Movie {
    calculateTicketCost(quantity) {
        if (quantity > 4) {
            return this.ticketPrice * quantity * 0.9; // giảm 10% nếu mua > 4 vé
        }
        return this.ticketPrice * quantity;
    }
    getSpecialOffer() {
        return ["Giảm 10% cho nhóm trên 4 người"];
    }
    getMovieInfo() {
        return `Phim hài nhẹ nhàng, vui nhộn`;
    }
}
class AnimationMovie extends Movie {
    calculateTicketCost(quantity) {
        return this.ticketPrice * quantity;
    }
    getSpecialOffer() {
        return ["Giảm giá cho trẻ em dưới 12 tuổi"];
    }
    getMovieInfo() {
        return `Phim hoạt hình với hình ảnh sống động`;
    }
}
class TicketBooking {
    bookingId;
    audience;
    movie;
    quantity;
    totalPrice;
    constructor(bookingId, audience, movie, quantity) {
        this.bookingId = bookingId;
        this.audience = audience;
        this.movie = movie;
        this.quantity = quantity;
        this.totalPrice = movie.calculateTicketCost(quantity);
    }
    getDetail() {
        return `Booking Id: ${this.bookingId}, Audience: ${this.audience.getDetail()}, Movie: ${this.movie.title}, Quantity: ${this.quantity}, TotalPrice: ${this.totalPrice}`;
    }
}
class Cinema {
    movies;
    audiences;
    bookings;
    constructor(movies, audiences, bookings) {
        this.movies = movies;
        this.audiences = audiences;
        this.bookings = bookings;
    }
    addMovie() {
        const id = this.movies.length + 1;
        const name = prompt("Nhập tên phim:") || "";
        const genreChoice = prompt("Chọn loại phim: 1. Hành động  2. Hài  3. Hoạt hình") || "";
        const price = Number(prompt("Giá vé:"));
        if (genreChoice === "1") {
            this.movies.push(new ActionMovie(id, name, "Action", price, true));
        }
        else if (genreChoice === "2") {
            this.movies.push(new ComedyMovie(id, name, "Comedy", price, true));
        }
        else if (genreChoice === "3") {
            this.movies.push(new AnimationMovie(id, name, "Animation", price, true));
        }
        else {
            alert("Loại phim không hợp lệ!");
            return;
        }
        alert("Thêm phim thành công!");
    }
    addAudience() {
        const id = this.audiences.length + 1;
        const name = prompt("Tên Khán giả:") || "";
        const email = prompt("Email:") || "";
        const phone = prompt("Số điện thoại:") || "";
        this.audiences.push(new Audience(id, name, email, phone));
        alert("Thêm khán giả thành công!");
    }
    bookTickets() {
        const audienceId = Number(prompt("Nhập ID Khán giả:"));
        const audience = this.findAudienceById(this.audiences, audienceId);
        if (!audience) {
            alert("Không tìm thấy Khán giả!");
            return;
        }
        const movieId = Number(prompt("Nhập ID phim:"));
        const movie = this.findMovieById(this.movies, movieId);
        if (!movie) {
            alert("Phim không tồn tại!");
            return;
        }
        if (!movie.isShowing) {
            alert("Phim này đã ngừng chiếu!");
            return;
        }
        const quantity = Number(prompt("Nhập số lượng vé:"));
        if (quantity <= 0 || isNaN(quantity)) {
            alert("Số lượng vé không hợp lệ!");
            return;
        }
        const bookingId = this.bookings.length + 1;
        const booking = new TicketBooking(bookingId, audience, movie, quantity);
        this.bookings.push(booking);
        alert("Đã tạo vé:\n" + booking.getDetail());
    }
    cancelMovie() {
        const movieId = Number(prompt("Nhập ID phim cần hủy:"));
        const movie = this.findMovieById(this.movies, movieId);
        if (!movie) {
            alert("Không tìm thấy phim!");
            return;
        }
        movie.stopShow();
        alert("Phim đã ngừng chiếu!");
    }
    listShowingMovies() {
        const available = this.movies.filter(m => m.isShowing);
        if (available.length === 0) {
            alert("Không còn phim nào đang chiếu!");
            return;
        }
        let message = "Danh sách phim đang chiếu:\n";
        available.forEach(m => {
            message += `- ${m.title} (${m.genre})\n`;
        });
        alert(message);
    }
    listAudienceBookings() {
        const audienceId = Number(prompt("Nhập ID khách hàng:"));
        const orders = this.bookings.filter(o => o.audience.id === audienceId);
        if (orders.length === 0) {
            alert("Khách hàng này chưa có đơn hàng!");
            return;
        }
        alert(orders.map(o => o.getDetail()).join("\n"));
    }
    calculateTotalRevenue() {
        const total = this.bookings.reduce((sum, o) => sum + o.totalPrice, 0);
        alert(`Tổng doanh thu: ${total}`);
    }
    getMovieGenreCount() {
        const genreCount = this.movies.reduce((acc, movie) => {
            acc[movie.genre] = (acc[movie.genre] || 0) + 1;
            return acc;
        }, {});
        let msg = "Số lượng phim theo thể loại:\n";
        for (let genre in genreCount) {
            msg += `${genre}: ${genreCount[genre]}\n`;
        }
        alert(msg);
    }
    getMovieSpecialOffers(movieId) {
        const movie = this.findMovieById(this.movies, movieId);
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
    searchById() {
        const id = Number(prompt("Nhập ID để tìm kiếm:"));
        let movie = this.findMovieById(this.movies, id);
        if (movie) {
            alert(`Thông tin phim:\n${movie.getMovieInfo()}\nGiá vé: ${movie.ticketPrice}`);
            return;
        }
        let audience = this.findAudienceById(this.audiences, id);
        if (audience) {
            alert(`Thông tin khán giả:\n${audience.getDetail()}`);
            return;
        }
        let booking = this.findTicketBookingById(this.bookings, id);
        if (booking) {
            alert(`Thông tin đặt vé:\n${booking.getDetail()}`);
            return;
        }
        alert("Không tìm thấy dữ liệu!");
    }
    findMovieById(collection, id) {
        return collection.find(item => item.id === id);
    }
    findAudienceById(collection, id) {
        return collection.find(item => item.id === id);
    }
    findTicketBookingById(collection, id) {
        return collection.find(item => item.bookingId === id);
    }
}
function MainMenu() {
    const cinema = new Cinema([], [], []);
    let choice = 0;
    do {
        choice = Number(prompt("===== MENU =====\n" +
            "1. Thêm khán giả mới\n" +
            "2. Thêm phim mới\n" +
            "3. Đặt vé\n" +
            "4. Ngừng chiếu phim\n" +
            "5. Hiển thị danh sách phim đang chiếu\n" +
            "6. Hiển thị các đặt vé của một khán giả\n" +
            "7. Tính và hiển thị tổng doanh thu\n" +
            "8. Đếm số lượng từng thể loại phim\n" +
            "9. Tìm kiếm và hiển thị thông tin bằng mã định danh\n" +
            "10. Hiển thị ưu đãi của một phim\n" +
            "11. Thoát\n" +
            "Nhập lựa chọn:"));
        switch (choice) {
            case 1:
                cinema.addAudience();
                break;
            case 2:
                cinema.addMovie();
                break;
            case 3:
                cinema.bookTickets();
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
                cinema.getMovieGenreCount();
                break;
            case 9:
                cinema.searchById();
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
    } while (choice !== 11);
}
MainMenu();
export {};
//# sourceMappingURL=HN_PTIT_CNTT5_NguyenNgocThanh_006.js.map