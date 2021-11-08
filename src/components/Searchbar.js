import React from "react";

class Searchbar extends React.Component {
  state = { term: " " };
  onFormSubmit = (event) => {
    event.preventDefault();
    // this.setState({ term: "" });
    // console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form
          //   onSubmit={(e) => {
          //     this.setState({ term: "" });
          //     e.preventDefault();
          //     console.log(this.state.term);
          //   }}
          onSubmit={this.onFormSubmit}
          className="ui form"
        >
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default Searchbar;
