import { useState } from 'react';

import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function handleAddTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  return (
    <div className="App">
      <Header onAddTask={handleAddTask} />
      <Tasks tasks={tasks} />
    </div>
  );
}
