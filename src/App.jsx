import '/src/app.scss'
import { Navbar } from './components/navbar/Navbar';
const App = () => {
  return <div>
    <section id='Homepage'>
      <Navbar />
    </section>
    <section id='Services'>Parallax</section>
    <section>Services</section>
    <section id='Portfolio'>Parallax</section>
    <section>Portafolio1</section>
    <section>Portafolio2</section>
    <section>Portafolio3</section>
    <section id='About'>Parallax</section>
    <section>About</section>
    <section id='Contact'>Contact</section>
  </div>;
};

export default App;
