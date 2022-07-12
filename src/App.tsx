import { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

const LOCAL_STORAGE_KEY = 'todo:savedTasks';

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function setTasksAndSave(newTasks: ITask[]) {
    setTasks(newTasks);

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function handleAddTask(taskTitle: string) {
    if (taskTitle.length === 0) {
      return toast.error('Por favor, adicione alguma tarefa.', {
        autoClose: 2000,
      });
    } else {
      toast.success('Tarefa adicionada com sucesso!', {
        autoClose: 2000,
      });

      setTasksAndSave([
        ...tasks,
        {
          id: crypto.randomUUID(),
          title: taskTitle,
          isCompleted: false,
        },
      ]);
    }
  }

  function handleDeleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasksAndSave(newTasks);
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });

    setTasksAndSave(newTasks);
  }

  return (
    <div className="App">
      <Header onAddTask={handleAddTask} />
      <Tasks
        tasks={tasks}
        onDeleteTask={handleDeleteTaskById}
        onCompleteTask={toggleTaskCompletedById}
      />

      <ToastContainer pauseOnHover={false} />
    </div>
  );
}
