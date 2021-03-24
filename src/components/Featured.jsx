import React, {useContext} from "react";
import FilmContext from "contexts/FilmContext";
import PropTypes from "prop-types";

const Featured = ({film}) => {
  const cls = film.featured ? "yellow" : "empty";
  const toggle = useContext(FilmContext);

  return (
    <span className="ui right corner label" onClick={() => toggle(film._id)}>
      <i className={`${cls} star icon`}></i>
    </span>
  );
};

Featured.propTypes = {
  film: PropTypes.object.isRequired,
};
export default Featured;
