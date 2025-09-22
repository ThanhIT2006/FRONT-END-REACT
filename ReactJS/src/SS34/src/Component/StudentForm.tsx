import React, { useEffect } from "react";
import { Button, Form, Input, InputNumber, DatePicker, Select } from "antd";
import type { Student } from "../utils/types";

const { Option } = Select;

interface StudentFormProps {
  onSubmit: (student: Student) => void;
  editingStudent: Student | null;
  students: Student[];
}

const StudentForm: React.FC<StudentFormProps> = ({ onSubmit, editingStudent, students }) => {
  const [form] = Form.useForm<Student>();

  useEffect(() => {
    if (editingStudent) {
      form.setFieldsValue(editingStudent)
    } else {
      form.resetFields()
    }
  }, [editingStudent, form]);

  const handleFinish = (values: Student) => {
    onSubmit(values);
    form.resetFields();
  };

  return (
    <div style={{width:"400px",marginLeft:"50px",marginTop:"50px", border:"1px solid black", padding:"10px", borderRadius:"10px"}} className="w-1/3 p-6 border rounded-xl shadow bg-white">
      <h2 className="text-lg font-semibold mb-4 text-center">
        Thông Tin Sinh Viên
      </h2>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        initialValues={{ gender: "Nam" }}
        className="flex flex-col gap-3"
      >
        <Form.Item
          label="Mã sinh viên"
          name="id"
          rules={[
            { required: true, message: "Mã sinh viên không được để trống" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value) return Promise.resolve()
                if (students.some(s => s.id === value && s.id !== editingStudent?.id)) {
                  return Promise.reject(new Error("Mã sinh viên đã tồn tại"));
                }
                return Promise.resolve();
              }
            })
          ]}
        >
          <Input className="rounded-lg" />
        </Form.Item>

        <Form.Item
          label="Tên sinh viên"
          name="name"
          rules={[
            { required: true, message: "Tên sinh viên không được để trống" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value) return Promise.resolve();
                if (
                  students.some(
                    (s) => s.name === value && s.id !== editingStudent?.id
                  )
                ) {
                  return Promise.reject(new Error("Tên sinh viên đã tồn tại"));
                }
                return Promise.resolve();
              },
            }),
          ]}
        >
          <Input className="rounded-lg" />
        </Form.Item>

        <Form.Item
          label="Tuổi"
          name="age"
          rules={[
            { required: true, message: "Tuổi không được để trống" },
            { type: "number", min: 1, message: "Tuổi phải lớn hơn 0" },
          ]}
        >
          <InputNumber className="w-full rounded-lg" />
        </Form.Item>

        <Form.Item label="Giới tính" name="gender">
          <Select className="rounded-lg">
            <Option value="Nam">Nam</Option>
            <Option value="Nữ">Nữ</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Ngày sinh"
          name="birthday"
          rules={[
            { required: true, message: "Ngày sinh không được để trống" },
            () => ({
              validator(_, value) {
                if (!value) return Promise.resolve();
                if (value.isAfter(new Date())) {
                  return Promise.reject(new Error("Ngày sinh không được ở tương lai"));
                }
                return Promise.resolve();
              },
            }),
          ]}
        >
          <DatePicker className="w-full rounded-lg" />
        </Form.Item>

        <Form.Item
          label="Nơi sinh"
          name="hometown"
          rules={[{ required: true, message: "Nơi sinh không được để trống" }]}
        >
          <Input className="rounded-lg" />
        </Form.Item>

        <Form.Item
          label="Địa chỉ"
          name="address"
          rules={[{ required: true, message: "Địa chỉ không được để trống" }]}
        >
          <Input className="rounded-lg" />
        </Form.Item>

        <Form.Item className="mb-0">
          <Button type="primary" htmlType="submit" className="w-full rounded-lg">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default StudentForm;