const root = ReactDOM.createRoot(document.getElementById('root'))

const h1 = <h1>hola mundo</h1>

const p = <p>this is a paragraph</p>

root.render([h1, p, <Hello />])

function Hello() {
    return <h2>hello 👋</h2>
}