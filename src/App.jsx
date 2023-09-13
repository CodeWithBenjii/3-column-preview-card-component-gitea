function App() {
  return (
    <>
     <main className="d-flex align-self-center mt-5">
    <section className="sedans">
      <img src="./images/icon-sedans.svg" alt=""/>
      <header> 
        <h1>SEDANS</h1>
      </header>
      <div className="text">
        <p> Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city
          or on your next road trip.</p>
      </div>
      <div className="learnmore1">
        <a href="#">Learn More</a>
      </div>
    </section>

    <section className="suv">
      <img src="./images/icon-suvs.svg" alt=""/>
      <header>
        <h1>SUVs</h1>
      </header>
      <div className="text">
        <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and
          off-road adventures.</p>
      </div>
      <div className="learnmore2">
        <a href="#">Learn More</a>
      </div>
    </section>

    <section className="luxury">
      <header>
        <img src="./images/icon-luxury.svg" alt=""/>
        <h1>Luxury</h1>
      </header>
      <div className="text">
        <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury
          rental and arrive in style.</p>
      </div>
      <div className="learnmore3">
        <a href="#">Learn More</a>
      </div>
    </section>
  </main>
    </>
  )
}

export default App
