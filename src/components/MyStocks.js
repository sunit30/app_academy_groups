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

          <td>{object.timeZone}</td>

          <td>{object.hours}</td>

          <td>{object.experience}</td>

          <td>{object.startDate}</td>

          <td>{object.dmOK}</td>
        </tr>
      );
    });


    return (
      <div className="MyStocks">
        <div className="tableDiv">
          <table className="MyStocksTable">
            <thead>
              <tr>
                <th>Slack name</th>
                <th>Time zone</th>
                <th>Hours per week</th>
                <th>Experience</th>
                <th>Start date</th>
                <th>Connect over DM?</th>
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
