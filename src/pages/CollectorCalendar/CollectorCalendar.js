import { useState, useCallback } from "react";
import R2c7Copy from "../../components/R2c7Copy";
import PortalPopup from "../../components/PortalPopup";
import R4c2Copy from "../../components/R4c2Copy";
import R4c3Copy from "../../components/R4c3Copy";
import R4c4Copy from "../../components/R4c4Copy";
import R4c5Copy from "../../components/R4c5Copy";
import R4c6Copy from "../../components/R4c6Copy";
import R4c7Copy from "../../components/R4c7Copy";
import R5c1Copy from "../../components/R5c1Copy";
import R5c2Copy from "../../components/R5c2Copy";
import R5c3Copy from "../../components/R5c3Copy";
import R5c4Copy from "../../components/R5c4Copy";
import R5c5Copy from "../../components/R5c5Copy";
import R5c6Copy from "../../components/R5c6Copy";
import R5c7Copy from "../../components/R5c7Copy";
import "./CollectorCalendar.css";
import UwcNavbar from "../uwc-navbar/uwc-navbar";

const CollectorCalendar = () => {
  const [isR2c7CopyPopupOpen, setR2c7CopyPopupOpen] = useState(false);
  const [isR4c2CopyPopupOpen, setR4c2CopyPopupOpen] = useState(false);
  const [isR4c3CopyPopupOpen, setR4c3CopyPopupOpen] = useState(false);
  const [isR4c4CopyPopupOpen, setR4c4CopyPopupOpen] = useState(false);
  const [isR4c5CopyPopupOpen, setR4c5CopyPopupOpen] = useState(false);
  const [isR4c6CopyPopupOpen, setR4c6CopyPopupOpen] = useState(false);
  const [isR4c7CopyPopupOpen, setR4c7CopyPopupOpen] = useState(false);
  const [isR5c1CopyPopupOpen, setR5c1CopyPopupOpen] = useState(false);
  const [isR5c2CopyPopupOpen, setR5c2CopyPopupOpen] = useState(false);
  const [isR5c3CopyPopupOpen, setR5c3CopyPopupOpen] = useState(false);
  const [isR5c4CopyPopupOpen, setR5c4CopyPopupOpen] = useState(false);
  const [isR5c5CopyPopupOpen, setR5c5CopyPopupOpen] = useState(false);
  const [isR5c6CopyPopupOpen, setR5c6CopyPopupOpen] = useState(false);
  const [isR5c7CopyPopupOpen, setR5c7CopyPopupOpen] = useState(false);

  const openR2c7CopyPopup = useCallback(() => {
    setR2c7CopyPopupOpen(true);
  }, []);

  const closeR2c7CopyPopup = useCallback(() => {
    setR2c7CopyPopupOpen(false);
  }, []);

  const openR4c2CopyPopup = useCallback(() => {
    setR4c2CopyPopupOpen(true);
  }, []);

  const closeR4c2CopyPopup = useCallback(() => {
    setR4c2CopyPopupOpen(false);
  }, []);

  const openR4c3CopyPopup = useCallback(() => {
    setR4c3CopyPopupOpen(true);
  }, []);

  const closeR4c3CopyPopup = useCallback(() => {
    setR4c3CopyPopupOpen(false);
  }, []);

  const openR4c4CopyPopup = useCallback(() => {
    setR4c4CopyPopupOpen(true);
  }, []);

  const closeR4c4CopyPopup = useCallback(() => {
    setR4c4CopyPopupOpen(false);
  }, []);

  const openR4c5CopyPopup = useCallback(() => {
    setR4c5CopyPopupOpen(true);
  }, []);

  const closeR4c5CopyPopup = useCallback(() => {
    setR4c5CopyPopupOpen(false);
  }, []);

  const openR4c6CopyPopup = useCallback(() => {
    setR4c6CopyPopupOpen(true);
  }, []);

  const closeR4c6CopyPopup = useCallback(() => {
    setR4c6CopyPopupOpen(false);
  }, []);

  const openR4c7CopyPopup = useCallback(() => {
    setR4c7CopyPopupOpen(true);
  }, []);

  const closeR4c7CopyPopup = useCallback(() => {
    setR4c7CopyPopupOpen(false);
  }, []);

  const openR5c1CopyPopup = useCallback(() => {
    setR5c1CopyPopupOpen(true);
  }, []);

  const closeR5c1CopyPopup = useCallback(() => {
    setR5c1CopyPopupOpen(false);
  }, []);

  const openR5c2CopyPopup = useCallback(() => {
    setR5c2CopyPopupOpen(true);
  }, []);

  const closeR5c2CopyPopup = useCallback(() => {
    setR5c2CopyPopupOpen(false);
  }, []);

  const openR5c3CopyPopup = useCallback(() => {
    setR5c3CopyPopupOpen(true);
  }, []);

  const closeR5c3CopyPopup = useCallback(() => {
    setR5c3CopyPopupOpen(false);
  }, []);

  const openR5c4CopyPopup = useCallback(() => {
    setR5c4CopyPopupOpen(true);
  }, []);

  const closeR5c4CopyPopup = useCallback(() => {
    setR5c4CopyPopupOpen(false);
  }, []);

  const openR5c5CopyPopup = useCallback(() => {
    setR5c5CopyPopupOpen(true);
  }, []);

  const closeR5c5CopyPopup = useCallback(() => {
    setR5c5CopyPopupOpen(false);
  }, []);

  const openR5c6CopyPopup = useCallback(() => {
    setR5c6CopyPopupOpen(true);
  }, []);

  const closeR5c6CopyPopup = useCallback(() => {
    setR5c6CopyPopupOpen(false);
  }, []);

  const openR5c7CopyPopup = useCallback(() => {
    setR5c7CopyPopupOpen(true);
  }, []);

  const closeR5c7CopyPopup = useCallback(() => {
    setR5c7CopyPopupOpen(false);
  }, []);

  return (
    <>
    <UwcNavbar/>
      <div className="collector-calendar-div">
        <div className="background-frame-div">
          <div className="white-background-div">
            <div className="white-background-bottom-div" />
            <img
              className="white-background-top-icon"
              alt=""
              src="../white-background-top.svg"
            />
          </div>
        </div>
        <div className="calendar-frame-div">
          <button className="monthandyear-frame-button">
            <b className="september-2022">September 2022</b>
          </button>
          <div className="dayofweek-frame-div">
            <div className="monday-div">Monday</div>
            <div className="tuesday-div">Tuesday</div>
            <div className="wednesday-div">WEDnesday</div>
            <div className="thursday-div">Thursday</div>
            <div className="friday-div">FRiday</div>
            <div className="saturday-div">saturday</div>
            <div className="sunday-div">SUnday</div>
          </div>
          <main className="calendar-board-main">
            <div className="first-row-div">
              <button className="r1c1-button">
                <div className="r1c1-text-div">29</div>
              </button>
              <button className="r1c2-button">
                <div className="r1c1-text-div">30</div>
              </button>
              <button className="r1c2-button">
                <b className="r1c3-text-b">31</b>
              </button>
              <button className="r1c4-button">
                <div className="r1c4-text-div">01</div>
              </button>
              <button className="r1c2-button">
                <div className="r1c4-text-div">02</div>
              </button>
              <button className="r1c2-button">
                <b className="r1c6-text-b">03</b>
              </button>
              <button className="r1c7-button">
                <div className="r1c4-text-div">04</div>
              </button>
            </div>
            <div className="first-row-div">
              <button className="r1c2-button">
                <div className="r1c4-text-div">05</div>
              </button>
              <button className="r1c2-button">
                <div className="r1c4-text-div">06</div>
              </button>
              <button className="r1c2-button">
                <div className="r1c4-text-div">07</div>
              </button>
              <button className="r1c2-button">
                <div className="r1c4-text-div">08</div>
              </button>
              <button className="r2c5-button">
                <div className="r1c4-text-div">09</div>
              </button>
              <button className="r1c2-button">
                <div className="r1c4-text-div">10</div>
              </button>
              <button className="r2c7-button" onClick={openR2c7CopyPopup}>
                <div className="r2c7-content-div1">
                  <span className="r2c7-content-txt-span1">
                    <p className="vehicle">Vehicle: Garbage Truck 2</p>
                    <p className="vehicle">&nbsp;</p>
                    <p className="chiu-mcp-211">Chiều: MCP 2</p>
                  </span>
                </div>
                <div className="r2c7-text-div1">11</div>
              </button>
            </div>
            <div className="first-row-div">
              <button className="r1c2-button">
                <div className="r1c4-text-div">12</div>
              </button>
              <button className="r1c2-button">
                <div className="r1c4-text-div">13</div>
              </button>
              <button className="r1c2-button">
                <div className="r1c4-text-div">14</div>
              </button>
              <button className="r2c5-button">
                <div className="r1c4-text-div">15</div>
              </button>
              <button className="r1c2-button">
                <div className="r1c4-text-div">16</div>
              </button>
              <button className="r1c2-button">
                <div className="r1c4-text-div">17</div>
              </button>
              <button className="r1c2-button">
                <div className="r1c4-text-div">18</div>
              </button>
            </div>
            <div className="first-row-div">
              <button className="r1c2-button">
                <div className="r1c4-text-div">19</div>
              </button>
              <button className="r2c7-button" onClick={openR4c2CopyPopup}>
                <div className="r4c2-content-div1">
                  <span className="r2c7-content-txt-span1">
                    <p className="vehicle">Vehicle: Garbage Truck 2</p>
                    <p className="vehicle">Sáng: Route1</p>
                    <p className="chiu-mcp-211">Chiều: MCP 2</p>
                  </span>
                </div>
                <div className="r4c2-text-div1">20</div>
              </button>
              <button className="r2c7-button" onClick={openR4c3CopyPopup}>
                <div className="r4c3-content-div1">
                  <span className="r2c7-content-txt-span1">
                    <p className="vehicle">Vehicle: Garbage Truck 2</p>
                    <p className="vehicle">Sáng: Route1</p>
                    <p className="chiu-mcp-211">Chiều: MCP 2</p>
                  </span>
                </div>
                <div className="r4c2-text-div1">21</div>
              </button>
              <button className="r4c4-button" onClick={openR4c4CopyPopup}>
                <div className="r4c4-content-div1">
                  <span className="r2c7-content-txt-span1">
                    <p className="vehicle">Vehicle: Garbage Truck 2</p>
                    <p className="vehicle">Sáng: Route1</p>
                    <p className="chiu-mcp-211">Chiều: MCP 2</p>
                  </span>
                </div>
                <div className="r4c2-text-div1">22</div>
              </button>
              <button className="r4c5-button" onClick={openR4c5CopyPopup}>
                <div className="r4c5-content-div1">
                  <span className="r2c7-content-txt-span1">
                    <p className="vehicle">Vehicle: Garbage Truck 2</p>
                    <p className="vehicle">Sáng: Route1</p>
                    <p className="chiu-mcp-211">Chiều: MCP 2</p>
                  </span>
                </div>
                <div className="r4c2-text-div1">23</div>
              </button>
              <button className="r4c6-button" onClick={openR4c6CopyPopup}>
                <div className="r4c6-content-div1">
                  <span className="r2c7-content-txt-span1">
                    <p className="vehicle">Vehicle: Garbage Truck 2</p>
                    <p className="vehicle">{`Sáng: Route1 `}</p>
                    <p className="chiu-mcp-211">Chiều: MCP 2</p>
                  </span>
                </div>
                <div className="r4c2-text-div1">24</div>
              </button>
              <button className="r4c6-button" onClick={openR4c7CopyPopup}>
                <div className="r4c7-content-div1">
                  <span className="r2c7-content-txt-span1">
                    <p className="vehicle">Vehicle: Garbage Truck 2</p>
                    <p className="vehicle">Sáng:Route1,MCP2</p>
                    <p className="chiu-mcp-211">Chiều: MCP3</p>
                  </span>
                </div>
                <div className="r4c2-text-div1">25</div>
              </button>
            </div>
            <div className="last-row-div">
              <button className="r5c1-button" onClick={openR5c1CopyPopup}>
                <div className="r5c1-content-div1">
                  <span className="r2c7-content-txt-span1">
                    <p className="vehicle">Vehicle: Garbage Truck 2</p>
                    <p className="vehicle">Sáng:Route1,MCP2</p>
                    <p className="chiu-mcp-211">Chiều: MCP3</p>
                  </span>
                </div>
                <div className="r4c2-text-div1">26</div>
              </button>
              <button className="r5c2-button" onClick={openR5c2CopyPopup}>
                <div className="r5c2-content-div1">
                  <span className="r2c7-content-txt-span1">
                    <p className="vehicle">Vehicle: Garbage Truck 2</p>
                    <p className="vehicle">Sáng:Route1,MCP2</p>
                    <p className="chiu-mcp-211">Chiều: MCP3</p>
                  </span>
                </div>
                <div className="r4c2-text-div1">27</div>
              </button>
              <button className="r4c6-button" onClick={openR5c3CopyPopup}>
                <div className="r5c3-content-div1">
                  <span className="r2c7-content-txt-span1">
                    <p className="vehicle">Vehicle: Garbage Truck 2</p>
                    <p className="vehicle">Sáng: Route1</p>
                    <p className="chiu-mcp-211">Chiều: MCP 2</p>
                  </span>
                </div>
                <div className="r2c7-text-div1">28</div>
              </button>
              <button className="r4c5-button" onClick={openR5c4CopyPopup}>
                <div className="r5c4-content-div1">
                  <span className="r2c7-content-txt-span1">
                    <p className="vehicle">Vehicle: Garbage Truck 2</p>
                    <p className="vehicle">{`Sáng: Route1 `}</p>
                    <p className="chiu-mcp-211">Chiều: MCP 2</p>
                  </span>
                </div>
                <div className="r2c7-text-div1">29</div>
              </button>
              <button className="r4c6-button" onClick={openR5c5CopyPopup}>
                <div className="r5c5-content-div1">
                  <span className="r2c7-content-txt-span1">
                    <p className="vehicle">Vehicle: Garbage Truck 2</p>
                    <p className="vehicle">{`Sáng: Route1 `}</p>
                    <p className="chiu-mcp-211">Chiều: MCP 2</p>
                  </span>
                </div>
                <div className="r2c7-text-div1">30</div>
              </button>
              <button className="r4c6-button" onClick={openR5c6CopyPopup}>
                <div className="r5c3-content-div1">
                  <span className="r2c7-content-txt-span1">
                    <p className="vehicle">Vehicle: Garbage Truck 2</p>
                    <p className="vehicle">{`Sáng: Route1 `}</p>
                    <p className="chiu-mcp-211">Chiều: MCP 2</p>
                  </span>
                </div>
                <div className="r2c7-text-div1">01</div>
              </button>
              <button className="r4c6-button" onClick={openR5c7CopyPopup}>
                <div className="r5c5-content-div1">
                  <span className="r2c7-content-txt-span1">
                    <p className="vehicle">Vehicle: Garbage Truck 2</p>
                    <p className="vehicle">{`Sáng: Route1 `}</p>
                    <p className="chiu-mcp-211">Chiều: MCP 2</p>
                  </span>
                </div>
                <div className="r2c7-text-div1">02</div>
              </button>
            </div>
          </main>
        </div>
        {/* <div className="header-bar-frame-div">
          <button className="logoframe-button">
            <div className="logo-text-div">LOGO</div>
          </button>
          <button className="icon-frame-button">
            <img className="textbox-icon" alt="" src="../textbox-icon.svg" />
            <img
              className="notification-icon"
              alt=""
              src="../notification-icon.svg"
            />
            <img className="avatar-icon" alt="" src="../avatar-icon@2x.png" />
          </button>
        </div> */}
      </div>
      {isR2c7CopyPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeR2c7CopyPopup}
        >
          <R2c7Copy onClose={closeR2c7CopyPopup} />
        </PortalPopup>
      )}
      {isR4c2CopyPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeR4c2CopyPopup}
        >
          <R4c2Copy onClose={closeR4c2CopyPopup} />
        </PortalPopup>
      )}
      {isR4c3CopyPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeR4c3CopyPopup}
        >
          <R4c3Copy onClose={closeR4c3CopyPopup} />
        </PortalPopup>
      )}
      {isR4c4CopyPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeR4c4CopyPopup}
        >
          <R4c4Copy onClose={closeR4c4CopyPopup} />
        </PortalPopup>
      )}
      {isR4c5CopyPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeR4c5CopyPopup}
        >
          <R4c5Copy onClose={closeR4c5CopyPopup} />
        </PortalPopup>
      )}
      {isR4c6CopyPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeR4c6CopyPopup}
        >
          <R4c6Copy onClose={closeR4c6CopyPopup} />
        </PortalPopup>
      )}
      {isR4c7CopyPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeR4c7CopyPopup}
        >
          <R4c7Copy onClose={closeR4c7CopyPopup} />
        </PortalPopup>
      )}
      {isR5c1CopyPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeR5c1CopyPopup}
        >
          <R5c1Copy onClose={closeR5c1CopyPopup} />
        </PortalPopup>
      )}
      {isR5c2CopyPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeR5c2CopyPopup}
        >
          <R5c2Copy onClose={closeR5c2CopyPopup} />
        </PortalPopup>
      )}
      {isR5c3CopyPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeR5c3CopyPopup}
        >
          <R5c3Copy onClose={closeR5c3CopyPopup} />
        </PortalPopup>
      )}
      {isR5c4CopyPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeR5c4CopyPopup}
        >
          <R5c4Copy onClose={closeR5c4CopyPopup} />
        </PortalPopup>
      )}
      {isR5c5CopyPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeR5c5CopyPopup}
        >
          <R5c5Copy onClose={closeR5c5CopyPopup} />
        </PortalPopup>
      )}
      {isR5c6CopyPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeR5c6CopyPopup}
        >
          <R5c6Copy onClose={closeR5c6CopyPopup} />
        </PortalPopup>
      )}
      {isR5c7CopyPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeR5c7CopyPopup}
        >
          <R5c7Copy onClose={closeR5c7CopyPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default CollectorCalendar;
