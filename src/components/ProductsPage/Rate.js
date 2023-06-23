import { useState } from "react";
import { FaStar } from "react-icons/fa";

// Rating stars :
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Rate() {
  const [currentValue ,setCurrentValue ] = useState(0);
  const [hoverValue , setHoverValue] = useState(undefined)
  const stars = Array(5).fill(0);

  const handleClick = value => {
    setCurrentValue(value)
  }

  // const handleMouseOver = value => { //must update to the new value
  //   setHoverValue(value)
  // }

  const handleMouseLeave = value => {
    setHoverValue(undefined)
  }

  return (
    <>
      <div className="container">
        <h2>Star Rating</h2>
        <div className="stars">
          {stars.map((_, index) => {
            // الفكرة انو انا عندي فوق مصفوفة بقيم صفر ، بعدين عملت ماب و رجعت مصفوفة جديدة
            return <FaStar key={index} 
            size={24}
            style={{
              marginRight : 10,
              cursor : "pointer",
            }}
            color={(hoverValue || currentValue  ) > index ? colors.orange : colors.grey}

            onClick={() => handleClick(index + 1)} // To change it's index
            // onMouseOver={() => handleMouseOver(index +1)}
            onMouseLeave={() => handleMouseLeave}
            />;
          })}
        </div>
      </div>
    </>
  );
}

export default Rate;
