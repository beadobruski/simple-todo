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

  function handleDeleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  }

  return (
    <div className="App">
      <Header onAddTask={handleAddTask} />
      <Tasks tasks={tasks} onDeleteTask={handleDeleteTaskById} />
    </div>
  );
}
