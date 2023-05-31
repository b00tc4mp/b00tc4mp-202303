function CreateAccount () {
    return (
    <div className="register page off">
      <h1>register</h1>

      <form className="form">
        <input className="input" type="name" name="name" placeholder="name" />
        <input className="input" type="email" name="email" placeholder="email" />
        <input
          className="input"
          type="password"
          name="password"
          placeholder="password"
        />

        <button className="button">register</button>
      </form>

      <p>Go to <a href="">login</a></p>
    </div>)
}

export default CreateAccount()