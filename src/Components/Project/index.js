import Project1 from '../../Assets/Images/image 12.png';
import Project2 from '../../Assets/Images/image 13.png';
import Project3 from '../../Assets/Images/image 14.png';
import Project4 from '../../Assets/Images/image 15.png';
import Button from '../Button';
import './Project.css';

const OurProjets = () => {

  const project = [
    {title: 'Склад - ', subtitle: 'для компанії Nestle', img: Project1, time: '4 місяці'},
    {title: 'Логістичний центр - ', subtitle: 'Linello', img: Project2, time: '24 місяці.'},
    {title: 'Реконструкція будівлі', img: Project3, time: '6 місяці'},
    {title: 'Металева конструкція ', img: Project4, time: '13 місяці'}
  ]

  return (
    <section className='our-projects'>
      <div className='our-projects__title'>
        Наші проекти
      </div>
      <div className='our-projects__list'>
        {project.map(({title, subtitle, img, time}, index) => {
          return (
            <div key={index} className='our-projects__item'>
              <div className='our-projects__item_info'>
                {title}<span>{subtitle}</span>
              </div>
              <img src={img} alt='projects' />
              <div className='our-projects__item_button'>
                <div>{time}</div>
                <Button variant='project__btn'>
                  Детальніше
                </Button>
              </div>
            </div>
          )
        })}
      </div>
      <Button variant='project__btn center'>
        Всі проекти
      </Button>
    </section>
  )
}

export default OurProjets;