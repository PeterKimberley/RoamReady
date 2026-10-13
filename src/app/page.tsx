import Link from "next/link";


export default function Home() {
  return (
    <main>
      <section className="hero">
        {/* Hero content */}
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
        </div>          {/* End of Hero content */}

        <div className="hero-image"> 
          {/* Add image for hero content*/}
        </div>
      </section>

      {/* How it works */}
      <section className="how-it-works">
       <h2> How it works:</h2>
        <p>Plan your trip in three easy steps.</p>

        <div className="steps">
          <div className="step">
            <span className="step-one">1</span>
            <h3>Create a trip.</h3>
            <p>Choose your destination and travel dates.</p>
          </div>
          <div className="step">
            <span className="step-two">2</span>
            <h3>Build your plan.</h3>
            <p>Organize your itinerary , budget, and packing lists.</p>
          </div>
          <div className="step">
            <span className="step-three">3</span>
            <h3>Roam.</h3>
            <p>Keep your plans together wherever you go.</p>
          </div>
        </div>
      </section>

      {/* Why RoamReady */}
       <section className="why-roamready">
        <h2>Why RoamReady?</h2>
        <p> Everything you need for a smoother, safer trip.</p>
        <section>

        {/*flights not fights lol */}
        {/*Hotels*/}
        {/*Transportation*/}
        {/*Packages*/}
        {/*Budget*/}
        {/*Itinerary*/}
        {/*Packing*/}
        {/*Safety*/}

        </section>
       
         
         

       </section>

      {/* Ready to Start your adventure */}
      <section className="ready-start">
        <h2>Ready to start your adventure?</h2>
        <p>Join RoamReady and turn your travel plans into real memories.</p>
        <div className="create-account">
          <Link href="/signup" className="signup-button">Create Your Free Account</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
         <p>Copyright 2026 RoamReady. All rights reserved.</p>

         <div className="footer-links">
          <Link href="/about">About</Link>
          <Link href="/features">Features</Link>
         </div>

      </footer>


    </main>
    
  );
}