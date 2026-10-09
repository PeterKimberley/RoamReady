export default function SignupPage() {
    return (
        <main>
            <section className = "sign">
                <div className ="sign-up">
                    <h1>Create an Account</h1>
                    <form>
                        <input type="text" placeholder="Full Name" /><br />
                        <input type="email" placeholder="Email" /><br/>
                        <input type="password" placeholder="Password" /><br/>
                        <button type="submit">Sign Up</button><br/>
                    </form>
                </div>
            <section>
        </main> 
    );
}