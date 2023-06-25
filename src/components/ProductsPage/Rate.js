import { useState} from "react";
import { FaStar } from "react-icons/fa";

// Rating stars :
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Rate() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  return (
    <>
      <div className="stars">
        {stars.map((_, index) => {
          // الفكرة انو انا عندي فوق مصفوفة بقيم صفر ، بعدين عملت ماب و رجعت مصفوفة جديدة
          return (
            <FaStar
              key={index}
              size={20}
              style={{
                marginRight: 7,
                cursor: "pointer",
                marginBottom: 15,
              }}
              color={
                (hoverValue || currentValue) > index
                  ? colors.orange
                  : colors.grey
              }
              onClick={() => handleClick(index + 1)}
            />
          );
        })}
      </div>
    </>
  );
}

export default Rate;
