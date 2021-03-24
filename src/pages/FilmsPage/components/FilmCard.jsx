import PropTypes from "prop-types";
import Featured from "components/Featured";
import {memo, useState} from "react";

const FilmCard = ({film}) => {
  const [eyeSlash, setEyeSlash] = useState(false);
  const {price, director, img, title, duration} = film;

  const toggleEyeSlash = () => setEyeSlash(x => !x);
  return (
    <div className="ui card">
      {eyeSlash ? (
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem
            nihil laboriosam eveniet quo possimus ut odio, tempore adipisci
            repudiandae debitis maiores voluptate quibusdam laborum excepturi
            quaerat. Quam, necessitatibus excepturi.
          </p>
        </div>
      ) : (
        <>
          <Featured film={film} />
          <div className="image">
            <span className="ui green label ribbon">$ {price}</span>
            <img src={img} alt={title} />
          </div>
        </>
      )}

      <div className="content">
        <span className="header">{title}</span>
        <div className="meta">
          <i className="icon users"></i> {director}
          <span className="right floated">
            <i className="icon wait right"></i> {duration} min
          </span>
        </div>
        <i
          onClick={toggleEyeSlash}
          className={`icon eye link ${eyeSlash ? "slash" : ""}`}
        ></i>
      </div>

      <div className="extra content">
        <div className="ui two buttons">
          <span className="ui green basic button">
            <i className="ui icon edit"></i>
          </span>
          <span className="ui red basic button">
            <i className="ui icon trash"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    featured: PropTypes.bool,
  }),
};

export default memo(FilmCard);
