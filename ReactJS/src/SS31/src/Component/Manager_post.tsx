import React, { useState, useEffect } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import axios from "axios";

type Post = {
  id: number;
  title: string;
  image: string;
  date: string;
  status: boolean;
};
type NewPost = Omit<Post, "id">;

export default function Manager_post() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setTitle("");
    setImage("");
  };
  const handleShow = () => setShow(true);

  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");

  async function getData() {
    const posts = await axios.get("http://localhost:3000/manager-post");
    setPosts([...posts.data]);
  }
  useEffect(() => {
    getData();
  }, []);

  const handleBlock = (id: number) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, status: !post.status } : post
      )
    );
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
  };

  async function addPost(post: NewPost) {
    const res = await axios.post("http://localhost:3000/manager-post", post);
    return res;
  }

  const handleDelete = async (id: number) => {
    const choice = confirm("Xác nhận xóa.");
    if (choice) {
      await axios.delete(`http://localhost:3000/manager-post/${id}`);
      setPosts((prev) => prev.filter((post) => post.id !== id));
    }
  };

  const handleAddPosts = async () => {
    setShow(false);
    const reponse = await addPost({
      title: title,
      image: image,
      date: "17/9",
      status: true,
    });
    const newPosts = reponse.data;
    setPosts([...posts, newPosts]);
    setImage("");
    setTitle("");
  };


  return (
    <div>
      {/* Giữ giao diện nhưng bỏ chức năng tìm kiếm */}
      <input
        style={{
          backgroundColor: "white",
          color: "black",
          border: "1px solid lightgray",
          padding: "5px",
          borderRadius: "5px",
          marginRight: "10px",
        }}
        type="text"
        placeholder="Nhập từ khóa tìm kiếm"
      />
      <select
        style={{
          backgroundColor: "white",
          color: "black",
          borderRadius: "5px",
          marginRight: "500px",
          height: "30px",
        }}
      >
        <option value="">Lựa chọn</option>
        <option value="published">Đã xuất bản</option>
        <option value="draft">Chưa xuất bản</option>
      </select>

      <Button variant="primary" onClick={handleShow}>
        Thêm bài viết mới
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm bài viết mới</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Tên bài viết</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={handleTitle}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Hình ảnh</Form.Label>
              <Form.Control
                type="text"
                value={image}
                onChange={handleImage}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nội dung bài viết</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleAddPosts}>
            Lưu bài viết
          </Button>
        </Modal.Footer>
      </Modal>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tiêu đề</th>
            <th>Hình ảnh</th>
            <th>Ngày viết</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <th>{item.title}</th>
              <th>{item.image}</th>
              <th>{item.date}</th>
              <th>
                {item.status ? (
                  <Button>Đã xuất bản</Button>
                ) : (
                  <Button>Chưa xuất bản</Button>
                )}
              </th>
              <th className="flex gap-[10px]">
                <Button
                  onClick={() => handleBlock(item.id)}
                  variant="warning"
                >
                  {item.status ? "Chặn" : "Bỏ chặn"}
                </Button>
                <Button variant="outline-success" disabled>
                  Sửa
                </Button>
                <Button
                  onClick={() => handleDelete(item.id)}
                  variant="outline-danger"
                >
                  Xóa
                </Button>
              </th>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
