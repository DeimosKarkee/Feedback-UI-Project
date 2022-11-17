function Header({ text = "Feedback UI" }) {
  return (
    <header>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

export default Header;
