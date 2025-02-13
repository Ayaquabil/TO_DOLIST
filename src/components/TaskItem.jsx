export default function TaskItem({ task, mode, onComplete, onDelete }) {
    return (
      <div className="flex items-center justify-between bg-white/10 p-3 rounded-lg">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onComplete(task.id)}
            className={`text-xl ${
              task.completed 
                ? (mode === 'aesthetic' ? 'text-pink-300' : 'text-cyan-300') 
                : 'text-white/50'
            }`}
            aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
          >
            {task.completed 
              ? (mode === 'aesthetic' ? '🌸' : '✅') 
              : (mode === 'aesthetic' ? '🌺' : '⚡')}
          </button>
          <span className={`text-white ${task.completed ? 'line-through opacity-50' : ''}`}>
            {task.text}
          </span>
        </div>
        <button 
          onClick={() => onDelete(task.id)}
          className="text-red-300 hover:text-red-400 px-2"
          aria-label="Delete task"
        >
          ✕
        </button>
      </div>
    );
  }