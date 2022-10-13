import IconCloud from '../../components/iconCloud/IconCloud'
import './skills.scss'
const Skills = () => {


  return (
    <>
       <div className="container-main">
        <div className="container-left">
          <div className="skill-text">
          <p>
            I love to keep a variety of tools in my tech stack. I also make sure
            to be pro at using one tool before moving on to the next. I keep
            myself up to date with the latest technologies around.
          </p>
          <p>
            Looking for a role in a company with the opportunity to work with
            the latest technologies on challenging and diverse projects.
          </p>
        </div>
        </div>
        <div className="container-right">
          <div  className='cloud'>

            <IconCloud />
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
