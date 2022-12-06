import React from 'react';
import UwcNavbar from "../uwc-navbar"
import { Link } from 'react-router-dom';
import "../../css/route-management.css";
import image1 from "../../assets/page-management/image1.png";

const RouteCreate = () => {
  return (
    <div className="route-management">
      <UwcNavbar/>
      <span className="route-management-title">ROUTE MANAGEMENT</span>
      <div className="route-management-body">
          <div className="container-route-create">            
            <div className="container-col-left">
              <img className="route-create-map" alt="mcp-map" src={image1} />
              <div className="route-create-info">
                <div className="info-list-create">
                  <span className="list-create-header">Thông tin đường đi</span>
                  <span className="list-item">Độ dài quãng đường: 5 Km</span>
                  <span className="list-item">Đi qua: 6 MCP 3 Khu phố</span>
                  <span className="list-item">Tổng trọng lượng tối đa: 100 Kg</span>
                </div>
                <div className="info-list-create">
                  <span className="list-create-header">Chi tiết MCP</span>
                  <span className="list-item">MCP 1 - Khu phố 1</span>
                  <span className="list-item">MCP 1 - Khu phố 1</span>
                  <span className="list-item">MCP 1 - Khu phố 1</span>
                </div>
              </div>              
            </div>
            <div className="container-col-right">
              <div className="MCP-table-list">
                <span className="MCP-table-list-title">Danh sách MCP</span>
                <table className="MCP-table">
                  <colgroup>
                    <col span="1" style={{width: 50 + '%'}}/>
                    <col span="1" style={{width: 50 + '%'}}/>
                  </colgroup>  
                  <tbody>
                    <tr className="MCP-table-row MCP-table-header">
                      <th>Khu vực</th>
                      <th>MCP ID</th>
                    </tr>
                    <tr className="MCP-table-row first-row">
                      <td rowspan="3" className="MCP-area">Khu phố 1</td>
                      <td>MCP 1</td>
                    </tr>
                    <tr className="MCP-table-row">
                      <td>MCP 1</td>
                    </tr>
                    <tr className="MCP-table-row">
                      <td>MCP 1</td>
                    </tr>
                    
                    <tr className="MCP-table-row first-row">
                      <td rowspan="3" className="MCP-area">Khu phố 2</td>
                      <td>MCP 1</td>
                    </tr>
                    <tr className="MCP-table-row">
                      <td>MCP 1</td>
                    </tr>
                    <tr className="MCP-table-row">
                      <td>MCP 1</td>
                    </tr>
                    
                    <tr className="MCP-table-row first-row">
                      <td rowspan="3" className="MCP-area">Khu phố 3</td>
                      <td>MCP 1</td>
                    </tr>
                    <tr className="MCP-table-row">
                      <td>MCP 1</td>
                    </tr>
                    <tr className="MCP-table-row">
                      <td>MCP 1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="btn-submit">
                <div className="btn-body">
                    <Link className="text-link" to={"../route-management/list"}>
                        <span className="btn-cancel">Hủy</span>
                    </Link>
                </div>
                <div className="btn-body">
                    <span className="btn-create">Tạo route</span>
                </div>
              </div>
            </div>
          </div>          
      </div>
    </div>
  );
};
export default RouteCreate;

