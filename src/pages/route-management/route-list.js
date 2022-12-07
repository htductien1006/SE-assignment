import React, { useState } from 'react';
import UwcNavbar from "../uwc-navbar"
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "../../css/route-management.css";
import iconTrash from "../../assets/page-management/iconTrash.svg"

const RouteList = () => {
    const [routeList, setRoutes] = useState ([
      {id: 1, status: 'Đang sử dụng', info: 'Độ dài: 2 Km, Đi qua: 3 MCP'},
      {id: 2, status: 'Đang sử dụng', info: 'Độ dài: 2 Km, Đi qua: 3 MCP'},
      {id: 3, status: 'Đang sử dụng', info: 'Độ dài: 2 Km, Đi qua: 3 MCP'},
      {id: 4, status: 'Đang sử dụng', info: 'Độ dài: 2 Km, Đi qua: 3 MCP'},
    ]);

    const deleteRoute = (id) => {
      const newRoutes = routeList.filter(
        (route) => route.id !== id
      );
      setRoutes(newRoutes);
    };

    function confirmDelete(id) {
      const MySwal = withReactContent(Swal)
    
      MySwal.fire({
        title: 'Xóa route',
        text: 'Bạn có muốn xóa route chứ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Xóa',
        cancelButtonText: 'Hủy'
      }).then((result) => {
        if (result.isConfirmed) {
          deleteRoute(id)
        }
      })
    };

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
                {routeList.map((route) => (
                  <tr className="table-row" key={route.id}>
                  <td className="table-cell cell-status">{route.status}</td>
                  <td className="table-cell table-cell-info">
                    <Link className="text-link" to={"../route-management/spec"}>{"Route " + route.id + ", " + route.info}</Link>
                  </td> 
                  <td className="table-cell" onClick={() => confirmDelete(route.id)}><img className="icon-trash-3" alt="trash-icon" src={iconTrash} /></td>
                </tr>
                ))}
                {/* <tr className="table-row">
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
                </tr> */}
              </tbody>
            </table>
          </div>
          <button className="btn-create-route">
            <Link className="text-link" to={"../route-management/create"}>
              <span className="to-route-mi">Tạo Route mới</span>
            </Link>
          </button>
        </div>
      </div>
    );
};
export default RouteList;