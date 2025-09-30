import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCart, deleteFromCart } from "../actions/cartActions";

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products);
  const cart = useSelector((state: any) => state.cart);

  return (
    <div className="shopping-cart">
      <div className="product-list">
        <h3 className="title">List Products</h3>
        {products.map((p: any) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.name} className="product-image" />
            <div className="product-info">
              <h4>{p.name}</h4>
              <p>{p.description}</p>
            </div>
            <div className="product-actions">
              <input
                type="number"
                value={p.quantity}
                readOnly
                className="quantity"
              />
              <button className="price" onClick={() => dispatch(addToCart(p))}>
                {p.price} USD
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cột phải: Your Cart */}
      <div className="cart">
        <h3 className="title-cart">Your Cart</h3>

        {cart.length === 0 ? (
          <p>Empty product in your cart</p>
        ) : (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item: any, index: number) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.price} USD</td>
                    <td>
                      <input
                        type="number"
                        value={item.quantity}
                        min={1}
                        onChange={(e) =>
                          dispatch(updateCart(item.id, Number(e.target.value)))
                        }
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-update"
                        onClick={() =>
                          dispatch(updateCart(item.id, item.quantity))
                        }
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-delete"
                        onClick={() => dispatch(deleteFromCart(item.id))}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p>
              There are <b>{cart.length}</b> items in your shopping cart.
            </p>

            <h4 className="total">
              {cart.reduce(
                (sum: number, item: any) => sum + item.price * item.quantity,
                0
              )}{" "}
              USD
            </h4>
          </>
        )}
      </div>
    </div>
  );
}
