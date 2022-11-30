import { useEffect, useState } from 'react';
import './style.css';
import { DATA, INFO } from '../data/fakedata';

export const TaskInformation = () => {
    const tempoLocal = localStorage.getItem('tempo');
    const [tempo, setTempo] = useState(tempoLocal ? tempoLocal : DATA[0]);
    const [n, setN] = useState(0);

    useEffect(() => {
        setN(tempo.task.length);
    }, [tempo]);

    const handleSessionChange = e => {
        const res = {
            session: e.target.value,
            content: tempo.task[n-1].content,
        }
        let newData = [...tempo.task];
        newData.pop();
        newData.push(res);
        setTempo({
            ...tempo,
            task: newData,
        })
    }
    const handleContentChange = e => {
        const res = {
            session: tempo.task[n-1].session,
            content: e.target.value,
        }
        let newData = [...tempo.task];
        newData.pop();
        newData.push(res);
        setTempo({
            ...tempo,
            task: newData,
        })
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
                <h4 className="text-center col-7" style={{ fontWeight: 'bold' }}>EDIT TASK</h4>
                <div className="bg-light col-7 p-4 rounded-3 border border-dark">
                    {tempo && tempo.task.map(todo => 
                        <div className='p-2'>
                            Buổi: 
                            <input 
                                value={todo.session} 
                                onChange={handleSessionChange}
                                className='col-6 ms-3 me-1'
                            />
                            <input 
                                value={todo.content} 
                                onChange={handleContentChange}
                                className='col-5'
                            />
                        </div>
                    )}
                    <button 
                        className="btn btn-primary m-2" 
                        onClick={() => 
                            tempo.task[n-1].session.trim() && tempo.task[n-1].content.trim()  && setTempo({
                                ...tempo,
                                task: [
                                    ...tempo.task,
                                    {
                                        session: '',
                                        content: '',
                                    },
                                ]
                        })}
                    >
                        +
                    </button>
                    <div>
                        From <input type="date" className='col-5 me-5'/>
                        to <input type="date" className='col-5'/>
                    </div>
                    <div className="d-flex justify-content-center py-3">
                        <button 
                            className="btn btn-info mx-5 border border-dark" 
                            onClick={() => console.log(tempo)}
                        >
                            Confirm
                        </button>
                        <button 
                            className="btn btn-danger mx-5 border border-dark" 
                            onClick={() => console.log(tempo)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
                <div className='col-5 text-end py-5'>
                    <h4>Vehicle: Troller 1</h4>
                    <button className="btn btn-success mb-5">Assign vehicle</button>
                    <h4>MCP: M1, M2, M3</h4>
                    <button className="btn btn-danger">Assign MCP</button>
                </div>
            </div>
        </div>
    );
}