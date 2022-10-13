
import {Cloud, renderSimpleIcon} from 'react-icon-cloud'
import css from "../../assest/skillsIcon/css.svg"
import Bootstrap from "../../assest/skillsIcon/bootstrap.svg"
import Django from "../../assest/skillsIcon/django.svg"
import Git from "../../assest/skillsIcon/git.svg"
import Html from "../../assest/skillsIcon/html.svg"
import javascript from "../../assest/skillsIcon/javascript.svg"
import Materialui from "../../assest/skillsIcon/materialui.svg"
import MongoDb from "../../assest/skillsIcon/mongo-r.png"
import Mysql from "../../assest/skillsIcon/mysqul.png"
import Php from "../../assest/skillsIcon/php-1.svg"
import React from "../../assest/skillsIcon/react.svg"
import Python from "../../assest/skillsIcon/python.svg"
import Postgresql from "../../assest/skillsIcon/postgresql.svg"
import Node from "../../assest/skillsIcon/nodejs.svg"
import Redux from "../../assest/skillsIcon/redux.svg"


const icons = [].map((icon) => {
  return renderSimpleIcon({
    icon,
    size: 42,
    aProps: {
      onClick: (e) => e.preventDefault()
    }
  })
})

 var options = {
    clickToFront: 500,
    dragControl: true,
    imageScale: 3,
    initial: [0.1, -0.1],
    noMouse: true,
    outlineColour: "#0000",
    reverse: true,
    tooltip: "native", 
    tooltipDelay: 0,
    wheelZoom: false,
  
 };
const IconCloud = () => {
  return <Cloud
  options ={options}
  >
    {icons}
    <a href="https://emojipedia.org/globe-showing-americas/">
      <img
        height="35"
        width="35"
        alt="icons"
        src={css}
      />
    </a>
    <a href="https://emojipedia.org/globe-showing-americas/">
      <img
        height="35"
        width="35"
        alt="icons"
        src={Bootstrap}
      />
    </a>
    <a href="https://emojipedia.org/globe-showing-americas/">
      <img
        height="35"
        width="35"
        alt="icons"
        src={Html}
      />
    </a>
    <a href="https://emojipedia.org/globe-showing-americas/">
      <img
        height="35"
        width="35"
        alt="icons"
        src={Git}
      />
    </a>
    <a href="https://emojipedia.org/globe-showing-americas/">
      <img
        height="35"
        width="35"
        alt="icons"
        src={React}
      />
    </a>
    <a href="https://emojipedia.org/globe-showing-americas/">
      <img
        height="35"
        width="35"
        alt="icons"
        src={javascript}
      />
    </a>
    <a href="https://emojipedia.org/globe-showing-americas/">
      <img
        height="35"
        width="35"
        alt="icons"
        src={MongoDb}
      />
    </a>
    <a href="https://emojipedia.org/globe-showing-americas/">
      <img
        height="35"
        width="35"
        alt="icons"
        src={Mysql}
      />
    </a>
    <a href="https://emojipedia.org/globe-showing-americas/">
      <img
        height="35"
        width="35"
        alt="icons"
        src={Materialui}
      />
    </a>
    <a href="https://emojipedia.org/globe-showing-americas/">
      <img
        height="35"
        width="35"
        alt="icons"
        src={Django}
      />
    </a>
    <a href="https://emojipedia.org/globe-showing-americas/">
      <img
        height="35"
        width="35"
        alt="icons"
        src={Php}
      />
    </a>
    <a href="https://emojipedia.org/globe-showing-americas/">
      <img
        height="35"
        width="35"
        alt="icons"
        src={Node}
      />
    </a>
    <a href="https://emojipedia.org/globe-showing-americas/">
      <img
        height="35"
        width="35"
        alt="icons"
        src={Python}
      />
    </a>
    <a href="https://emojipedia.org/globe-showing-americas/">
      <img
        height="35"
        width="35"
        alt="icons"
        src={Postgresql}
      />
    </a>
    <a href="https://emojipedia.org/globe-showing-americas/">
      <img
        height="35"
        width="35"
        alt="icons"
        src={Redux}
      />
    </a>
  
  </Cloud>
}

export default  IconCloud