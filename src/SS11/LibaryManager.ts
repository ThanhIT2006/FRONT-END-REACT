class Member {
  memberId: number;
  name: string;
  contact: string;
  borrowedItems: libraryItem[] = [];
  constructor(memberId: number, name: string, contact: string) {
    this.memberId = memberId;
    this.name = name;
    this.contact = contact;
  }
  getDetail(): string {
    return `ID: ${this.memberId}, Name: ${this.name}, Contact: ${
      this.contact
    }, Borrowed Items: ${this.borrowedItems.toString()}`;
  }
}
abstract class libraryItem {
  itemId: number;
  title: string;
  isAvailable: boolean = true;
  constructor(itemId: number, title: string) {
    this.itemId = itemId;
    this.title = title;
  }
  borrowItem(): void {}
  returnItem(): void {}
  abstract calculateLateFee(dayOverdue: number): number;
  abstract getLoanPeriod(): number;
  abstract getItemType(): string;
}
class Book extends libraryItem {
  author: string;
  constructor(itemId: number, title: string, author: string) {
    super(itemId, title);
    this.author = author;
  }
  calculateLateFee(dayOverdue: number): number {
    return 30000;
  }
  getLoanPeriod(): number {
    return 10;
  }
  getItemType(): string {
    return "Book";
  }
}
class Magazine extends libraryItem {
  issueNumber: number;
  constructor(itemId: number, title: string, issueNumber: number) {
    super(itemId, title);
    this.issueNumber = issueNumber;
  }
  calculateLateFee(dayOverdue: number): number {
    return 7;
  }
  getLoanPeriod(): number {
    return 5;
  }
  getItemType(): string {
    return "Magazine";
  }
}
class Loan {
  loanId: number;
  member: Member;
  item: libraryItem;
  dueDate: Date;
  isReturned: boolean;
  constructor(
    loanId: number,
    member: Member,
    item: libraryItem,
    dueDate: Date,
    isReturned: boolean
  ) {
    this.loanId = loanId;
    this.member = member;
    this.item = item;
    this.dueDate = dueDate;
    this.isReturned = isReturned;
  }
  getDetail(): string {
    return `Loan ID: ${
      this.loanId
    }, Member: ${this.member.getDetail()}, Item ID: ${
      this.item.itemId
    }, Item Title: ${this.item.title}, Due Date: ${this.dueDate}`;
  }
}
/////////////////////////////////////////
class Library {
  items: libraryItem[] = [];
  members: Member[] = [];
  loans: Loan[] = [];
  addItem(item: libraryItem): void {
    this.items.push(item);
  }
  addMember(name: string, contact: string): Member | null {
    if (name && contact) {
      let newMember = new Member(this.members.length + 1, name, contact);
      this.members.push(newMember);
      return newMember;
    }
    return null;
  }
  listAvailableItems(): void {
    let availableItems = this.items.filter((item) => item.isAvailable);
    availableItems.forEach(item =>
      alert(`ID: ${item.itemId}, Title: ${item.title}, Type: ${item.getItemType()}`)
    );
  }
  updateItemTitle(itemId: number, newTitle: string): void {
    let updateIndex = this.items.findIndex((item) => item.itemId === itemId);
    if (this.items[updateIndex]) {
      this.items[updateIndex].title = newTitle;
    }
  }
  borrowItem(memberId: number, itemId: number): Loan | null {
    let member = this.members.find((m) => m.memberId === memberId);
    let item = this.items.find((i) => i.itemId === itemId);
    if (member && item && item.isAvailable) {
      let dateString = String(prompt("Nhập ngày hết hạn trả: "));
      let dueDate = new Date(dateString);
      let newLoan = new Loan(
        this.loans.length + 1,
        member,
        item,
        dueDate,
        false
      );
      this.loans.push(newLoan);
      item.isAvailable = false;
      member.borrowedItems.push(item);
      return newLoan;
    }
    return null;
  }
}
//////////////////////////////
function main() {
  let choice: number | null;
  let library = new Library();
  do {
    choice = Number(
      prompt(`
        1. Thêm thành viên mới. 
        2. Thêm tài liệu mới.
        3. Mượn tài liệu.
        4. Trả tài liệu.
        5. Hiển thị danh sách tài liệu có sẵn. 
        6. Hiển thị danh sách tài liệu đang mượn của một thành viên. 
        7. Tính và hiển thị tổng phí phạt đã thu.
        8. Thống kê số lượng từng loại tài liệu. 
        9. Cập nhật tiêu đề một tài liệu.
        10. Tìm kiếm thành viên hoặc tài liệu theo ID.
        11. Thoát chương trình.
        Nhập lựa chọn của bạn
        `)
    );
    switch (choice) {
      case 1:
        let membername = String(prompt("Nhap ten thanh vien moi: "));
        let membercontact = String(prompt("Nhap lien he thanh vien moi: "));
        library.addMember(membername, membercontact);
        break;
      case 2:
        let itemType = String(
          prompt("Chọn loại tài liệu: ( 1. Sách, 2. Tạp chí)")
        );
        switch (itemType) {
          case "1":
            let bookTitle = String(prompt("Nhập tiêu đề sách: "));
            let bookAuthor = String(prompt("Nhập tên tác giả: "));
            let newBook = new Book(library.items.length + 1, bookTitle, bookAuthor);
            library.addItem(newBook);
            break;
          case "2":
            let magazineTitle = String(prompt("Nhập tiêu đề tạp chí: "));
            let issueNumber = Number(prompt("Nhập số phát hành: "));
            let newMagazine = new Magazine(
              library.items.length + 1,
              magazineTitle,
              issueNumber
            );
            library.addItem(newMagazine);
            break;
          default:
            alert("Tài liệu không hợp lệ");
        }
        break;
      case 3:
        let memberId = Number(prompt("Nhập ID thành viên: "));
        let titleId = Number(prompt("Nhập ID tài liệu: "));
        library.borrowItem(memberId, titleId);
        break;
      case 4:
        break;
      case 5:
        library.listAvailableItems();
        break;
      case 6:
        break;
      case 7:
        break;
      case 8:
        break;
      case 9:
        let newTitle = String(prompt("Nhập tiêu đề tài liệu: "));
        let itemId = Number(prompt("Nhập ID tài liệu: "));
        library.updateItemTitle(itemId, newTitle);
        break;
      case 10:
        break;
      case 11:
        alert("Đã thoát chương trình");
        break;
      default:
        alert("Lựa chọn không hợp lệ!");
        break;
    }
  } while (choice !== 11);
}
main();
