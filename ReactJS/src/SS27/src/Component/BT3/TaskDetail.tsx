import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
interface IDataTask {
    id: number;
    title: string;
    description: string;
}

const dataTask: IDataTask[] = [
    {
        id: 1,
        title: 'Học ReactRouter',
        description: 'Làm quen với Dynamic Routes và useNavigate'
    },
    {
        id: 2,
        title: 'Ôn lại Tailwind',
        description: 'Thực hành tạo UI cơ bản bằng Tailwind CSS'
    },
    {
        id: 3,
        title: 'Hoàn thành BTVN',
        description: 'Đẩy code lên GitHub và nộp link'
    }
];

export default function TaskDetail() {
    const { id } = useParams<{ id: string }>();
    const task = dataTask.find(item => item.id === Number(id));
  return (
    <div>
      <h2>{task?.title}</h2>
      <p>Mô tả: {task?.description}</p>
      <Button variant="primary"><Link style={{color:"white", textDecoration: "none"}} to="/:">Quay lại</Link></Button>
    </div>
  )
}