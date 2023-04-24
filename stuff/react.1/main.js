const root = ReactDOM.createRoot(document.getElementById('root'))

const h1 = React.createElement('h1', null, 'hola mundo')

const p = React.createElement('p', null, 'this is a paragraph')

root.render([h1, p])