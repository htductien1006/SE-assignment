import { Modal } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DATA, INFO } from '../../Data/data/fakedata';
import UwcNavbar from "../../pages/uwc-navbar/uwc-navbar";
import './style.css';

export const TaskInformation = () => {
    const [data, setData] = useState(DATA);
    const [open, setOpen] = useState(false);
    const [tg, setTG] = useState();

    const handleDelete = () => {
        const newData = data.filter(todo => todo.id !== tg);
        setData(newData);  
        setTG();
        setOpen(false);
    }

    return (
        <div style={{backgroundColor: "white"}}>
            <UwcNavbar/>
            <div className='container-task-infomation'>
                <h1 className="text-center" style={{color: 'black', fontWeight: 'bold'}}>TASK MANAGEMENT</h1>
                <div className="main-content p-4 row">
                    <div className="row">
                        <img src={INFO.avatar} alt='avatar' className="col-auto rounded-circle my-auto"/>
                        <div className="col-2 my-auto">
                            <h1><Link className="text-link" to={"../staff-info"}>{INFO.name}</Link></h1>
                            <div className="id-role-info">
                                <h5>{INFO.role}</h5>
                                <h5>ID{INFO.id}</h5>
                            </div>                        
                        </div>
                    </div>
                    <h4 className="text-center" style={{ fontWeight: 'bold', color: 'black' }}>TASKS INFORMATION</h4>
                    <div className="col-7">
                        {data && data.map((todo, index) => (
                            <div className="bg-light p-4 mb-4 rounded-3 border border-dark row" key={index}>
                                <div className='col-5'>
                                    {todo.task && todo.task.map((item, index) => (
                                        <p className="my-auto"  key={index}>
                                            {`${item.session}: ${item.content}`}
                                        </p>
                                    ))}
                                </div>
                                <div className='col-5 my-auto'>
                                    {`Từ ${todo.startDate} đến ${todo.endDate}`}
                                </div>
                                <div className='col-2 my-auto d-flex justify-content-end'>
                                    <button style={{ color: 'red', border: 'none', background: 'transparent'}} onClick={() => {setOpen(true); setTG(todo.id);}}>
                                        <ion-icon name="trash-outline"></ion-icon>
                                    </button>
                                    <Modal
                                        title="BẠN CÓ CHẮC MUỐN XÓA?"
                                        centered
                                        open={open}
                                        onOk={() => handleDelete()}
                                        onCancel={() => setOpen(false)}
                                    >
                                    </Modal>
                                </div>
                            </div>
                        ))}
                    </div>      
                    <div className='col-4 text-end py-5'>
                        <h4>Vehicle: Troller 1</h4>
                        <button className="btn btn-success mb-5">
                            <Link className="text-link" to={"../vehicle-assign/janitor"}>Assign vehicle</Link>
                        </button>
                        <h4>MCP: M1, M2, M3</h4>
                        <button className="btn btn-danger">
                            <Link className="text-link" to={"../assign-employee"}>Assign MCP</Link>
                        </button>
                    </div>
                    <div className="col-3 mx-auto">
                        <button className="btn btn-danger">
                            <Link className="text-link" to={"../edit-task"}>Add or Edit Task</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}