import ModeButton from '../components/ModeButton';

export default function ModeSelection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-4 font-sans">
      <h1 className="text-white text-3xl font-bold mb-8 text-center">
        Choose Your Todo List Mode
      </h1>

      <div className="flex flex-wrap gap-8 justify-center max-w-4xl p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm shadow-2xl">
      <ModeButton
    to="/aesthetic"
  backgroundImage="/assets/aesthetic.png"// Chemin vers votre image
  emoji="✨🌸"
  label="Aesthetic Mode"
/>
        <ModeButton
          to="/boost"
          backgroundImage="/assets/boost.png"
          emoji="⚡🚀"
          label="Boost Mode"
           className="w-64 h-64"
        />
      </div>
    </div>
  );
}
