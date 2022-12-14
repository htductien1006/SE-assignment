import { Button, IconButton } from "@mui/material";
import UwcNavbar from "../uwc-navbar/uwc-navbar"
import staffPhoto from "../../assets/staff-info/staffPhoto.png";
import "./index.css";
import arrow from "../../assets/staff-info/arrow-left.png";

const StaffInfo = () => {
  return (
    <div>
      <UwcNavbar />
      <div className="staff-info-wrapper">
        <div className="staff-page-title">THÔNG TIN NHÂN VIÊN</div>
        <div className="staff-page-body">
          <div className="gobackBtn">
            <IconButton aria-label="fingerprint" color="success">
              <img src={arrow} style={{ width: "30px", height: "30px" }} />
            </IconButton>
            <span> Quay lại</span>
          </div>
          <div className="staff-info-container">
            <div className="staff-image">
              <img src={staffPhoto} />
            </div>
            <div className="text-info">
              <div className="personal-staff-info">
                <strong className="subtitle">Thông tin chi tiết</strong>
                <div className="name-id">
                  <p>
                    <strong>Tên: </strong> <span>Nguyễn Văn A</span>
                  </p>
                  <p>
                    <strong>Mã NV: </strong> <span>123456</span>
                  </p>
                </div>
                <p>
                  <strong>Công việc: </strong> <span>Janitor</span>
                </p>
              </div>
              <div className="personal-staff-info">
                <strong className="subtitle">Điều chỉnh thông tin</strong>
                <div className="staff-button">
                  <Button variant="contained" color="success">
                    Thay đổi thông tin
                  </Button>
                  <Button variant="contained">Xóa nhân viên</Button>
                </div>
              </div>
              <div>
                <strong className="subtitle">Thông tin công việc</strong>
                <p>
                  <strong>Loại phương tiện: </strong> <span>Troller</span>
                </p>
                <p>
                  <strong>Mã phương tiện: </strong> <span>123456</span>
                </p>
                <div className="staff-button">
                  <Button variant="contained" color="success">
                    Phân phương tiện
                  </Button>
                  <Button variant="contained">Phân công việc</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffInfo;
