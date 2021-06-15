import cn from "./Header.module.css";
function Header() {
  return (
    <header className={cn.header}>
      <img
        className={cn.logo}
        src="https://cryptologos.cc/logos/uniswap-uni-logo.svg"
        alt="Logo"
      />
    </header>
  );
}

export default Header;
