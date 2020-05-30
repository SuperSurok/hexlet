import React, { Component } from "react";

class MyFormScholar extends Component {
  static defaultProps = {
    checked: false,
  };

  constructor(props) {
    super(props);
    const { checked } = this.props;
    this.state = {
      email: "",
      password: "",
      address: "",
      city: "",
      country: "",
      checked,
      renderFromFlag: true,
      renderTableFlag: false,
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      renderFromFlag: false,
      renderTableFlag: true,
    });
  };

  handleAccept = () => {
    this.setState(({ checked }) => ({ checked: !checked }));
  };

  handleBackToForm = (e) => {
    e.preventDefault();
    this.setState({
      renderFromFlag: true,
      renderTableFlag: false,
    });
  };

  render() {
    const {
      email,
      password,
      address,
      city,
      country,
      checked,
      renderFromFlag,
      renderTableFlag,
    } = this.state;

    const formAddress = (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4" className="col-form-label">
              Email
            </label>
            <input
              onChange={this.handleChange}
              type="email"
              name="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
              value={email}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4" className="col-form-label">
              Password
            </label>
            <input
              onChange={this.handleChange}
              type="password"
              name="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
              value={password}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress" className="col-form-label">
            Address
          </label>
          <textarea
            onChange={this.handleChange}
            type="text"
            name="address"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            value={address}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity" className="col-form-label">
              City
            </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="city"
              className="form-control"
              id="inputCity"
              value={city}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputCountry" className="col-form-label">
              Country
            </label>
            <select
              onChange={this.handleChange}
              value={country}
              id="inputCountry"
              name="country"
              className="form-control"
            >
              <option>Choose</option>
              <option value="argentina">Argentina</option>
              <option value="russia">Russia</option>
              <option value="china">China</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <label className="form-check-label" htmlFor="rules">
              <input
                onChange={this.handleAccept}
                checked={checked}
                id="rules"
                type="checkbox"
                name="acceptRules"
                className="form-check-input"
              />
              Accept Rules
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    );

    const tableAnswers = (
      <div>
        <button type="button" onClick={this.handleBackToForm}>
          Back
        </button>
        <table className="table">
          <tbody>
            <tr>
              <td>acceptRules</td>
              <td>{`${checked}`}</td>
            </tr>
            <tr>
              <td>address</td>
              <td>{address}</td>
            </tr>
            <tr>
              <td>city</td>
              <td>{city}</td>
            </tr>
            <tr>
              <td>country</td>
              <td>{country}</td>
            </tr>
            <tr>
              <td>email</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>password</td>
              <td>{password}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );

    return (
      <>
        {renderFromFlag && formAddress}
        {renderTableFlag && tableAnswers}
      </>
    );
  }
}

export default MyFormScholar;
