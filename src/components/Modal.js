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
    let name = document.getElementById("name").value;
    let timeZone = document.getElementById("timeZone").value;
    let hours = document.getElementById("hours").value;
    let experience = document.getElementById("experience").value;
    let startDate = document.getElementById("startDate").value;
    let dmOK = document.getElementById("dmOK").value;
    let groupFound = document.getElementById("groupFound").value;
    

    if (!name) {
      alert("Please complete the form");
    } else {
      this.props.formeval(name, timeZone, hours, experience, startDate, dmOK, groupFound);
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
              <label htmlFor="name">* Slack Name : </label>

              <input
              required
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div className="formflex">
              <label htmlFor="timeZone">Time Zone : </label>

              <input
                type="text"
                id="timeZone"
                name="timeZone"
              />
            </div>
            <div className="formflex">
              <label htmlFor="hours">Hours : </label>

              <input
                type="text"
                id="hours"
                name="hours"
              />
            </div>
            <div className="formflex">
              <label htmlFor="experience">Experience : </label>

              <input
                type="text"
                id="experience"
                name="experience"
              />
            </div>
            <div className="formflex">
              <label htmlFor="startDate">Start Date : </label>

              <input
                type="text"
                id="startDate"
                name="startDate"
              />
            </div>
            <div className="formflex">
              <label htmlFor="dmOK">DM OK : </label>

              <input
                type="text"
                id="dmOK"
                name="dmOK"
              />
            </div>
            <div className="formflex">
              <label htmlFor="groupFound">Group Found : </label>

              <input
                type="text"
                id="groupFound"
                name="groupFound"
              />
            </div>
            <br/>
            <div> * Required </div>
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
