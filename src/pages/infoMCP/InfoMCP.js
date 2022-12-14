import "../AssignMCPforEmployee/AssignMCPforJanitor";
import React from "react";
import {Link} from "react-router-dom";
import UwcNavbar from "../uwc-navbar/uwc-navbar"

const assigned_MCP =
  {
    id: 1,
    address: "Khu phố 1",
    maxslot: 5, 
    employee: [{name: 'Nhanvien4'},{name: 'Nhanvien5'}],
    capacity: {
      now: '100',
      max: '200'
    },
    img: "./mcp1_image.png"
  }

const InfoMCP = () => {
  return (
    <div>
      <UwcNavbar/>
      <div className={`tabs`}>
        <ul className={`tabs_nav`}>
          <h1 className="text-center">PHÂN VIỆC JANITOR</h1>
        </ul>
        <ul className={`tabs_return`}>
          <h1 className="text-return"><Link to='/AssignEmployee' ><button className="btn"><i className="gg-arrow-left"></i></button></Link>Thông tin MCP {assigned_MCP.id}</h1>
        </ul>
        <div className={`tabs_content`} >
          <div className={`tabs_content_1`}>
            <div className={`tabs_content_1_Co1`}>
            <img src={require('./mcp1_image.jpg')} width = '90%'/>
              
            </div>
            <div className={`tabs_content_1_Co2`}>
              <div>
                  <span className="textMCP-center" style = {{fontSize : "3.5rem"}}>Khu vực</span>
                  <div style = {{color:"red", paddingTop: "1rem",fontSize : "1.8rem"}}>{assigned_MCP.address}</div>
              </div>
              <div className ="capacity">
                  <span className="textMCP-center" style = {{fontSize : "3.5rem"}}>Dung tích</span>
                  <div style = {{color:"black", paddingTop: "1rem",fontSize : "1.8rem"}}><span style = {{paddingRight: "15rem"}}>Hiện tại</span> {assigned_MCP.capacity.now}kg</div>
                  <div style = {{color:"black", paddingTop: "1rem",fontSize : "1.8rem"}}><span style = {{paddingRight: "16.4rem"}}>Tối đa</span>  {assigned_MCP.capacity.max}kg</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoMCP;
