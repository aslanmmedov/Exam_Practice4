import React, { useContext, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { WishlistContext } from "../../Context/wishlistContext";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { BASE_URL } from "../../Constants/constants";
import {Helmet} from "react-helmet-async"
const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate(null);
  const { favorites, toggleWishlist } = useContext(WishlistContext);
  const [product, setProduct] = useState([]);

  const getDataById = async () => {
    const { data } = await axios(`${BASE_URL}/${id}`);
    setProduct(data.data);
  };

  useEffect(() => {
    getDataById();
  }, []);

  const getDetail = (id) => {
    navigate(-1);
  };
  return (
    <>
    <Helmet>
        <title>{product.name}</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <section>
        <div className="container">
            <div className={styles.dynamicHead}>
                          <h2>{product.name}</h2>
                          <div className={styles.line}>
                            <p>a</p>
                          </div>
                        </div>
          <div className="row">
            {product &&
              
                <div className="col-sm-6 col-half-special" key={product._id}>
                  <div className={styles.cardDyn}>
                    <div className={styles.cardImage}>
                      <img src={product.image} alt={product.name} />
                      <button onClick={() => toggleWishlist(product)}>
                        {favorites.find((f) => f._id === product._id) ? (
                          <FaHeart />
                        ) : (
                          <CiHeart />
                        )}
                      </button>
                    </div>
                    <div className={styles.cardTitle}>
                      <h3>{product.name}</h3>
                      <p>
                        ${product.price}
                        <span>{product.oldPrice && `$${product.oldPrice}`}</span>
                      </p>
                    </div>
                    <div className={styles.cardBtns}>
                      <button
                        onClick={() => {
                          getDetail(product._id);
                        }}
                      >
                        BACK
                      </button>
                    </div>
                  </div>
                </div>
}
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;
