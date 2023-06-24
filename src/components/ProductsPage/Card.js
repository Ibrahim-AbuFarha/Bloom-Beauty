import { Link } from "react-router-dom";
import Rate from "./Rate" 

function Card(product) {
  return (
    <>
      <div className="card_Container">
        <div className="img">
          <img
            src="https://d3t32hsnjxo7q6.cloudfront.net/i/991799d3e70b8856686979f8ff6dcfe0_ra,w158,h184_pa,w158,h184.png"
            alt="MakeUp Pic"
          />
        </div>
        <div className="details">
          <h5>Product1</h5>
          <p>10 Jd</p>
          <Rate />
        </div>
        <button className="btn11">Add to card</button>
      </div>
    </>
  );
}

export default Card;
