import { Card } from "./components/card";
import { Header } from "./components/header";
import "./styles/sass/index.scss";
function App() {
  return (
    <main className="container-root">
        <Header />
        <Card />
        <section>
          <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo magni omnis sint obcaecati iusto exercitationem laudantium autem natus, quasi aspernatur expedita similique quo, cupiditate sed? Sed perspiciatis explicabo quae corporis.</div>
        </section>
    </main>
  );
}

export default App;
