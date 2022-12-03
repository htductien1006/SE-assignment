import React from 'react';
import { Link } from 'react-router-dom';
import "../../css/uwc-navbar.css";
import "../../css/route-management.css";
import vector1 from "../../assets/page-management/vector1.svg";
import vector from "../../assets/page-management/vector.svg";
import ellipse4 from "../../assets/page-management/ellipse4.png";
import iconTrash from "../../assets/page-management/iconTrash.svg"

function deleteRoute() {
  let text;
  if (window.confirm("Press a button!") == true) {
    text = "You pressed OK!";
  } else {
    text = "You canceled!";
  }
  window.alert(text);
}

const RouteList = () => {
    return (
      <div className="route-management">
        <div className="uwc-navbar">
          <div className="logo">
              <span className="logo-1">LOGO</span>
          </div>
          <div className="uwc-navigator">          
            <div className="uwc-nav-button">JANITOR</div>
            <div className="uwc-nav-button">COLLECTOR</div>
            <div className="uwc-nav-button">ROUTE</div>
          </div>
          <div className="personal-info">
            <img className="icon" src={vector} />
            <img className="icon" src={vector1} />
            <img className="avatar" src={ellipse4} />
          </div>
        </div>
        <span className="route-management-title">ROUTE MANAGEMENT</span>
        <div className="route-management-body">
          <div className="route-list">
            <div className="route-list-header">
              <span className="cc-route-to">Các Route đã tạo</span>
            </div>
            <table className="route-list-body route-table">
              <colgroup>
                <col span="1" style={{width: 30 + '%'}} />
                <col span="1" style={{width: 65 + '%'}}/>
                <col span="1" style={{width: 5 + '%'}}/>
              </colgroup>
              <thead>
                <tr className="table-row table-header">
                  <th className="table-cell">Trạng thái trong tháng</th>
                  <th className="table-cell">Thông tin route</th>
                  <th className="table-cell"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-row">
                  <td className="table-cell">Đang sử dụng</td>
                  <td className="table-cell table-cell-info">
                    <Link to={"../route-management/spec"}>Route 1 Độ dài: 2 Km Đi qua 3 MCP</Link>
                  </td>
                  <td className="table-cell" onClick={deleteRoute}><img className="icon-trash-3" src={iconTrash} /></td>
                </tr>
                <tr className="table-row">
                  <td className="table-cell">Đang sử dụng</td>
                  <td className="table-cell table-cell-info">
                    <Link to={"../route-management/spec"}>Route 1 Độ dài: 2 Km Đi qua 3 MCP</Link>
                  </td>
                  <td className="table-cell" onClick={deleteRoute}><img className="icon-trash-3" src={iconTrash}/></td>
                </tr>
                <tr className="table-row">
                  <td className="table-cell">Đang sử dụng</td>
                  <td className="table-cell table-cell-info">
                    <Link to={"../route-management/spec"}>Route 1 Độ dài: 2 Km Đi qua 3 MCP</Link>
                  </td>
                  <td className="table-cell" onClick={deleteRoute}><img className="icon-trash-3" src={iconTrash} /></td>
                </tr>
                <tr className="table-row">
                  <td className="table-cell">Đang sử dụng</td>
                  <td className="table-cell table-cell-info">
                    <Link to={"../route-management/spec"}>Route 1 Độ dài: 2 Km Đi qua 3 MCP</Link>
                  </td>
                  <td className="table-cell" onClick={deleteRoute}><img className="icon-trash-3" src={iconTrash}/></td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="btn-create-route">
            <span className="to-route-mi">Tạo Route mới</span>
          </button>
        </div>
      </div>
    );
};
export default RouteList;