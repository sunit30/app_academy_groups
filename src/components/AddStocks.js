import React from "react";
import ReactDOM from "react-dom";
import "./AddStocks.css";
import firebase from "firebase";
import Axios from "axios";
class AddStocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    
    let addData = Object.values(this.props.data).map((object, i) => {
      return (
        <div key={i} className="AddStocksFlex">
          <label>
            <button onClick={this.makeChange} className="StockButton">
              {object.symbol}
            </button>
            <div>{object.name}</div>
          </label>
        </div>
      );
    });

    return (
      <div className="AddStocksTitle">
        <h2>Add stocks to my stocks</h2>
        <div className="outerflex">{addData}</div>
      </div>
    );
  }
  componentDidMount() {
    // this.startData();
  }
  makeChange = (event) => {
    this.props.buttonHandler(event.target.innerHTML);
  };
}

export default AddStocks;
