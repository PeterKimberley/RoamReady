export default function SignupPage() {
    return (
        <!DOCTYPE html>
        <html lang = "en">
            <head>
            <title> Sign Up page </title>
            </head>
                <div className ="sign-up">
                    <h1>Create an Account</h1>
                    <form>
                        <input type="text" placeholder="Full Name" /><br />
                        <input type="email" placeholder="Email" /><br/>
                        <input type="password" placeholder="Password" /><br/>
                        <button type="submit">Sign Up</button><br/>
                    </form>
                </div>
            <body>
            </body>
        </html>
        
    );
}