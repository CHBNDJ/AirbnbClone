import Picture from '../assets/Group 77.png';

function Hero() {
    return (
        <section className="hero">
            <img src={Picture} alt="Group 77" className="hero--img" />
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--text">
                Join unique interactive activities led by <br /> one-of-a-kind
                hosts—all without leaving <br /> home.
            </p>
        </section>
    );
}

export default Hero;
