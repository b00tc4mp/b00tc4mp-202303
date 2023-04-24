function Calculin() {
    console.log('Calculin -> render')

    const handleAdd = function(event) {
        event.preventDefault()

        const a = Number(event.target.a.value)
        const b = Number(event.target.b.value)

        const res = a + b

        console.log(res)
    }

    return <section>
        <form onSubmit={handleAdd}>
            <input type="number" name="a"></input>
            <input type="number" name="b"></input>
            <button type="submit">Add</button>
            <span></span>
        </form>
    </section>
}