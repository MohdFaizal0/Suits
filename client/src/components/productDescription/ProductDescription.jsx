import React, { useState } from "react";
import sample1 from "../../assets/suits grid/sample1.png";
import "./productDescription.css";
import useCart from "../Context/CartContext";

const ProductDescription = () => {
  const { addToCart } = useCart();
  // const [product,setProduct]=useState(null)
  const handleClicked = (data) => {
    console.log(data);
    addToCart(data);
  };
  // const getData = async () => {
  //   try {
  //     const response = await axios.get("url");
  //     setProduct(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const product = [
    {
      id: "1",
      name: "Loro Piana Suit",
      additionalInfo: "100% Wool by Loro Piana, Italy",
      description:
        "Crafted from Super 120s wool by Scabal, this Mocha Mousse Suit is a refined, lightweight option for year-round wear. The plain weave construction and medium brown tone offer timeless versatility, while the soft hand feel and subtle drape ensure comfort from desk to dinner.",
      fabric: "Loro piana",
      color: "Taupe",
      composition: "100% Wool",
      origin: "Italy",
      fabricCode: "TGPS513",
      season: "All Year",
      pattern: "Plain",
      type: ["Wdding", "business", "Formal Wedding"],
      image: sample1,
      price: 500,
    },
  ];
  return (
    <>
      {product &&
        product.map((data) => (
          <div className="container-fluid py-5">
            <div className="row">
              {/* Images section */}
              <div className="col-lg-7">
                <div className="row g-4 p-3">
                  {/* Image 1 */}
                  <div className="col-6">
                    <div className="img-wrapper">
                      <img
                        src={data.image}
                        className="img-fluid"
                        alt="Product"
                      />
                    </div>
                  </div>
                  {/* Image 2 */}
                  <div className="col-6">
                    <div className="img-wrapper">
                      <img
                        src={data.image}
                        className="img-fluid"
                        alt="Product"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Text content section */}
              <div className="col-lg-5 p-3">
                <h2>{data.name}</h2>
                <p className="text-muted">{data.additionalInfo}</p>
                <p>{data.description}</p>
                <p>
                  <b className="fs-1">${data.price}</b>
                </p>
                <div className="container-fluid d-flex gap-3 mt-5 p-0">
                  <button
                    className="btn btn-dark"
                    onClick={() => handleClicked(data)}
                  >
                    Add To Cart
                  </button>
                  <button className="btn btn-dark">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="container-fluid mt-4 p-3">
              <h4 className="border-bottom pb-3">Product Info</h4>
              <div className="container-fluid mt-5 d-flex">
                <div className="container-fluid"></div>
                <div className="row g-3">
                  <div className="col-6">
                    <p>
                      <strong>Fabric</strong> {data.fabric}
                    </p>
                  </div>
                  <div className="col-6">
                    <p>
                      <strong>Color</strong> {data.color}
                    </p>
                  </div>
                  <div className="col-6">
                    <p>
                      <strong>Composition</strong> {data.composition}
                    </p>
                  </div>
                  <div className="col-6">
                    <p>
                      <strong>Origin</strong> {data.origin}
                    </p>
                  </div>
                  <div className="col-6">
                    <p>
                      <strong>Fabric Code</strong> {data.fabricCode}
                    </p>
                  </div>
                  <div className="col-6">
                    <p>
                      <strong>Season</strong> {data.season}
                    </p>
                  </div>
                  <div className="col-6">
                    <p>
                      <strong>Pattern</strong> {data.pattern}
                    </p>
                  </div>
                  <div className="col-6">
                    <p>
                      <strong>Types</strong> {data.type.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ProductDescription;
