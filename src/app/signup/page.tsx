import { signup } from '../login/actions'

export default function SignupPage({ searchParams }: { searchParams: { error?: string } }) {
    return (
        <div>
            <h1>Sign Up</h1>
            {searchParams?.error && <p style={{ color: 'red' }}>{searchParams.error}</p>}
            <form action={signup}>
                <input type="text" name="fullName" placeholder="Full Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}
