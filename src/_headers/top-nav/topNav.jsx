import { AiOutlineSearch } from "react-icons/ai";
import { routes, services } from "./topNavServices";
import { NavLink } from "react-router-dom";
// css
import classes from "./topNavs.module.css";

// note the menu in responsive disgn not yet stylyed
// #00 still left
// #01 responsive disgn
// #02 fill react icons when we are on the same page that the icon refers to

const TopNavs = () => {
  return (
    <div className={classes.top_nav} dir="ltr">
      <div className={classes.wrapper}>
        {/* flex-1 */}
        <div className={classes.icons_wrapper}>
          {services.map(({ icon, name }, idx) => (
            <button className={classes.icons_btn}>{icon}</button>
          ))}
        </div>
        {/* Links */}
        <div className={classes.links_wrapper}>
          {routes.map(({ name, route, icon }, idx) => (
            <NavLink
              key={idx}
              style={{ height: "100%" }}
              to={route}
              className={({ isActive }) => isActive && classes.active}
              end
            >
              <div className={classes.link}>
                {icon}
                <h4>{name}</h4>
              </div>
            </NavLink>
          ))}
        </div>
        {/* flex-1 */}
        <div className={classes.logo_wrapper}>
          <div className={classes.serch_bar}>
            <div className={classes.serch_btn}>
              <AiOutlineSearch size={24} />
            </div>
            <input
              dir="rtl"
              placeholder="بحث ...."
              className={classes.serch_input}
            />
          </div>
          <h3 className={classes.logo}>Kazomera</h3>
        </div>
      </div>
    </div>
  );
};

export default TopNavs;
