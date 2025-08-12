class account {
    id;
    userName;
    password;
    isLogin;
    role;
    constructor(id, userName, password, isLogin, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    login() {
        if (this.isLogin === "true") {
            console.log("Login thanh cong!");
        }
        else {
            console.log("Login that bai!");
        }
    }
    logout() {
        if (this.isLogin === "true") {
            console.log("Dang xuat thanh cong");
            this.isLogin = "false";
        }
    }
}
class userAcc extends account {
    status;
    constructor(id, userName, password, isLogin, role, status) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            this.isLogin = "true";
            console.log("Tai khoan dang nhap thanh cong");
        }
        else if (this.status === "banned") {
            this.isLogin = "false";
            console.log("Tai khoan đa bi khoa");
        }
    }
}
const UserAccount = new userAcc(1, "Dung", 123456, "true", "Leader", "active");
UserAccount.login();
UserAccount.logout();
const UserAccount2 = new userAcc(2, "Thanh", 654321, "false", "Member", "banned");
UserAccount2.login();
UserAccount2.logout();
export {};
//# sourceMappingURL=BT5.js.map