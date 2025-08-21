import React, { Component } from "react";
type Product = {
  id: string;
  name: string;
  price: string;
  quantity: string;
};
type ListProduct = {
  product: Product[];
};
export default class BT5 extends Component<object, ListProduct> {
  constructor(props: object) {
    super(props);
    this.state = {
      product: [
        {
          id: "",
          name: "",
          price: "",
          quantity: "",
        },
      ],
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.state.product);
  };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ product: { ...this.state.product, [name]: value } });
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <h2>Thêm sản phẩm mới</h2>
          <label htmlFor="">Mã sản phẩm</label>
          <br />
          <input style={{borderRadius: "5px"}} type="text" onChange={this.handleChange} name="id" />
          <br />
          <label htmlFor="">Tên sản phẩm</label>
          <br />
          <input style={{borderRadius: "5px"}} type="text" onChange={this.handleChange} name="name" />
          <br />
          <label htmlFor="">Giá</label>
          <br />
          <input style={{borderRadius: "5px"}} type="text" onChange={this.handleChange} name="price" />
          <br />
          <label htmlFor="">Số lượng</label>
          <br />
          <input
            style={{borderRadius: "5px"}}
            type="number"
            onChange={this.handleChange}
            name="quantity"
            min={1}
          />
          <br />
          <button style={{ backgroundColor: "blue", color: "white" ,width: "170px", height: "50px", marginTop: "10px"}} type="submit">
            Đăng ký
          </button>
        </form>
      </div>
    );
  }
}
