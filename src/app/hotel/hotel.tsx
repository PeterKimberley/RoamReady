export default function hotelpage() {
    return (
       <main>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=search" />
            <section className = "hotel">
                <div className = "hotel-title">
                    <h1 className = "roam"> RoamReady </h1>
                    <button type = "button"> Flights </button>
                    <button type = "button"> Hotel </button>
                    <form>
                        <div className = "search">
                            <span className= "search-icon material-symbols-outlined"> search </span>
                            <input className = "search-input" type = "search" placeholder = "Search"/>
                        </div>
                    </form>
                    <p>Not sure where to start? Here are popular Hotels...</p>
                </div>
                <div className = "hotel-japan">
                    {/* add image here */}
                    <h1>Hotels in Japan </h1>
                    <p>Features tatami mats, sliding doors, low tables and includes onsen (hot spring) and multi-course kaiseki dining.</p>
                    <button type = "button"> More Details </button>
                    {/* add image here */}
                    <h1>Hotels in France </h1>
                    <p>Features 2 bedrooms, great dining, and exceptional service.</p>
                    <button type = "button"> More Details </button>
                    {/* add image here */}
                    <h1>Hotels in Italy </h1>
                    <p>Features 3 bedrooms, has great views, and best food service.</p>
                    <button type = "button"> More Details </button>
                    {/* add image here */}
                    <h1>Hotels in Mexico </h1>
                    <p>Features 4 bedrooms, has a private pool, and is located near the beach.</p>
                    <button type = "button"> More Details </button>
                </div>
            </section>
        </main>
    )
}