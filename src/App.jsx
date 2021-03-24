import React, {Component} from "react";
import FilmsList from "pages/FilmsPage/components/FilmsList";
import FilmContext from "contexts/FilmContext";
import {films} from "data";
import {sortBy, prop, sortWith, descend, ascend} from "ramda";

class App extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    this.setState({films});
  }

  sortFilms = films => {
    const sortFilms = sortWith([
      descend(prop("featured")),
      ascend(prop("title")),
    ]);
    return sortFilms(films);
  };

  toggle = id =>
    this.setState({
      films: this.state.films.map(item =>
        item._id === id ? {...item, featured: !item.featured} : item,
      ),
    });

  render() {
    const {films} = this.state;
    const {sortFilms, toggle} = this;

    return (
      <div className="ui container mt-3">
        <FilmContext.Provider value={toggle}>
          <FilmsList films={sortFilms(films)} />
        </FilmContext.Provider>
      </div>
    );
  }
}

export default App;
