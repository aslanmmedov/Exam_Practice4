import React, { useContext } from "react";
import styles from "./index.module.scss";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { WishlistContext } from "../../Context/wishlistContext";
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet-async"
const Wishlist = () => {
  const navigate = useNavigate(null);
  const { favorites, toggleWishlist } = useContext(WishlistContext);

  const getDetail = (id) => {
    navigate(`/${id}`);
  };
  return (
    <>
    <Helmet>
        <title>Wishlist Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <section>
        <div className="container">
            <div className={styles.dynamicHead}>
                          <h2>Wishlist</h2>
                          <div className={styles.line}>
                            <p>a</p>
                          </div>
                        </div>
          <div className="row">
            {favorites &&
              favorites.map((p) => (
                <div className="col-sm-6 col-half-special" key={p._id}>
                  <div className={styles.cardDyn}>
                    <div className={styles.cardImage}>
                      <img src={p.image} alt={p.name} />
                      <button onClick={() => toggleWishlist(p)}>
                        {favorites.find((f) => f._id === p._id) ? (
                          <FaHeart />
                        ) : (
                          <CiHeart />
                        )}
                      </button>
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
                          getDetail(p._id);
                        }}
                      >
                        DETAIL
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;
