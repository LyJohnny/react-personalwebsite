import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/Portfolio.scss";

import homeDesktop from "../assets/app-screens/home-desktop.jpg";
import homeMobile from "../assets/app-screens/home-mobile.jpg";
import alertsDesktop from "../assets/app-screens/alerts-desktop.jpg";
import alertsMobile from "../assets/app-screens/alerts-mobile.jpg";
import watchlistDesktop from "../assets/app-screens/watchlist-desktop.jpg";
import watchlistMobile from "../assets/app-screens/watchlist-mobile.jpg";
import productDesktop from "../assets/app-screens/product-desktop.jpg";
import productMobile from "../assets/app-screens/product-mobile.jpg";
import alertModalDesktop from "../assets/app-screens/alert-modal-desktop.jpg";
import alertModalMobile from "../assets/app-screens/alert-modal-mobile.jpg";

const VIEWS = [
  {
    label: "Home — live stock grid",
    desktop: homeDesktop,
    mobile: homeMobile,
    caption:
      "Every product and variant, polled in real time, with drop-day status badges.",
  },
  {
    label: "Alerts feed",
    desktop: alertsDesktop,
    mobile: alertsMobile,
    caption:
      "Push-notified events — restocks, low stock, price changes, sell-outs — filterable by type.",
  },
  {
    label: "Watchlist",
    desktop: watchlistDesktop,
    mobile: watchlistMobile,
    caption:
      "Per-product and per-variant subscriptions, each with independent notify-on flags.",
  },
  {
    label: "Product detail",
    desktop: productDesktop,
    mobile: productMobile,
    caption:
      "Per-size / per-color stock matrix, price-drop history, and drop schedule.",
  },
  {
    label: "Custom alerts",
    desktop: alertModalDesktop,
    mobile: alertModalMobile,
    caption:
      "Per-product notification controls — restock, low stock, sold out, discontinued, plus variant-specific alerts.",
  },
];

function AppScreensModal() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        className="projectLink"
        id="poster-button"
        onClick={() => setShow(true)}
      >
        View App Screenshots
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        animation={true}
        size="xl"
        centered
        scrollable
      >
        <Modal.Header bsPrefix="modal-header" closeButton>
          <div className="modal-title">
            <Modal.Title bsPrefix="modal-title">
              <h4 id="modal-titles">Stock &amp; Drop Tracker — App UI</h4>
            </Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          {VIEWS.map((view) => (
            <div className="app-screen-group" key={view.label}>
              <h5 className="app-screen-caption">{view.label}</h5>
              <p className="app-screen-sub">{view.caption}</p>
              <Row className="app-screen-row">
                <Col xs={8} md={9}>
                  <img
                    src={view.desktop}
                    alt={`${view.label} on desktop`}
                    className="app-screen-img"                  />
                </Col>
                <Col xs={4} md={3}>
                  <img
                    src={view.mobile}
                    alt={`${view.label} on mobile`}
                    className="app-screen-img app-screen-img--mobile"                  />
                </Col>
              </Row>
            </div>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AppScreensModal;
