class Audience {
    id: number;
    name: string;
    email: string;
    phone: string;
    constructor(id: number, name: string, email: string, phone: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    getDetail(): string {
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`;
    }
}

abstract class Movie {
    id: number;
    title: string;
    genre: string;
    ticketPrice: number;
    isShowing: boolean;
    constructor(id: number, title: string, genre: string, ticketPrice: number, isShowing: boolean) {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.ticketPrice = ticketPrice;
        this.isShowing = isShowing;
    }
    startShow(): void {
        this.isShowing = true;
    }
    stopShow(): void {
        this.isShowing = false;
    }

    abstract calculateTicketCost(quantity: number): number;
    abstract getSpecialOffer(): string[];
    abstract getMovieInfo(): string;
}

class ActionMovie extends Movie {
    calculateTicketCost(quantity: number): number {
        return this.ticketPrice * quantity;
    }
    getSpecialOffer(): string[] {
        return ["Miễn phí bắp rang", "Tặng poster"];
    }
    getMovieInfo(): string {
        return `Phim hành động gay cấn, kỹ xảo hoành tráng`;
    }
}

class ComedyMovie extends Movie {
    calculateTicketCost(quantity: number): number {
        if (quantity > 4) {
            return this.ticketPrice * quantity * 0.9; // giảm 10% nếu mua > 4 vé
        }
        return this.ticketPrice * quantity;
    }
    getSpecialOffer(): string[] {
        return ["Giảm 10% cho nhóm trên 4 người"];
    }
    getMovieInfo(): string {
        return `Phim hài nhẹ nhàng, vui nhộn`;
    }
}

class AnimationMovie extends Movie {
    calculateTicketCost(quantity: number): number {
        return this.ticketPrice * quantity;
    }
    getSpecialOffer(): string[] {
        return ["Giảm giá cho trẻ em dưới 12 tuổi"];
    }
    getMovieInfo(): string {
        return `Phim hoạt hình với hình ảnh sống động`;
    }
}

class TicketBooking {
    bookingId: number;
    audience: Audience;
    movie: Movie;
    quantity: number;
    totalPrice: number;
    constructor(bookingId: number, audience: Audience, movie: Movie, quantity: number) {
        this.bookingId = bookingId;
        this.audience = audience;
        this.movie = movie;
        this.quantity = quantity;
        this.totalPrice = movie.calculateTicketCost(quantity);
    }
    getDetail(): string {
        return `Booking Id: ${this.bookingId}, Audience: ${this.audience.getDetail()}, Movie: ${this.movie.title}, Quantity: ${this.quantity}, TotalPrice: ${this.totalPrice}`;
    }
}

class Cinema {
    movies: Movie[];
    audiences: Audience[];
    bookings: TicketBooking[];
    constructor(movies: Movie[], audiences: Audience[], bookings: TicketBooking[]) {
        this.movies = movies;
        this.audiences = audiences;
        this.bookings = bookings;
    }

    addMovie(): void {
        const id = this.movies.length + 1;
        const name = prompt("Nhập tên phim:") || "";
        const genreChoice = prompt("Chọn loại phim: 1. Hành động  2. Hài  3. Hoạt hình") || "";
        const price = Number(prompt("Giá vé:"));
        if (genreChoice === "1") {
            this.movies.push(new ActionMovie(id, name, "Action", price, true));
        } else if (genreChoice === "2") {
            this.movies.push(new ComedyMovie(id, name, "Comedy", price, true));
        } else if (genreChoice === "3") {
            this.movies.push(new AnimationMovie(id, name, "Animation", price, true));
        } else {
            alert("Loại phim không hợp lệ!");
            return;
        }
        alert("Thêm phim thành công!");
    }

    addAudience(): void {
        const id = this.audiences.length + 1;
        const name = prompt("Tên Khán giả:") || "";
        const email = prompt("Email:") || "";
        const phone = prompt("Số điện thoại:") || "";
        this.audiences.push(new Audience(id, name, email, phone));
        alert("Thêm khán giả thành công!");
    }

    bookTickets(): void {
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

    cancelMovie(): void {
        const movieId = Number(prompt("Nhập ID phim cần hủy:"));
        const movie = this.findMovieById(this.movies, movieId);
        if (!movie) {
            alert("Không tìm thấy phim!");
            return;
        }
        movie.stopShow();
        alert("Phim đã ngừng chiếu!");
    }

    listShowingMovies(): void {
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

    listAudienceBookings(): void {
        const audienceId = Number(prompt("Nhập ID khách hàng:"));
        const orders = this.bookings.filter(o => o.audience.id === audienceId);
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

    getMovieGenreCount(): void {
        const genreCount = this.movies.reduce((acc: { [key: string]: number }, movie) => {
            acc[movie.genre] = (acc[movie.genre] || 0) + 1;
            return acc;
        }, {});
        let msg = "Số lượng phim theo thể loại:\n";
        for (let genre in genreCount) {
            msg += `${genre}: ${genreCount[genre]}\n`;
        }
        alert(msg);
    }

    getMovieSpecialOffers(movieId: number): void {
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

    searchById(): void {
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

    findMovieById(collection: Movie[], id: number): Movie | undefined {
        return collection.find(item => item.id === id);
    }
    findAudienceById(collection: Audience[], id: number): Audience | undefined {
        return collection.find(item => item.id === id);
    }
    findTicketBookingById(collection: TicketBooking[], id: number): TicketBooking | undefined {
        return collection.find(item => item.bookingId === id);
    }
}

function MainMenu() {
    const cinema = new Cinema([], [], []);
    let choice = 0;
    do {
        choice = Number(prompt(
            "===== MENU =====\n" +
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
            "Nhập lựa chọn:"
        ));
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
