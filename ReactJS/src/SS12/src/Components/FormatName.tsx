type users = {
    firtName: string,
    lastName: string,
}
function FormatName(user: users):string{
    return `Họ và tên: ${user.firtName} ${user.lastName}`
}
export default function DisplayName(){
    const user: users = {
        firtName: "Nguyễn Văn",
        lastName: "Nam"
    }
  return (
    <h3>{FormatName(user)}</h3>
  )
}