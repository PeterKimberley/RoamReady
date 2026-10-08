import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>Dream it.
            <br/>
            Plan it.
            <br/>
            <span>Roam.</span>
          </h1>
          <p>From your first idea to your final itinerary, RoamReady keeps your trip organized in one place. </p>
          <div className="hero-actions" >
            <Link href="/signup" className="start-button">Start Planning</Link>
            <Link href="/features" className="explore-button">Explore Features</Link>
          </div>

          <div className="hero-image">
          {/*image place holder */}
          </div>

          <section className="how-it-works">
            <h2>How it works:</h2>

            <div className="steps">
              <div className="create-trips">
                <span className=""></span>
              </div>
            </div>

        
          </section>
         
        </div>

        

        
      

      </section>
    </main>

  );
}