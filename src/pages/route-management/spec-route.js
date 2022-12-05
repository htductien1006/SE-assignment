import React from 'react';
import UwcNavbar from "../uwc-navbar"
import { Link } from 'react-router-dom';
import "../../css/route-management.css";
import iconArrowBackOutl from "../../assets/page-management/iconArrowBackOutl.svg";
import image1 from "../../assets/page-management/image1.png";

const SpecRoute = () => {
  return (
    <div className="route-management">
      <UwcNavbar/>
      <span className="route-management-title">ROUTE MANAGEMENT</span>
      <div className="route-management-body">
        <div className="route-list">
          <div className="route-list-header">
            <span className="cc-route-to">Các Route đã tạo</span>
          </div>
          <div className="route-info">
            <div className="route-info-nav">
              <Link className="text-link" to={"../route-management/list"}>
                <img className="back-icon" alt="back-icon" src={iconArrowBackOutl} />
                <span className="route-1">Route 1</span>
              </Link>
            </div>
            <div className="route-info-body">
              <img className="route-map" alt="route-map"  src={image1} />
              <div className="route-info-spec">
                <div className="info-list">
                  <span className="list-header">Thông tin đường đi</span>
                  <span className="list-item">
                    Độ dài quãng đường: 5 Km
                  </span>
                  <span className="list-item">
                    Đi qua: 6 MCP 3 Khu phố{" "}
                  </span>
                  <span className="list-item">
                    Tổng trọng lượng tối đa: 100 Kg
                  </span>
                </div>
                <div className="info-list">
                  <span className="list-header">Chi tiết MCP</span>
                  <span className="list-item">MCP 1 - Khu phố 1</span>
                  <span className="list-item">MCP 1 - Khu phố 1</span>
                  <span className="list-item">MCP 1 - Khu phố 1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn-create-route">
          <span className="to-route-mi">Tạo Route mới</span>
        </button>
      </div>
    </div>
  );
};
export default SpecRoute;

