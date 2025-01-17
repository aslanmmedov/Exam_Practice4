import React, { useContext, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { BASE_URL } from "../../Constants/constants";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { WishlistContext } from "../../Context/wishlistContext";
import {Helmet} from "react-helmet-async"
const Home = () => {
    const navigate = useNavigate(null)
    const {favorites,toggleWishlist} = useContext(WishlistContext);
    const [products, setProducts] = useState([]);
    const [searchQuery,setSearchQuery] = useState("");



  const getAllData = async () => {
    const { data } = await axios(`${BASE_URL}`);
    setProducts(data.data);
  };

  useEffect(() => {
    getAllData();
  }, []);

  const getDetail = (id) => {
    navigate(`/${id}`)
  }

  const filteredData = products.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
  
  return (
    <>
    <Helmet>
        <title>Home Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <main>
        <section className={styles.herobanner}>
          <div className="container">
            <div className={styles.contentBox}>
              <p>SPRING/ SUMMER COLLECTION 2017</p>
              <h1>Get up to 30% Off New Arrivals</h1>
              <button>SHOP NOW</button>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-4 col-sm-12">
                <div className={styles.cardwomen}>
                  <h4>WOMEN'S</h4>
                </div>
              </div>
              <div className="col-4 col-sm-12">
                <div className={styles.cardmen}>
                  <h4>ACCESORIE'S</h4>
                </div>
              </div>
              <div className="col-4 col-sm-12">
                <div className={styles.cardaccesories}>
                  <h4>MEN'S</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className={styles.dynamicHead}>
              <h2>New Arrivals</h2>
              <div className={styles.line}>
                <p>a</p>
              </div>
              <div className={styles.btns}>
                <button className={styles.firstBtn}>ALL</button>
                <button>WOMEN'S</button>
                <button>MEN'S</button>
                <button>ACCESORIES</button>
              </div>
              <input type="text" placeholder="Search By Name" onChange={(e) => {setSearchQuery(e.target.value)}} />
            </div>
            <div className="row">
              {filteredData &&
                filteredData.map((p) => (
                  <div className="col-sm-6 col-half-special" key={p._id}>
                    <div className={styles.cardDyn}>
                      <div className={styles.cardImage}>
                        <img src={p.image} alt={p.name} />
                        <button onClick={() => toggleWishlist(p)}>{favorites.find((f) => f._id === p._id)?<FaHeart />:<CiHeart />}       
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
                        <button onClick={() => {getDetail(p._id)}}>DETAIL</button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
        <section>
            <div className="container">
            <div className={styles.dynamicHead}>
              <h2>Best Sellers</h2>
              <div className={styles.line}>
                <p>a</p>
              </div>
            </div>
            <div className="row">
              {products &&
                products.map((p) => (
                  <div className="col-sm-6 col-half-special" key={p._id}>
                    <div className={styles.cardDyn}>
                      <div className={styles.cardImage}>
                        <img src={p.image} alt={p.name} />
                        <button onClick={() => toggleWishlist(p)}>{favorites.find((f) => f._id === p._id)?<FaHeart />:<CiHeart />}       
                        </button>
                      </div>
                      <div className={styles.cardTitle}>
                        <h3>{p.name}</h3>
                        <p>
                          ${p.price}   
                          <span>{p.oldPrice && `$${p.oldPrice}`}</span>
                        </p>
                      </div>
                      </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
        <section>
            <div className="container">
            <div className={styles.dynamicHead}>
              <h2>Latest Blogs</h2>
              <div className={styles.line}>
                <p>a</p>
              </div>
            </div>
            <div className="row">
                <div className="col-4 col-sm-12">
                    <div className={styles.blogCard}>
                        <div className={styles.innerCard}>
                            <h2>Here are trends I see coming this fall</h2>
                            <p>By admin | DEC 01 2017</p>
                            <a href="#">Read more</a>
                        </div>
                    </div>
                </div>
                <div className="col-4 col-sm-12">
                    <div className={styles.blogCard}>
                        <div className={styles.innerCard}>
                            <h2>Here are trends I see coming this fall</h2>
                            <p>By admin | DEC 01 2017</p>
                            <a href="#">Read more</a>
                        </div>
                    </div>
                </div>
                <div className="col-4 col-sm-12">
                    <div className={styles.blogCard}>
                        <div className={styles.innerCard}>
                            <h2>Here are trends I see coming this fall</h2>
                            <p>By admin | DEC 01 2017</p>
                            <a href="#">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
      </main>
    </>
  );
};

export default Home;
