import type { Student } from '../utils/types';
import StudentForm from '../Component/StudentForm';
import StudentList from '../Component/StudentList';
import Toolbar from '../Component/Toolbar';
import { useState } from 'react';

const StudentManagement = () => {
  const [students, setStudents] = useState<Student[]>([
    { id: 'SV001', name: 'Nguyễn Văn A', age: 20, gender: 'Nam' },
    { id: 'SV002', name: 'Nguyễn Văn B', age: 21, gender: 'Nữ' },
    { id: 'SV003', name: 'Nguyễn Văn C', age: 19, gender: 'Nam' },
  ]);

  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  const handleAddStudent = (student: Student) => {
    if (editingStudent) {
      setStudents((prev) => prev.map((s) => (s.id === editingStudent.id ? student : s)))
      setEditingStudent(null); // reset
    } else {
      setStudents([...students, student]);
    }

  };

  const handleSearch = (keyword: string) => {
    setStudents((prev) =>
      prev.filter((s) => s.name.toLowerCase().includes(keyword.toLowerCase())),
    );
  };

  const handleDelete = (id: string) => {
    setStudents(prev => prev.filter(s => s.id !== id))
  }

  const handleEdit = (student: Student) => {
    setEditingStudent(student)
  }
  return (
    <div className="flex gap-6 p-6" style={{display:"flex",}}>
      <div className="flex-1">
        <Toolbar onSearch={handleSearch} />
        <StudentList students={students} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
      <StudentForm onSubmit={handleAddStudent} editingStudent={editingStudent} students={students}/>
    </div>
  );
};

export default StudentManagement;