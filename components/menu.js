import menu from '../components/menu.module.css';

export default function Menu({ children }) {
  return <div className={menu.container}>
    <div
      className={`menu-item ${menu.text}`}
    >{children}</div>
  </div>
}
