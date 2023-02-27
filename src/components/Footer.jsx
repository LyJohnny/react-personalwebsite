import "./styles/Footer.scss";
import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Textra from "react-textra";

function Footer() {
  return (
    <>
      <div className="footer"> </div>
      <div className="footerText">
        <p id="location">
          {" "}
          Made with ❤️ from{" "}
          <Textra
            effect="downTop"
            data={["New York, NY", "Long Beach, CA", "Merced, CA"]}
          />{" "}
        </p>
        <p id="trademark"> © 2023 Johnny Ly</p>
      </div>

      <div className="icon-area">
        <div className="d-flex text-center ms-0 justify-content-center ">
          <ul id="footer-icons">
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id="linkedInTooltip">
                  <strong>@johnny-ly</strong>
                </Tooltip>
              }
            >
              <a href="https://www.linkedin.com/in/johnny-ly-/" target="_blank" rel="noreferrer">
                <li id="linkedin">
                  {" "}
                  <LinkedIn fontSize="small" style={{ color: "" }} />{" "}
                </li>
              </a>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id="linkedInTooltip">
                  <strong>@LyJohnny</strong>
                </Tooltip>
              }
            >
              <a href="https://github.com/LyJohnny" target="_blank" rel="noreferrer">
                <li id="github">
                  <GitHub fontSize="small" style={{ color: "" }} />
                </li>
              </a>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id="linkedInTooltip">
                  <strong>@johnster.shoots</strong>
                </Tooltip>
              }
            >
              <a
                href="https://www.instagram.com/johnster.shoots/"
                target="_blank"
                rel="noreferrer"
              >
                <li id="instagram">
                  {" "}
                  <Instagram fontSize="small" style={{ color: "" }} />{" "}
                </li>
              </a>
            </OverlayTrigger>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
