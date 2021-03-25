import React, {Component} from "react";
import {genres, tags} from "data";

class FilmForm extends Component {
  state = {
    tags: [],
    genre: "",
    sel: "",
    multipleSelect: [],
  };

  componentDidMount() {
    this.setState({genre: genres});
  }

  handleTagsChange = ({target}) => {
    target.checked
      ? this.setState(x => ({tags: [...x.tags, target.value]}))
      : this.setState(x => ({
          tags: x.tags.filter(item => item !== target.value),
        }));
  };

  handleGenreChange = ({target}) => this.setState({genre: target.value});

  handleSelectChange = ({target}) => this.setState({sel: target.value});

  handleMultiSelect = e => {
    const arr = [...e.target.selectedOptions];
    const multipleSelect = [...arr].map(item => item.value);

    this.setState({multipleSelect});
  };

  render() {
    const {sel, multipleSelect} = this.state;
    const {
      handleTagsChange,
      handleGenreChange,
      handleSelectChange,
      handleMultiSelect,
    } = this;
    return (
      <form className="ui form">
        <div className="ui grid">
          <div className="four wide column">
            {/*  =========================  tags  ================  */}
            <div className="grouped fields">
              <label>Tags</label>
              {/* ====== */}
              {tags.map((item, i) => (
                <div className="field" key={item._id}>
                  <div className="ui checkbox field">
                    <input
                      type="checkbox"
                      id={`tag${i}`}
                      onChange={handleTagsChange}
                      value={item.title}
                    />
                    <label htmlFor={`tag${i}`}> {item.title}</label>
                  </div>
                </div>
              ))}
              {/* ====== */}
            </div>
          </div>
          {/*  ==============================   genre ================  */}
          <div className="four wide column">
            <div className="grouped fields">
              <label>Genres</label>
              {/* ====== */}
              {genres.map((item, i) => (
                <div key={item._id} className="ui radio checkbox field">
                  <input
                    type="radio"
                    name="example2"
                    value={item.title}
                    checked={this.state.genre === item.title ? "checked" : ""}
                    onChange={handleGenreChange}
                  />
                  <label htmlFor="example2">{item.title}</label>
                </div>
              ))}
              {/* ====== */}
            </div>
          </div>
          {/*  ==============================   sel ================  */}
          <div className="four wide column">
            <select className="ui dropdown" onChange={handleSelectChange}>
              {genres.map(item => (
                <option key={item._id} value={item.title}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          {/*  ==============================  multipleSelect ================  */}
          <div className="four wide column">
            <select multiple size="SIZE" onChange={handleMultiSelect}>
              {genres.map(item => (
                <option key={item._id} value={item.title}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ====================================================== */}
      </form>
    );
  }
}

export default FilmForm;
