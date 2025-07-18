const Header = () => {
  return (
    <header
      style={{
        height: '30vh',
        background: 'url("/Header.jpg") center/cover',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.62)',
          padding: '10px',
          textAlign: 'center',
        }}
      >
        <h1>¡Bienvenidos a la Pizzería Mamma Mia!</h1>
        <p>Tenemos las mejores pizzas que podras encontrar</p>
      </div>
    </header>
  );
};

export default Header;
