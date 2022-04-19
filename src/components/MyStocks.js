import React from "react";
import ReactDOM from "react-dom";
import "./MyStocks.css";

class MyStocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let tabData = Object.values(this.props.data).map((object, i) => {
      return (
        <tr key={i}>
          <td>{object.name}</td>

          <td>{object.number}</td>

          <td>{object.buyprice}</td>
        </tr>
      );
    });


    return (
      <div className="MyStocks">
        <div className="tableDiv">
          <table className="MyStocksTable">
            <thead>
              <tr>
                <th>Stock name</th>
                <th>No.of shares</th>
                <th>Buy price</th>
              </tr>
            </thead>
            <tbody>{tabData}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default MyStocks;
