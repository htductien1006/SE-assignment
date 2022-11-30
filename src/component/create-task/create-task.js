import { Modal } from 'antd';
import { useState } from 'react';
import { DATA, INFO } from '../data/fakedata';

export const CreateTask = () => {

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
        <div className="container">
            <h1 className="text-center">TASK INFORMATION</h1>
            <div className="main-content p-4 row">
                <div className="row mb-3">
                    <img src={INFO.avatar} alt='avatar' className="col-1 rounded-circle p-1"/>
                    <div className="col-2 my-auto">
                        <h1>{INFO.name}</h1>
                        <h5>{INFO.role}</h5>
                    </div>
                    <h5 className="col-2 mt-5 pt-3">ID{INFO.id}</h5>
                </div>
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
                <div className='col-5 text-end py-5'>
                    <h4>Vehicle: Troller 1</h4>
                    <button className="btn btn-success mb-5">Assign vehicle</button>
                    <h4>MCP: M1, M2, M3</h4>
                    <button className="btn btn-danger">Assign MCP</button>
                </div>
                <div className="col-6 mx-auto">
                    <button className="btn btn-danger">New Task</button>
                </div>
            </div>
        </div>
    );
}