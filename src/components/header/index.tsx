import { Logo } from "../../svg/icon-arrow-up";

export function Header() {
  return (
    <header className="header">
      <section className="content-root">
        <div className="content-header">
          <div className="logo-header">
            <Logo/>
          </div>
          <button className="btn-new-transaction">Nova transação</button>
        </div>
      </section>
    </header>
  );
}
