import { TbTrash } from 'react-icons/tb';
import { ITask } from '../../App';
import styles from './task.module.css';

interface Props {
  task: ITask;
  onDeleteTask: (taskId: string) => void;
}

export function Task({ task, onDeleteTask }: Props) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>{task.title}</p>

      <button
        className={styles.deleteButton}
        onClick={() => onDeleteTask(task.id)}
      >
        <TbTrash size={20} />
      </button>
    </div>
  );
}
