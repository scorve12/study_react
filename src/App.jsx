// src/App.jsx
import Navbar from './components/Navbar';
import WysiwygInput from './components/WysiwygInput';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* 네비게이션 바 */}
      <Navbar />

      {/* 메인 콘텐츠 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      </main>
    </div>
  );
}

export default App;