import Card from './components/Card';
import dataCenter from './Data.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';

export default function App() {
    const cards = dataCenter.map((card) => <Card key={card.id} item={card} />);

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">{cards}</section>
        </div>
    );
}
