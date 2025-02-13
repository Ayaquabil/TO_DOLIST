import { Link } from 'react-router-dom';

export default function ModeButton({ 
  to, 
  backgroundImage, 
  emoji, 
  label,
  className 
}) {
  return (
    <Link
      to={to}
      className={`relative ${className} flex flex-col items-center justify-center  
                border-2 border-white/20 rounded-xl overflow-hidden
                transition-all duration-300 hover:scale-105 hover:shadow-xl
                group text-yellow-50 focus:outline-none focus:ring-4`}
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay dynamique */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
      
      {/* Contenu centré */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full p-4 text-center">
        <span className="text-4xl mb-3 md:text-5xl">{emoji}</span>
        <span className="text-xl font-bold uppercase tracking-wide md:text-2xl px-4">
          {label}
        </span>
      </div>
    </Link>
  );
}