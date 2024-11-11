function Header({ name, subtitle }) {
    return (
      <header>
        <div className="header-title">{name}</div>
        <div className="subtitle">{subtitle}</div>
      </header>
    )
  }
  
  export default Header