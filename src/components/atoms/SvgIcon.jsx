import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';
import figma from '../../assets/svg/skill_figma.svg';
import phyton from '../../assets/svg/skill_python.svg';
import css from '../../assets/svg/skill_css.svg';
import javascript from '../../assets/svg/skill_javascript.svg';
import html from '../../assets/svg/skill_html.svg';
import nodejs from '../../assets/svg/skill_nodejs.svg';
import react from '../../assets/svg/skill_react.svg';
import postgres from '../../assets/svg/skill_postgres.svg';
import mysql from '../../assets/svg/skill_mysql.svg';
import typescript from '../../assets/svg/skill_typescript.svg';
import odoo from '../../assets/svg/skill_odoo.svg';
import icon_github from '../../assets/svg/icon_github.svg';
import wordpress from '../../assets/svg/skill_wordpress.svg';
import arrow from '../../assets/svg/arrow.svg';
import arrow_left from '../../assets/svg/arrow_left.svg';
import photoshop from '../../assets/svg/skill_photoshop.svg';
import illustrator from '../../assets/svg/skill_illustrator.svg';
import contact from '../../assets/svg/contact.svg';
import icon_facebook from '../../assets/svg/icon_facebook.svg';
import instagram from '../../assets/svg/instagram.svg';
import icon_linkedin from '../../assets/svg/icon_linkedin.svg';
import mobile_project from '../../assets/svg/mobile_project.svg';
import icon_deploy from '../../assets/svg/icon_deploy.svg';
import mobile from '../../assets/svg/mobile.svg';
import desktop from '../../assets/svg/desktop.svg';

const icons = {
  figma,
  photoshop,
  illustrator,
  phyton,
  css,
  javascript,
  html,
  nodejs,
  react,
  postgres,
  mysql,
  typescript,
  odoo,
  arrow,
  arrow_left,
  wordpress,
  contact,
  icon_facebook,
  instagram,
  icon_linkedin,
  icon_github,
  mobile_project,
  icon_deploy,
  mobile,
  desktop
};

const SvgIcon = ({ name, size = 24, className, color, ...props }) => {
  const icon = icons[name];

  if (!icon) return null;

  return (
    <ReactSVG
      src={icon}
      className={className} // Asegura que el className de styled-components se aplique
      beforeInjection={(svg) => {
        svg.setAttribute('width', size);
        svg.setAttribute('height', size);

        // Aplica el color correctamente a todos los elementos internos
        if (color) {
          svg.querySelectorAll("*").forEach((el) => {
            el.setAttribute("fill", color);
          });
        }
      }}
      {...props}
    />
  );
};

SvgIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
  color: PropTypes.string
};

export default SvgIcon;
