import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useBetween } from 'use-between';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import UwcNavbar from "../uwc-navbar/uwc-navbar"

import "./route-management.css";
import iconTrash from "../../assets/page-management/iconTrash.svg"
import image1 from "../../assets/page-management/image1.png";
import iconArrowBackOutl from "../../assets/page-management/iconArrowBackOutl.svg";


const useRouteList = () => {
  const [id_generate, setID] = useState(5);
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
  const createRoute = () => {
    setID(id_generate+1);
    const newRoutes = routeList.concat({id: id_generate, status: 'Đang sử dụng', info: 'Độ dài: 2 Km, Đi qua: 3 MCP'});
    setRoutes(newRoutes);
  }
  return {
    routeList,
    deleteRoute,
    createRoute
  }
};

const useSharedRouteList = () => useBetween(useRouteList);

const RouteList = () => {
    const { routeList, deleteRoute } = useSharedRouteList();
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
        cancelButtonText: 'Hủy',
        reverseButtons: true
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
                    <Link className="text-link" to={"../route-management/spec/"+route.id}>{"Route " + route.id + ", " + route.info}</Link>
                  </td> 
                  <td className="table-cell" onClick={() => confirmDelete(route.id)}><img className="icon-trash-3" alt="trash-icon" src={iconTrash} /></td>
                </tr>
                ))}
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

const SpecRoute = () => {
  let params = useParams();

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
              <Link className="text-link" to={"../route-management/"}>
                <img className="back-icon" alt="back-icon" src={iconArrowBackOutl} />
                <span className="route-ID">{"Route "+params.id}</span>
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
                    Đi qua: 6 MCP 3 Khu phố
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
          <Link className="text-link" to={"../route-management/create"}>
            <span className="to-route-mi">Tạo Route mới</span>
          </Link>
        </button>
      </div>
    </div>
  );
};
export {SpecRoute};

const RouteCreate = () => {  
  const { createRoute } = useSharedRouteList();
  const navigate = useNavigate();

  function createRouteConfirm() {
      const MySwal = withReactContent(Swal)
      createRoute();
    
      MySwal.fire({        
          title: 'Tạo route thành công',
          icon: 'success',
          confirmButtonColor: '#1f4287'
      }).then(function(){
        navigate('/route-management', {replace: true})
      })
  };

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
                    <Link className="text-link" to={"../route-management/"}>
                        <span className="btn-cancel">Hủy</span>
                    </Link>
                </div>
                <div className="btn-body">
                    <span className="btn-create" onClick={() => createRouteConfirm()}>Tạo route</span>
                </div>
              </div>
            </div>
          </div>          
      </div>
    </div>
  );
};
export {RouteCreate};
