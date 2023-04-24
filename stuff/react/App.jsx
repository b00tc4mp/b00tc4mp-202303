function App() {
    console.log('App -> render')

    return <main>
        <h1>hello app</h1>

        <ul>
            <li>apple</li>
            <li>orange</li>
            <li>banana</li>
        </ul>

        <Hello />

        <Calculin />

        <Calculin />
    </main>
}