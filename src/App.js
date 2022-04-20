import React from "react";
import MyStocks from "./components/MyStocks";
import AddStocks from "./components/AddStocks";
import Modal from "./components/Modal";
import Header from "./components/Header";
import firebase from "./fire";
import Axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableStocks: {},
      listStocks: {},
      showModal: false,
    };
    this.buttonSelected = {};
  }
  updateState() {
    Axios.get(
      "https://app-academy-groups-default-rtdb.firebaseio.com/listStocks.json"
    )
      .then((response) => {
        let listStocks = response.data;
        //console.log("now", response.data);

        Axios.get(
          "https://app-academy-groups-default-rtdb.firebaseio.com/tableStocks.json"
        ).then((response) => {
          if (!response.data) {
            this.setState({
              tableStocks: {},
              listStocks: listStocks,
            });
          } else if (!listStocks) {
            this.setState({
              tableStocks: response.data,
              listStocks: {},
            });
          } else {
            this.setState({
              tableStocks: response.data,
              listStocks: listStocks,
            });
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  buttonHandler = (event) => {
    var newPostKey = firebase.database().ref().child("tableStocks").push().key;
    Axios.get(
      "https://app-academy-groups-default-rtdb.firebaseio.com/listStocks.json"
    )
      .then((response) => {
        let keyData = Object.keys(response.data).filter((key) => {
          return response.data[key].symbol == event;
        });

        this.buttonSelected = this.state.listStocks[keyData[0]];
        this.buttonSelected.key = keyData[0];
        this.buttonSelected.newpostkey = newPostKey;
      })
      .then(() => {
        this.startModal();
      });

  };

  startModal = () => {
    this.setState({ showModal: true });
  };
  stopModal = () => {
    this.setState({ showModal: false });
  };
  formEval = (name, timeZone, hours, experience, startDate, dmOK) => {

    firebase
      .database()
      .ref("tableStocks/" + this.buttonSelected.newpostkey + "/")
      .set({ name: name,
        timeZone : timeZone,
        hours : hours,
        experience : experience,
        startDate: startDate,
        dmOK: dmOK
        })
      .then(() => {
        this.updateState();
      })
      .then(() => {
        this.stopModal();
      });
  };

  componentDidMount() {
    this.updateState();
  }
  render() {
    var d = new Date();
    var day = d.getDay();
    var dayStyle = {
      textAlign: "center",
      fontSize: "calc(0.5em + 0.6vw)",
      fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
      color: "rgba(0, 0, 0, 0.69)",
    };
    return (
      <div>
        <Header></Header>
        <br></br>

        <AddStocks
          //addtoTable={this.addtoMyStocks}
          data={this.state.listStocks}
          buttonHandler={this.buttonHandler}
          startmodal={this.startModal}
        ></AddStocks>

        <MyStocks
          data={
            //<tr>{this.tableData()}</tr>
            this.state.tableStocks
            //this.buttonSelected
          }
          stopHandler={this.stopHandler}
          counter={Object.keys(this.state.tableStocks).length}
        ></MyStocks>

        {this.state.showModal == true ? (
          <Modal
            stopmodal={this.stopModal}
            formeval={this.formEval}
            buttonselected={this.buttonSelected}
          ></Modal>
        ) : null}
      </div>
    );
  }
}

export default App;
