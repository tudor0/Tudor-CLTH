import "./menu-item.styles.scss";
const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="content">
        <div className="title">{title}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
