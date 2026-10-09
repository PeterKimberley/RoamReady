export default function LoginPage() {
    return (
         <main>
            <section className = "login">
                <div className ="log-in">
                    <h1>Log in</h1>
                    <form>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Log In</button>
                    </form>
                </div>
            </section>
        </main> 
    );
}
