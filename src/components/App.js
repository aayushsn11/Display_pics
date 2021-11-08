import React from "react";
import unsplash from "../api/unsplash";
import Searchbar from "./Searchbar";
import Imagelist from "./Imagelist";
// const App = () => {
//   return (
//     <div className="ui container" style={{ marginTop: "10px" }}>
//       <Searchbar />
//     </div>
//   );
// };
class App extends React.Component {
  state = { images: [] };

  componentDidMount() {
    this.onSearchSubmit("guns");
  }
  onSearchSubmit = async (term) => {
    //Axios
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    console.log(response);
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Searchbar onSubmit={this.onSearchSubmit} />
        Found images{this.state.images.length} Images
        <Imagelist images={this.state.images} />
      </div>
    );
  }
}

export default App;
