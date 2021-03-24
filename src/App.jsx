import React, {Component} from "react";
import FilmsList from "pages/FilmsPage/components/FilmsList";
import FilmContext from "contexts/FilmContext";
import FilmForm from "pages/FilmsPage/components/FilmForm";
import {films} from "data";
import {sortBy, prop, sortWith, descend, ascend} from "ramda";

class App extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    this.setState({films});
  }

  onReset = () => this.setState({films});

  sortFilmsRamda = films => {
    const sort = sortBy(prop("duration"));
    const sortFilms = sort(films);
    return sortFilms;
  };

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
    const {sortFilms} = this;

    return (
      <div className="ui container mt-3">
        <FilmForm />
        {/* <FilmContext.Provider value={this.toggle}>
          <FilmsList films={sortFilms(films)} />
        </FilmContext.Provider> */}
      </div>
    );
  }
}

export default App;
