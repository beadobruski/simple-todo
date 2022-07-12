import { TbTrash } from 'react-icons/tb';
import { ITask } from '../../App';
import styles from './task.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';

interface Props {
  task: ITask;
  onDeleteTask: (taskId: string) => void;
  onCompleteTask: (taskId: string) => void;
}

export function Task({ task, onDeleteTask, onCompleteTask }: Props) {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => onCompleteTask(task.id)}
      >
        {task.isCompleted ? <BsFillCheckCircleFill size={20} /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ''}>
        {task.title}
      </p>

      <button
        className={styles.deleteButton}
        onClick={() => onDeleteTask(task.id)}
      >
        <TbTrash size={20} />
      </button>
    </div>
  );
}
