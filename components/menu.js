import menu from '../components/menu.module.css';

export default function Menu({ children }) {
  return <div className={menu.container}>
    <div className={'menu-item'}>
    <div
      className={`menu-item1 ${menu.text}`}
    >{children}</div>
    <div
      className={`menu-item2 ${menu.text}`}
    >{children}</div>
    </div>
  </div>
}
