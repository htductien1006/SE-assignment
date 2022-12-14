import './BackOfficerDasboard.css'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {BsFillPeopleFill, BsTruck} from 'react-icons/bs'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import UwcNavbar from "../../pages/uwc-navbar/uwc-navbar";

const Mcp = [
    {
        'id': 1,
        'storage': 70
    },
    {
        'id': 2,
        'storage': 30
    },
    {
        'id': 3,
        'storage': 60
    },
    {
        'id': 4,
        'storage': 100
    },
    {
        'id': 5,
        'storage': 10
    },
    {
        'id': 6,
        'storage': 50
    }
]

const Task = [
    {
        'id': 1,
        'name': 'Task1',
        'employees': [
            {
                'id': 1,
                'name': 'XUAN MANH'
            },
            {
                'id': 2,
                'name': 'DUC TIEN'
            }
        ]
    },
    {
        'id': 2,
        'name': 'Task2',
        'employees': [
            {
                'id': 1,
                'name': 'DINH TUAN'
            },
            {
                'id': 2,
                'name': 'NHAT HA'
            },
            {
                'id': 3,
                'name': 'DUC MINH'
            }
        ]
    },
    {
        'id': 3,
        'name': 'Task3',
        'employees': [
            {
                'id': 1,
                'name': 'TRONG PHU'
            },
            {
                'id': 2,
                'name': 'HUU PHU'
            },
            {
                'id': 3,
                'name': 'DUC MINH'
            }
        ]
    },
    {
        'id': 4,
        'name': 'Task4',
        'employees': [
            {
                'id': 1,
                'name': 'LEO MESSI'
            },
            {
                'id': 2,
                'name': 'CRIS RONALDO'
            }
        ]
    },
    {
        'id': 5,
        'name': 'Task5',
        'employees': [
            {
                'id': 1,
                'name': 'LEO MESSI'
            },
            {
                'id': 2,
                'name': 'CRIS RONALDO'
            },
            {
                'id': 3,
                'name': 'HUU PHU'
            }
        ]
    }
]


const GridMcp = (props) => {
    return (
        <div className={`tabs__content__1__Co1__Row`}  style={{color: 'black', fontWeight: 'bold'}}>
            <span>{`MCP${props.id}:`}</span>
            <div style = {{display: 'grid', gridTemplateColumns: `${props.storage}% ${100 - props.storage}%`}}>
                <span className={`percent`} style = {{color: `${(props.storage === 100) ? 'red' : 'blue'}`, backgroundColor: `${(props.storage === 100) ? 'red' : 'blue'}`, width: '100%'}}>''</span>
                <span className={`non_percent`} style = {{marginLeft: '1rem'}}>{`${props.storage}%`}</span>
            </div>
        </div>
    );
}

const TaskList = (props) => {
    return (
        <div className={`tabs__content__2__Co1__row1`}>
            <Link to={'#'} className = {`title__Task`}>{props.title}</Link>
            <span className = {`list_Employee`}>
                {props.employee.reduce((result, cur, i) => {
                    if(i !== props.employee.length - 1) {
                        return result + cur.name + ',  '
                    } else {
                        return result + cur.name
                    }
                }, '' )}
            </span>
        </div>
    );
}

const Tabs = () => {
  const [activeTabId, setActiveTab] = useState(1)
  const [display1, setDisplay1] = useState('block')
  const [display2, setDisplay2] = useState('none')

  const ClickTab = (i) => {
    setActiveTab(i)
    if(i === 1) {
        setDisplay1('block')
        setDisplay2('none')
    }
    else {
        setDisplay1('none')
        setDisplay2('block')
    }
  }

  return (
      <div className={`tabs`}>
        <UwcNavbar/>
          <ul className={`tabs__nav`}>
              <li className={`tabs__item`}>
                  <button className={`tabs__button ${(activeTabId === 1) ? 'active' : ''}`}
                          onClick={() => ClickTab(1)}>
                      STATISTIC
                  </button>
              </li>
              <li className={`tabs__item`}>
                  <button className={`tabs__button ${(activeTabId === 2) ? 'active' : ''}`}
                          onClick={() => ClickTab(2)}>
                      JOBS
                  </button>
              </li>
          </ul>

          <div className={`tabs__content`} style={{display: `${display1}`}}>
            <div className={`tabs__content__1`}>
                <div className={`tabs__content__1__Co1`}>
                    {Mcp.map((i) => 
                        <GridMcp key={i.id} id={i.id} storage={i.storage}/>
                    )}
                </div>
                
                <div className={`tabs__content__1__Co2`}>
                    <div className={`tabs__content__1__Co2__Row1`}>
                        <BsFillPeopleFill style={{width: '5rem', height: '5rem', color: 'black'}}/>
                        <span style={{fontSize: '4rem', color: 'black', marginLeft: '1rem'}}>: 10</span>
                    </div>
                    <div className={`tabs__content__1__Co2__Row2`}>
                        <BsTruck style={{width: '5rem', height: '5rem', color: 'black'}}/>
                        <span style={{fontSize: '4rem', color: 'black', marginLeft: '1rem'}}>: 30</span>
                    </div>
                </div>
            </div>
          </div>

          <div className={`tabs__content`} style={{display: `${display2}`}}>
            <div className={`tabs__content__2`} >
                    <div className={`tabs__content__2__Co1`} >
                        { Task.map((data) => 
                            <TaskList key={data.id} title={data.name} employee={data.employees}/>
                        )}
                    </div>
                    <div className={`tabs__content__2__Co2`}>
                        <Calendar/>
                    </div>
                </div>
            </div>
      </div>
  );
}


export default Tabs;