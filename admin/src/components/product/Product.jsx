import React, { useState } from "react";
import "./product.css";
import product1 from "../../assets/product1.jpg";

const Product = () => {
  const [productData, setProductData] = useState(null);
  return (
    <>
      <div className="hero w-75 h-auto position-absolute end-0 d-flex flex-wrap">
        <div
          className="left-container flex-grow-1 flex-shrink-1"
          style={{ flexBasis: "65%" }}
        >
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  <input type="checkbox" />
                </th>
                <th scope="col">ID</th>
                <th scope="col">PHOTO</th>
                <th scope="col">NAME</th>
                <th scope="col">STOCK</th>
                <th scope="col">PRICE</th>
                <th scope="col">CREATED AT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <th scope="row">#1</th>
                <td>
                  <img src={product1} alt="" className="img-fluid" />
                </td>
                <td>Headphone</td>
                <td>in Stock</td>
                <td>$499,90</td>
                <td>02/03/2021</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <th scope="row">#1</th>
                <td>
                  <img src={product1} alt="" className="img-fluid" />
                </td>
                <td>Headphone</td>
                <td>in Stock</td>
                <td>$499,90</td>
                <td>02/03/2021</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <th scope="row">#1</th>
                <td>
                  <img src={product1} alt="" className="img-fluid" />
                </td>
                <td>Headphone</td>
                <td>in Stock</td>
                <td>$499,90</td>
                <td>02/03/2021</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <th scope="row">#1</th>
                <td>
                  <img src={product1} alt="" className="img-fluid" />
                </td>
                <td>Headphone</td>
                <td>in Stock</td>
                <td>$499,90</td>
                <td>02/03/2021</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <th scope="row">#1</th>
                <td>
                  <img src={product1} alt="" className="img-fluid" />
                </td>
                <td>Headphone</td>
                <td>in Stock</td>
                <td>$499,90</td>
                <td>02/03/2021</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <th scope="row">#1</th>
                <td>
                  <img src={product1} alt="" className="img-fluid" />
                </td>
                <td>Headphone</td>
                <td>in Stock</td>
                <td>$499,90</td>
                <td>02/03/2021</td>
              </tr>
              {productData?.data &&
                productData.data.map((data) => (
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <th>{data.no}</th>
                    <td>
                      <img src={data.image} className="img-fluid" alt="" />
                    </td>
                    <td>{data.name}</td>
                    <td>{data.stock}</td>
                    <td>{data.price}</td>
                    <td>{data.date}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div
          className="right-container flex-grow-1 flex-shrink-1"
          style={{ flexBasis: "35%" }}
        >
          <div className="container-fluid mt-5">
            <h6>Fileter Products</h6>
            <div
              className="container-fluid  rounded bg-white mt-5 pt-2"
              style={{ height: "130px" }}
            >
              <div
                className="d-flex justify-content-center mt-3"
                style={{ width: "100%", gap: "150px" }}
              >
                <p>Keywords</p>
                <button>drop</button>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <input type="text" />
                <button>search</button>
              </div>
            </div>
            <div className="container-fluid  rounded bg-white mt-5 pt-3 pb-3">
              <div
                className="d-flex justify-content-center mt-3"
                style={{ gap: "150px" }}
              >
                <p>Categories</p>
                <button>drop</button>
              </div>
              <div className="">
                <div className="All d-flex gap-2 container-fluid">
                  <input type="checkbox" />
                  <p className="pt-2">All</p>
                </div>
                <div className="Accessories d-flex gap-2 container-fluid">
                  <input type="checkbox" />
                  <p className="pt-2">Accessories</p>
                </div>
                <div className="Phone d-flex gap-2 container-fluid">
                  <input type="checkbox" />
                  <p className="pt-2">Phone</p>
                </div>
                <div className="Headphone d-flex gap-2 container-fluid">
                  <input type="checkbox" />
                  <p className="pt-2">Headphone</p>
                </div>
                <div className="Camera d-flex gap-2 container-fluid">
                  <input type="checkbox" />
                  <p className="pt-2">Camera</p>
                </div>
              </div>
            </div>
            <div className="container-fluid mt-5  rounded bg-white pb-4 pt-3">
              <div className="container-fluid d-flex" style={{ gap: "150px" }}>
                <p className="pe-3">Price</p>
                <button>drop</button>
              </div>
              <div className="pt-3">
                <input className="w-100" type="range" />
              </div>
            </div>
            <div className="container-fluid  rounded mt-5 bg-white pb-3">
              <div
                className="d-flex justify-content-center pt-3 pb-4"
                style={{ gap: "150px" }}
              >
                <p>Colors</p>
                <button>search</button>
              </div>
              <div>colors</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
