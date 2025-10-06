import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <p>© {new Date().getFullYear()} Telegram Premiun.</p>
    </footer>
  );
}
