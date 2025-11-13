export default function Header({user}) {
    return(<header>
        <h1>NC News</h1>
        <div>
        <h3>You are logged in as: {user}</h3>
        </div>
      </header>)
}