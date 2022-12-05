import React from 'react';
import UwcNavbar from "../uwc-navbar"
import "../../css/uwc-navbar.css";
import "../../css/vehicle-assign.css";

const VehicleAssign = () => {
    return (
      <div className="route-management">
        <UwcNavbar/>
        <span className="vehicle-assign-title">VEHICLE ASSIGNMENT</span>
        <div className="vehicle-assign-body">
            <div className="vehicle-group">
                <span className="vehicle-group-title">Troller</span>
                <table className="vehicle-table">
                    <colgroup>
                      <col span="1" style={{width: 40 + '%'}} />
                      <col span="1" style={{width: 40 + '%'}} />
                    </colgroup>
                    <tbody>
                        <tr className="vehicle-table-row">
                            <td className="vehicle-table-data">
                                Vehicle ID #00
                            </td>
                            <td className="vehicle-table-data">
                                Vehicle ID #01
                            </td>
                        </tr>
                        <tr className="vehicle-table-row">
                            <td className="vehicle-table-data">
                                Vehicle ID #02
                            </td>
                            <td className="vehicle-table-data">
                                Vehicle ID #03
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="vehicle-group">
                <span className="vehicle-group-title">Truck</span>
                <table className="vehicle-table">
                    <colgroup>
                      <col span="1" style={{width: 40 + '%'}} />
                      <col span="1" style={{width: 40 + '%'}} />
                    </colgroup>
                    <tbody>
                        <tr className="vehicle-table-row">
                            <td className="vehicle-table-data">
                                Vehicle ID #00
                            </td>
                            <td className="vehicle-table-data">
                                Vehicle ID #01
                            </td>
                        </tr>
                        <tr className="vehicle-table-row">
                            <td className="vehicle-table-data">
                                Vehicle ID #02
                            </td>
                            <td className="vehicle-table-data">
                                Vehicle ID #03
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
              
            <div className="btn-submit">
                <div className="btn-body">
                    <span className="btn-cancel">Cancel</span>
                </div>
                <div className="btn-body">
                    <span className="btn-save">Save</span>
                </div>
            </div>
        </div>
      </div>
    );
};
export default VehicleAssign;