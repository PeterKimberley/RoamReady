import { login } from './actions'

export default function LoginPage({ searchParams }: { searchParams: { error?: string } }) {
    return (
        <div>
            <h1>Log in</h1>
            {searchParams?.error && <p style={{ color: 'red' }}>{searchParams.error}</p>}
            <form action={login}>
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}
