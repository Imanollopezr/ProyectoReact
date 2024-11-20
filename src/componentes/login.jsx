const Login = () => {
    return (
        <div style={{ margin: "auto", maxWidth: "400px", padding: "1rem" }}>
            <h2>Iniciar Sesión</h2>
            <form action="/login" method="POST">
                <div style={{ marginBottom: "1rem" }}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        style={{ width: "100%" }}
                    />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        style={{ width: "100%" }}
                    />
                </div>
                <button type="submit" style={{ width: "100%" }}>
                    Iniciar Sesión
                </button>
            </form>
        </div>
    );
};

export default Login;
