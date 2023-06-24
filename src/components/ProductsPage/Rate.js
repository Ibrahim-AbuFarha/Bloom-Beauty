import { useState , useEffect } from "react";
import { FaStar } from "react-icons/fa";

// Rating stars :
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Rate() {
  const [currentValue ,setCurrentValue ] = useState(0);
  const [hoverValue , setHoverValue] = useState(undefined);
  const [rateArr ,  setRateArray] = useState([]);
  
  const stars = Array(5).fill(0);



  useEffect(() => {
    fetch( 
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    )
      .then((Response) => Response.json())
      .then((data) => setRateArray(data));
  }, []);


  const handleClick = value => {
    setCurrentValue(value)
  }

  // const handleMouseOver = value => { //must update to the new value
  //   setHoverValue(value)
  // }

  // const handleMouseLeave = value => {
  //   setHoverValue(undefined)
  // }

  return (
    <>
    {/* {rateArr.map((product) => (
      <div key={product.id} className="product">
        <div className="stars">
          {stars.map((_ , starIndex) => { 
            return (
              <FaStar key={starIndex} 
              size={20}
              style={{
                marginRight : 7,
                cursor : "pointer",
                marginBottom : 15,
              }}
              color={(starIndex || product.rating ) > starIndex ? colors.orange : colors.grey}
              />
            )
          })}
        </div>

      </div>
    ))} */}
      
      {/* {rateArr.map((product, index) => (
      <div key={index} className="product">
        <div className="stars">
          {stars.map((_, starIndex) => {
            return (
              <FaStar
              key={starIndex}
              size={20}
              style={{
                marginRight: 7,
                cursor: "pointer",
                marginBottom: 15,
              }}
              color={starIndex < product.rating ? colors.orange : colors.grey}
            />
          )}
            )
          }
            
        </div>
      </div>
    ))} */}
        
        <div className="stars">
          {stars.map((_, index) => {
            // الفكرة انو انا عندي فوق مصفوفة بقيم صفر ، بعدين عملت ماب و رجعت مصفوفة جديدة
            return <FaStar key={index} 
            size={20}
            style={{
              marginRight : 7,
              cursor : "pointer",
              marginBottom : 15,
            }}
            color={(hoverValue || currentValue  ) > index ? colors.orange : colors.grey}
            onClick={() => handleClick(index + 1)} // To change it's index
            // onMouseOver={() => handleMouseOver(index +1)}
            // onMouseLeave={() => handleMouseLeave}
            />;
          })}
        </div>
      
    </>
  );
}

export default Rate;
