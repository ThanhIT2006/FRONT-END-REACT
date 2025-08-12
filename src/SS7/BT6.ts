class account {
    public id: number;
    public userName: string;
    private password: number;
    public isLogin: string;
    public role: string;
    constructor(id: number, userName: string, password: number, isLogin: string, role: string){
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    login(): void{
        if(this.isLogin === "true"){
            console.log("Login thanh cong!");
        }else{
            console.log("Login that bai!");
        }
    }

    logout(): void{
        if(this.isLogin === "true"){
            console.log("Dang xuat thanh cong");
            this.isLogin = "false";
        }
    }
}
class userAcc extends account{
    status: string;
    constructor(id: number, userName: string, password: number, isLogin: string, role: string, status: string){
        super(id, userName, password, isLogin, role)
        this.status = status;
    }
    login(): void{
        if (this.status === "active") {
            this.isLogin = "true";
            console.log("Tai khoan dang nhap thanh cong");
        } else if(this.status === "banned"){
            this.isLogin = "false";
            console.log("Tai khoan đa bi khoa");
        }
    }
}
class adminAcc extends account {
    constructor(id: number, userName: string, password: number, isLogin: string, role: string) {
        super(id, userName, password, isLogin, role);
    }
    banUser(id:userAcc): void {
        id.status = "banned";
         console.log(`User ${id.userName} da bi cam.`);
    }
}
const UserAccount = new userAcc(1, "Dung", 123456, "true", "Leader", "active");
UserAccount.login();
UserAccount.logout();
const adminAccount = new adminAcc(3, "Admin", 789012, "true", "Admin");
adminAccount.banUser(UserAccount);
const UserAccount2 = new userAcc(2, "Thanh", 654321, "false", "Member", "banned");
UserAccount2.login();
UserAccount2.logout();