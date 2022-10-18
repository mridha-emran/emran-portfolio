import IconCloud from '../../components/iconCloud/IconCloud'
import PageTitle from '../../components/pageTitel/Pagetitel'
import './skills.scss'
const Skills = () => {


  return (
    <>
       <div className="container-main">
        <PageTitle text = 'COMPETENCE' />
        <div className="container-left">
          <div className="skill-text">
          <p>
            {/* I love to keep a variety of tools in my tech stack. I also make sure
            to be pro at using one tool before moving on to the next. I keep
            myself up to date with the latest technologies around. */}
            J'aime garder une variété d'outils dans ma pile technologique. Je m'assure également
            d'être un pro de l'utilisation d'un outil avant de passer au suivant. Je me tiens
            Je me tiens au courant des dernières technologies disponibles.
          </p>
          <p>
            {/* Looking for a role in a company with the opportunity to work with
            the latest technologies on challenging and diverse projects. */}

            A la recherche d'un poste dans une entreprise avec l'opportunité de travailler avec
            les dernières technologies sur des projets ambitieux et variés.
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
