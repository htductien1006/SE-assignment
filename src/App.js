import './App.css';
import { CreateTask } from './component/create-task/create-task';
import { TaskInformation } from './component/edit-task/edit-task';

function App() {
    return (
        <div className="App">
            <TaskInformation />
            <CreateTask />
        </div>
    );
}

export default App;
