
import React from "react";
import { Link } from "react-router-dom";
import UwcNavbar from "../uwc-navbar/uwc-navbar"
const assigned_MCP = [
  {
    id: 1,
    address: "Khu phố 1",
    maxslot: 5,
    employee: [{ name: "Nhanvien4" }, { name: "Nhanvien5" }],
    capacity: {
      now: "100",
      max: "200",
    },
    img: "./public/mcp1_image.png",
  },
  {
    id: 2,
    address: "Khu phố 2",
    maxslot: 5,
    employee: [{ name: "Nhanvien4" }, { name: "Nhanvien5" }],
    capacity: {
      now: "100",
      max: "200",
    },
    img: "./public/mcp1_image.png",
  },
  {
    id: 3,
    address: "Khu phố 2",
    maxslot: 4,
    employee: [{ name: "Nhanvien4" }, { name: "Nhanvien5" }],
    capacity: {
      now: "100",
      max: "200",
    },
    img: "./public/mcp1_image.png",
  },
  {
    id: 4,
    address: "Khu phố 3",
    maxslot: 3,
    employee: [{ name: "Nhanvien4" }, { name: "Nhanvien5" }],
    capacity: {
      now: "100",
      max: "200",
    },
    img: "./public/mcp1_image.png",
  },
];
const other_MCP = [
  {
    id: 1,
    address: "Khu phố 1",
    maxslot: 7,
    employee: [
      { name: "Nhanvien4" },
      { name: "Nhanvien5" },
      { name: "Nhanvien1" },
      { name: "Nhanvien2" },
    ],
  },
  {
    id: 2,
    address: "Khu phố 2",
    maxslot: 2,
    employee: [{ name: "Nhanvien4" }, { name: "Nhanvien5" }],
  },
  {
    id: 3,
    address: "Khu phố 4",
    maxslot: 2,
    employee: [{ name: "Nhanvien4" }, { name: "Nhanvien5" }],
  },
  {
    id: 4,
    address: "Khu phố 3",
    maxslot: 3,
    employee: [{ name: "Nhanvien4" }, { name: "Nhanvien5" }],
  },
  {
    id: 5,
    address: "Khu phố 2",
    maxslot: 3,
    employee: [{ name: "Nhanvien4" }, { name: "Nhanvien5" }],
  },
  {
    id: 6,
    address: "Khu phố 5",
    maxslot: 2,
    employee: [{ name: "Nhanvien4" }, { name: "Nhanvien5" }],
  },
  {
    id: 7,
    address: "Khu phố 6",
    maxslot: 7,
    employee: [{ name: "Nhanvien4" }, { name: "Nhanvien5" }],
  },
];

function deleteMCP() {
  if (
    window.confirm("Bạn có chắc xóa các MCP chỉ định cho janitor không?") ===
    true
  ) {
    window.alert("Xóa MCP chỉ định cho janitor thành công");
  }
}

function confirmMCP() {
  if (
    window.confirm(
      "Bạn có chắc chắn chỉ định các MCP mới cho janitor không?"
    ) === true
  ) {
    window.alert("Phân việc thành công");
  }
}

const Employee = (props) => (
  <>
    <li className="list-group-item ">{props.employee}</li>
  </>
);
const EmployeeCheckBox = (props) => (
  <>
    <li className="list-group-item ">
      {props.employee}{" "}
      <input className="form-check-input checkbox1" type="checkbox" />
    </li>
  </>
);

const ListAssigned = (props) => {
  const slot = props.maxslot - props.employee.length;
  return (
    <>
      <div className="fixed">
        <label
          className="list-group-item check fixedlist"
          style={{ backgroundColor: `${slot === 0 ? "#E23744" : "#D9D9D9"}` }}
        >
          <Link to="/info">{`${
            slot === 0
              ? `MCP ${props.id} - ${props.address} - Đã đầy`
              : `MCP ${props.id} - ${props.address} - Còn trống ${slot}`
          }`}</Link>
          <input
            className="form-check-input"
            style={{ marginLeft: `${slot === 0 ? "74px" : "50px"}` }}
            type="checkbox"
          />
        </label>
        <div className="nav-item dropdown" />
        <a
          href="javascript:;"
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
        >
          Nhân viên
        </a>
        <form className="dropdown-menu liststyle">
          <ul className="list-group ">
            {props.employee?.map((a, i) => (
              <Employee key={i} employee={a.name} />
            ))}
          </ul>
        </form>
      </div>
    </>
  );
};

const ListOther = (props) => {
  const slot = props.maxslot - props.employee.length;
  return (
    <>
      <div className="fixed">
        <label
          className="list-group-item check fixedlist"
          style={{ backgroundColor: `${slot === 0 ? "#E23744" : "#D9D9D9"}` }}
        >
          <Link
            to="/info"
            style={{ color: `${slot === 0 ? "white" : "black"}` }}
          >{`${
            slot === 0
              ? `MCP ${props.id} - ${props.address} - Đã đầy`
              : `MCP ${props.id} - ${props.address} - Còn trống ${slot}`
          }`}</Link>
          <input
            className="form-check-input"
            style={{ marginLeft: `${slot === 0 ? "74px" : "50px"}` }}
            type="checkbox"
          />
        </label>
        <div className="nav-item dropdown" />
        <a
          href="javascript:;"
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
        >
          Nhân viên
        </a>
        <form className="dropdown-menu liststyle">
          <ul className="list-group ">
            {props.employee?.map((a, i) => (
              <EmployeeCheckBox key={i} employee={a.name} />
            ))}
          </ul>
        </form>
      </div>
    </>
  );
};

const AssignEmp = () => {
  import("./AssignMCPforJanitor.css");
  return (
    <div>
      <UwcNavbar/>
      <div className={`tabs`}>
        <ul className={`tabs__nav`}>
          <h1 className="text-center">PHÂN VIỆC JANITOR</h1>
        </ul>
        <ul className={`tabs__return`}>
          <h1 className="text-return">
            <button className="btn">
              <i className="gg-arrow-left"></i>
            </button>
            JANITOR{" "}
          </h1>
        </ul>
        <div className={`tabs__content`}>
          <div className={`tabs__content__1`}>
            <div className={`tabs__content__1__Co1`}>
              <span className="textMCP-center">Các MCP hiện tại</span>
              <div className="card">
                <div className="card-body">
                  {assigned_MCP.map((a) => (
                    <ListAssigned
                      key={[a.id, a.address]}
                      id={a.id}
                      address={a.address}
                      maxslot={a.maxslot}
                      employee={a.employee}
                    />
                  ))}
                  <br />
                </div>
              </div>
              <button
                type="button"
                className="btn btn-danger btndel"
                onClick={deleteMCP}
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              >
                Xóa
              </button>
            </div>
            <div className={`tabs__content__1__Co2`}>
              <span className="textMCP-center">Các MCP khác</span>
              <div className="card">
                <div className="card-body">
                  {other_MCP.map((a) => (
                    <ListOther
                      key={[a.id, a.address]}
                      id={a.id}
                      address={a.address}
                      maxslot={a.maxslot}
                      employee={a.employee}
                    />
                  ))}
                  <br />
                </div>
              </div>
              <div className=" btndel"></div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-success button"
          onClick={confirmMCP}
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        >
          Xác nhận
        </button>
      </div>
    </div>
  );
};

export default AssignEmp;
