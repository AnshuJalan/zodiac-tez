import React from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { connectWallet } from "../actions";

const Wallet = ({ connectWallet }) => {
  return (
    <div className="column-flex">
      <Button
        size="large"
        variant="outlined"
        color="primary"
        onClick={connectWallet}
      >
        Connect Thanos Wallet
      </Button>
      <span style={linkTextStyle}>
        To know more about Thanos, check the offical{" "}
        <a color="primary" href="https://thanoswallet.com/" target="_blank">
          website
        </a>{" "}
        <span style={{ fontSize: "13px" }} className="material-icons">
          launch
        </span>
      </span>
    </div>
  );
};

const linkTextStyle = { fontWeight: "100", fontSize: "13px", marginTop: "4px" };

const mapStateToProps = (state) => {
  return {
    wallet: state.wallet,
  };
};

export default connect(mapStateToProps, { connectWallet })(Wallet);