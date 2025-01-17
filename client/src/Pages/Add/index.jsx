import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./index.module.scss";
import axios from "axios";
import { BASE_URL } from "../../Constants/constants";

const ProductSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  category: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.number().required("Required"),
  image: Yup.string().url().required("Required"),
});

const Add = () => {
  const [products, setProducts] = useState([]);

  const getAllData = async () => {
    const { data } = await axios(`${BASE_URL}`);
    setProducts(data.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
    getAllData();
  };
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
    <Helmet>
            <title>Add Page</title>
            <link rel="canonical" href="https://www.tacobell.com/" />
          </Helmet>
      <div className="container">
        <div className={styles.form}>
          <h1>Add New Product</h1>
          <Formik
            initialValues={{
              name: "",
              image: "",
              price: "",
              category: "",
            }}
            validationSchema={ProductSchema}
            onSubmit={async (values) => {
              await axios.post(`${BASE_URL}`,values);
              getAllData();
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Field name="name" placeholder="Name" />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
                <Field name="price" type="number" placeholder="Price" />
                {errors.price && touched.price ? (
                  <div>{errors.price}</div>
                ) : null}
                <Field name="image" type="url" placeholder="ImageUrl" />
                {errors.image && touched.image ? (
                  <div>{errors.image}</div>
                ) : null}
                <Field name="category" placeholder="Category" />
                {errors.category && touched.category ? (
                  <div>{errors.category}</div>
                ) : null}
                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
        <div className={styles.displayProducts}>
          <div className="row">
            {products &&
              products.map((p) => (
                <div className="col-sm-6 col-half-special" key={p._id}>
                  <div className={styles.cardDyn}>
                    <div className={styles.cardImage}>
                      <img src={p.image} alt={p.name} />
                    </div>
                    <div className={styles.cardTitle}>
                      <h3>{p.name}</h3>
                      <p>
                        ${p.price}
                        <span>{p.oldPrice && `$${p.oldPrice}`}</span>
                      </p>
                    </div>
                    <div className={styles.cardBtns}>
                      <button
                        onClick={() => {
                          handleDelete(p._id);
                        }}
                      >
                        DELETE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
