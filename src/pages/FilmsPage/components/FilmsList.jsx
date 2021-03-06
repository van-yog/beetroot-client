import PropTypes from "prop-types";
import FilmCard from "pages/FilmsPage/components/FilmCard";
import Message from "components/Message";

const FilmsList = ({films}) => {
  return (
    <div className="ui four cards">
      {!films.length ? (
        <Message type="bell" color="orange">
          No films!
        </Message>
      ) : (
        films.map(film => <FilmCard key={film._id} film={film} />)
      )}
    </div>
  );
};

FilmsList.defaultProps = {
  films: [],
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FilmsList;
