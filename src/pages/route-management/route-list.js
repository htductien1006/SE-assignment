import React from 'react';
import UwcNavbar from "../uwc-navbar"
import { Link } from 'react-router-dom';
import "../../css/route-management.css";
import iconTrash from "../../assets/page-management/iconTrash.svg"

function deleteRoute() {
  let text;
  if (window.confirm("Press a button!") === true) {
    text = "You pressed OK!";
  } else {
    text = "You canceled!";
  }
  window.alert(text);
}

const RouteList = () => {
    return (
      <div className="route-management">
        <UwcNavbar/>
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
                  <td className="table-cell cell-status">Đang sử dụng</td>
                  <td className="table-cell table-cell-info">
                    <Link className="text-link" to={"../route-management/spec"}>Route 1 Độ dài: 2 Km Đi qua 3 MCP</Link>
                  </td>
                  <td className="table-cell" onClick={deleteRoute}><img className="icon-trash-3" alt="trash-icon" src={iconTrash} /></td>
                </tr>
                <tr className="table-row">
                  <td className="table-cell cell-status">Đang sử dụng</td>
                  <td className="table-cell table-cell-info">
                    <Link className="text-link" to={"../route-management/spec"}>Route 1 Độ dài: 2 Km Đi qua 3 MCP</Link>
                  </td>
                  <td className="table-cell" onClick={deleteRoute}><img className="icon-trash-3" alt="trash-icon" src={iconTrash}/></td>
                </tr>
                <tr className="table-row">
                  <td className="table-cell cell-status">Đang sử dụng</td>
                  <td className="table-cell table-cell-info">
                    <Link className="text-link" to={"../route-management/spec"}>Route 1 Độ dài: 2 Km Đi qua 3 MCP</Link>
                  </td>
                  <td className="table-cell" onClick={deleteRoute}><img className="icon-trash-3" alt="trash-icon" src={iconTrash} /></td>
                </tr>
                <tr className="table-row">
                  <td className="table-cell cell-status">Đang sử dụng</td>
                  <td className="table-cell table-cell-info">
                    <Link className="text-link" to={"../route-management/spec"}>Route 1 Độ dài: 2 Km Đi qua 3 MCP</Link>
                  </td>
                  <td className="table-cell" onClick={deleteRoute}><img className="icon-trash-3" alt="trash-icon" src={iconTrash}/></td>
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