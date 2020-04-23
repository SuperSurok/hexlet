import React, { Component } from "react";

class MyFormMaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: "",
        password: "",
        city: "",
        country: "",
        address: "",
        acceptRules: false,
      },
      submittingState: "fillingForm",
    };
  }

  handleChangeField = ({ target }) => {
    const { form } = this.state;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({ ...form, [target.name]: value });
  };

  handleBackToForm = () => {
    this.setState({ submittingState: "fillingForm" });
  };

  handleSubmitForm = () => {
    this.setState({ submittingState: "submitted" });
  };

  renderRow = (key) => {
      const { form } = this.state;
      return (
          <tr key={key}>
              <td>{key}</td>
              <td>{form[key].toString()}</td>
          </tr>
      )
  }

  renderResult() {
      const {form} = this.state;
      const keys = Object.keys(form).sort();
      return (
          <div>
              <button type="button" onClick={this.handleBackToForm}>Back</button>
              <table key="fieldsValues" className="table">
                  <tbody>
                  {keys.map(this.renderRow)}
                  </tbody>
              </table>
          </div>
      )
  }

  render() {
    return <div></div>;
  }
}

export default MyFormMaster;
