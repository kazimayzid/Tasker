import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/heroSection/Hero";
import TaskBoard from "./components/taskBoard/TaskBoard";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <TaskBoard />
      </div>
      <Footer />
    </>
  );
}

export default App;
