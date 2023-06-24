import React, { useEffect, useState } from "react";
import "./CardDark.css";

function CardsDark() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    )
      .then((Response) => Response.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  return (
    <section className="best-seller-cards ">
      <div className="container py-4">
        <h1 className="h1 text-center" id="pageHeaderTitle">
          My Cards Dark
        </h1>
        {items.map((item) => {
          if (item.rating >= 5)
            return (
              <article className="postcard dark blue">
                <a className="postcard__img_link" href="#">
                  <img
                    className="postcard__img"
                    src={item.image_link}
                    alt="Image Title"
                  />
                </a>
                <div className="postcard__text">
                  <h1 className="postcard__title blue">
                    <a href="#">{item.name}</a>
                  </h1>

                  <div className="postcard__bar" />
                  <div className="postcard__preview-txt">
                    {item.description}
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2" />
                      Podcast
                    </li>
                    <li className="tag__item">
                      <i className="fas fa-clock mr-2" />
                      55 mins.
                    </li>
                    <li className="tag__item play blue">
                      <a href="#">
                        <i className="fas fa-play mr-2" />
                        Play Episode
                      </a>
                    </li>
                  </ul>
                </div>
              </article>
            );
        })}
      </div>
    </section>
  );
}

export default CardsDark;
