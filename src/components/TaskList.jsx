import { useState } from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ mode, tasks, onAddTask, onComplete, onDelete }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className={`w-full max-w-2xl p-6 rounded-2xl backdrop-blur-sm shadow-2xl
      bg-gradient-to-br ${mode === 'aesthetic' 
        ? 'from-purple-500/20 to-pink-500/20' 
        : 'from-cyan-500/20 to-emerald-500/20'}`}>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={`Add ${mode} task...`}
          className="bg-white/10 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 flex-grow"
          aria-label="Task input"
        />
        <button
          type="submit"
          className={`px-4 py-2 rounded-lg transition-colors text-white font-semibold ${
            mode === 'aesthetic' 
              ? 'bg-purple-600 hover:bg-purple-500' 
              : 'bg-cyan-600 hover:bg-cyan-500'
          }`}
        >
          Add
        </button>
      </form>

      <div className="space-y-2">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            mode={mode}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}