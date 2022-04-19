import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import Axios from "axios";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alphav: {},
    };
  }

  formProcess = () => {
    let date = document.getElementById("buyDate").value;
    let number = document.getElementById("noShares").value;
    let buyprice = document.getElementById("buyPrice").value;
    let name = document.getElementById("name").value;
    if (!date || !number || !buyprice) {
      alert("Please complete the form");
    } else {
      this.props.formeval(date, number, buyprice, name);
    }

  };
  componentDidMount() {
    Axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.props.buttonselected.symbol}&apikey=H2Z2UOQ1GRPMVJFA`
    ).then((response) => {
      this.setState({ alphav: response.data });
    });
  }
  render() {
    return (
      <div id="myModal" className="AddStockForm">
        <div className="modal-content">
          <span onClick={this.props.stopmodal} className="close">
            &times;
          </span>
          <h2>Add {`${this.props.buttonselected.name}`} to My Stocks</h2>

          <form action="#">
            <div className="formflex">
              <label htmlFor="name">Company Name:</label>

              <input
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div className="formflex">
              <label htmlFor="noShares">No. of Shares:</label>
              <input
                required
                type="number"
                id="noShares"
                name="number"
                min={1}
              />
            </div>
            <div className="formflex">
              <label htmlFor="buyPrice">Buy Price:</label>
              <input
                required
                type="number"
                id="buyPrice"
                name="buyprice"
                min={1}
              />
            </div>
            <div className="formflex">
              <label htmlFor="buyDate">Date:</label>
              <input required type="date" id="buyDate" name="date" />
            </div>
            <div className="formflex1">
              <input
                type="submit"
                onClick={
                  this.formProcess
                  //this.props.stopmodal
                }
                defaultValue="Add"
              />
              <button className="AddButton" style={{ display: "none" }}>
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Modal;
