import { useMemo } from "react";

interface User {
  id: number;
  name: string;
  age: number;
}

export default function UserList() {
  const users: User[] = [
    { id: 1, name: "Nguyễn Văn A", age: 17 },
    { id: 2, name: "Trần Thị B", age: 20 },
    { id: 3, name: "Lê Văn C", age: 25 },
    { id: 4, name: "Phạm Thị D", age: 16 },
  ];

  const filteredUsers = useMemo(() => {
    return users.filter((user) => user.age > 18);
  }, [users]);

  return (
    <div>
      <h2>Danh sách người dùng trên 18 tuổi</h2>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} tuổi
          </li>
        ))}
      </ul>
    </div>
  );
}
