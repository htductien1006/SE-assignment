import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import UwcNavbar from "../uwc-navbar/uwc-navbar"
// import "./vehicle-assign.css";

const VehicleAssign = () => {
    import("./vehicle-assign.css");
    const params = useParams();
    const truckList = [
        {id: 0}, 
        {id: 1},
        {id: 2},
        {id: 3}
    ];
    const trollerList = [
        {id: 0}, 
        {id: 1},
        {id: 2},
        {id: 3}
    ];

    var rows;

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

    const [currentID, setCurrentID] = useState();

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
                                    <td key={col.id} className="vehicle-table-data"
                                        onChange={() => setCurrentID(col.id)}
                                        style = {{backgroundColor: col.id === currentID && "rgb(200, 200, 200)"}}>
                                        <input type="radio" id={col.id} name={params.staffType === "janitor" ? "TrollerList" : "TruckList"} value={col.id}/>
                                        <label for={col.id}>Vehicle ID #{col.id}</label>
                                    </td>
                                ))}
                            </tr>
                        ))}
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