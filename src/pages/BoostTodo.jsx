import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskList from '../components/TaskList';

export default function AestheticTodo({ backgroundImage }) { // Correction de la prop
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const handleAddTask = (text) => {
    setTasks([...tasks, {
      id: Date.now(),
      text,
      completed: false
    }]);
  };

  const handleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center p-4 font-sans bg-cover bg-fixed"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <button
        onClick={() => navigate('/')}
        className="mb-8 px-4 py-2 bg-orange-400/90 rounded-lg text-slate-600 hover:bg-white/2 transition-colors backdrop-blur-sm"
      >
        ← Back to Modes
      </button>

      <TaskList
        mode="boost"
        tasks={tasks}
        onAddTask={handleAddTask}
        onComplete={handleComplete}
        onDelete={handleDelete}
        className="backdrop-blur-lg bg-white/10 rounded-xl p-6 shadow-xl w-full max-w-2xl"
      />
    </div>
  );
}