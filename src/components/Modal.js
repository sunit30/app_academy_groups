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
    

    if (!name) {
      alert("Please complete the form");
    } else {
      this.props.formeval(name, timeZone, hours, experience, startDate, dmOK);
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
          <h2>Please fill in your basic details</h2>

          <form action="#">
            <div className="formflex">
              <label htmlFor="name">Slack username* : </label>

              <input
              required
                type="text"
                id="name"
                name="name"
              />
            </div>

            <div className="formflex">
              <label htmlFor="timeZone">Time zone : </label>

              <input
                type="text"
                id="timeZone"
                name="timeZone"
              />
            </div>
            <div className="formflex">
              <label htmlFor="hours">Approximate hours of study per week : </label>

              <input
                type="text"
                id="hours"
                name="hours"
              />
            </div>
            <div className="formflex">
              <label htmlFor="experience">Experience in programming : </label>

              <input
                type="text"
                id="experience"
                name="experience"
              />
            </div>
            <div className="formflex">
              <label htmlFor="startDate">Planned start date : </label>

              <input
                type="text"
                id="startDate"
                name="startDate"
              />
            </div>
            <div className="formflex">
              <label htmlFor="dmOK">Is it OK if someone reaches out over DM? : </label>

              <input
                type="text"
                id="dmOK"
                name="dmOK"
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
