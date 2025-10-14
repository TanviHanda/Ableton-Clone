import Head from "./components/Head";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="font-serif pl-2">
      <Navbar />
      <Head />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App;