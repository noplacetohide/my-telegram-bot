import './index.css';
import BottomNavigation from './components/BottomNavigation';
import TopNavigation from './components/TopNavigation';
import MainBody from './components/MainBody';

const App = () => {
  return (
    <div className="bg-gradient-to-t from-slate-700 to-slate-800 min-h-screen px-4 flex flex-col items-center text-white font-medium">
      <TopNavigation />
      <MainBody />
      <BottomNavigation />
    </div>
  );
};

export default App;
