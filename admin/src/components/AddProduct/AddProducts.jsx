import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./addproduct.css";

const AddProducts = () => {
  const [sendProduct, setSendProduct] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("additionalInfo", data.additionalInfo);
      formData.append("description", data.description);
      formData.append("fabric", data.fabric);
      formData.append("color", data.color);
      formData.append("composition", data.composition);
      formData.append("origin", data.origin);
      formData.append("fabricCode", data.fabricCode);
      formData.append("season", data.season);
      formData.append("pattern", data.pattern);
      formData.append("price", Number(data.price));

      // Convert comma-separated types string to array
      const typesArray = data.types.split(",").map((type) => type.trim());
      typesArray.forEach((type, index) => {
        formData.append(`types[${index}]`, type);
      });

      formData.append("image", data.image[0]);

      const response = await axios.post(
        `http://localhost:5000/api/product`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response);
      setSendProduct(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ width: "75%", marginLeft: "auto" }}>
      <div className="container py-4">
        <h2 className="mb-4">Add Product</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
          method="post"
          action="/uploads"
        >
          <div className="row">
            {/* Left Column */}
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Product Information</h5>

                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">
                        {errors.name.message}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Additional Info</label>
                    <input
                      type="text"
                      {...register("additionalInfo")}
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      style={{ resize: "none" }}
                      rows={4}
                      {...register("description", {
                        required: "Description is required",
                      })}
                      className={`form-control ${
                        errors.description ? "is-invalid" : ""
                      }`}
                    ></textarea>
                    {errors.description && (
                      <div className="invalid-feedback">
                        {errors.description.message}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Fabric</label>
                    <input
                      type="text"
                      {...register("fabric")}
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Color</label>
                    <input
                      type="text"
                      {...register("color")}
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Composition</label>
                    <input
                      type="text"
                      {...register("composition")}
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Origin</label>
                    <input
                      type="text"
                      {...register("origin")}
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Fabric Code</label>
                    <input
                      type="text"
                      {...register("fabricCode")}
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Season</label>
                    <input
                      type="text"
                      {...register("season")}
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Pattern</label>
                    <input
                      type="text"
                      {...register("pattern")}
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Types (comma-separated)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Wedding, business, Formal Wedding"
                      {...register("types", { required: "Types are required" })}
                      className={`form-control ${
                        errors.types ? "is-invalid" : ""
                      }`}
                    />
                    {errors.types && (
                      <div className="invalid-feedback">
                        {errors.types.message}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Media</h5>
                  <input
                    type="file"
                    {...register("image", { required: "Image is required" })}
                    className={`form-control ${
                      errors.image ? "is-invalid" : ""
                    }`}
                  />
                  {errors.image && (
                    <div className="invalid-feedback">
                      {errors.image.message}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Pricing</h5>
                  <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                      type="number"
                      {...register("price", { required: "Price is required" })}
                      className={`form-control ${
                        errors.price ? "is-invalid" : ""
                      }`}
                    />
                    {errors.price && (
                      <div className="invalid-feedback">
                        {errors.price.message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {sendProduct && (
            <div className="alert alert-success mt-3 w-50">
              Product added successfully!
            </div>
          )}
          <button
            type="submit"
            className="btn btn-primary w-50 py-3 mt-2 fw-semibold d-flex flex-column align-items-center justify-content-center "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
