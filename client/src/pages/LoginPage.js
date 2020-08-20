import React, { Component } from "react";
import Input from "../components/input";
import { withTranslation } from "react-i18next";

class LoginPage extends Component {
  state = {
    userName: null,
    password: null,
  };

  onChangeFields = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { t } = this.props;

    return (
      <div className="container">
        <form>
          <h1 className="text-center">{t("Login")}</h1>
          <Input
            type="text"
            name="userName"
            label={t("Username")}
            onChangeFields={this.onChangeFields}
          />
          <Input
            type="password"
            name="password"
            label={t("Password")}
            onChangeFields={this.onChangeFields}
          />
          <div className="text-center">
            <button className="btn btn-primary">{t("Login")}</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withTranslation()(LoginPage);
