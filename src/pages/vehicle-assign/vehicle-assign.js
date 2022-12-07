import React, {useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UwcNavbar from "../uwc-navbar/uwc-navbar"
import "./vehicle-assign.css";

const VehicleAssign = () => {
    const params = useParams();
    const navigate = useNavigate();
    var state_clicked = 'clicked', state_unclick = 'unclick';
    const truckList = [
        {id: 0, state: state_unclick}, 
        {id: 1, state: state_unclick},
        {id: 2, state: state_unclick},
        {id: 3, state: state_unclick}
    ];
    const trollerList = [
        {id: 0, state: state_unclick}, 
        {id: 1, state: state_unclick},
        {id: 2, state: state_unclick},
        {id: 3, state: state_unclick}
    ];

    var [rows, setRows] = useState();

    if (params.staffType === "janitor") { //janitor --> troller
        rows = trollerList.reduce(function (rows, key, index) { 
            return (index % 2 === 0 ? rows.push([key]) 
            : rows[rows.length-1].push(key)) && rows;
        }, []);
    }
    else if (params.staffType === "collector") { //collector --> truck
        rows = truckList.reduce(function (rows, key, index) { 
            return (index % 2 === 0 ? rows.push([key]) 
            : rows[rows.length-1].push(key)) && rows;
        }, []);
    }

    function handleOnClick(id) {
        for (var i=0; i < rows.length; i++) {
            var row = rows[i];
            for (var j=0; j < row.length; j++) {
                var col = row[j];
                if (col.id === id) col.state = state_clicked;
                else col.state = state_unclick;
            }
        }
        const newRows = rows;
        setRows(newRows);
        console.log(newRows);        
        navigate('/vehicle-assign/'+params.staffType, {replace: true});
    }

    return (
      <div className="route-management">
        <UwcNavbar/>
        <span className="vehicle-assign-title">VEHICLE ASSIGNMENT</span>
        <div className="vehicle-assign-body">
            <div className="vehicle-group">
                <span className="vehicle-group-title">
                    {params.staffType === "janitor" ? "Troller" : "Truck"}
                </span>
                <table className="vehicle-table">
                    <colgroup>
                      <col span="1" style={{width: 40 + '%'}} />
                      <col span="1" style={{width: 40 + '%'}} />
                    </colgroup>
                    <tbody>
                        {rows.map((row) => (
                            <tr key={''+row[0].id+row[1].id} className="vehicle-table-row">
                                {row.map((col) => (
                                    <td key={col.id} className={`vehicle-table-data ${col.state === state_clicked ? 'table-data-clicked' : ''}`}
                                        onClick={() => handleOnClick(col.id)}>
                                        Vehicle ID #{col.id}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        {/* <tr className="vehicle-table-row">
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
                        </tr> */}
                    </tbody>
                </table>
            </div>

            {/* <div className="vehicle-group">
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
            </div> */}
              
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