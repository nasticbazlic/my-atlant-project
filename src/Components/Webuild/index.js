import Grey from '../../Assets/Images/Circle.png';
import Icon1 from '../../Assets/Icons/03.svg';
import Icon2 from '../../Assets/Icons/08.svg';

import Image1 from '../../Assets/Images/image 3.svg';
import Image2 from '../../Assets/Images/image 7.svg';
import Image3 from '../../Assets/Images/image 4.svg';
import Image4 from '../../Assets/Images/image 8.svg';
import Image5 from '../../Assets/Images/image 9.svg';
import Image6 from '../../Assets/Images/image 10.svg';
import Image7 from '../../Assets/Images/image 11.svg';
import Image8 from '../../Assets/Images/image 6.svg';
import './Webuild.css';

const Webuild = () => {
  const items = [
    {title: 'Склади', icon: Icon1, img: Image1},
    {title: 'Холодильні камери', icon: Icon2, img: Image2 },
    {title: 'Логістичні центри', icon: Icon1, img: Image3 },
    {title: 'Виробництв. приміщення', icon: Icon2, img: Image4 },
    {title: 'Комерційні об`єкти', icon: Icon1, img: Image5},
    {title: 'Металеві конструкції', icon: Icon2, img: Image6 },
    {title: 'Сендвіч панелі', icon: Icon1, img: Image7 },
    {title: 'Реконструюємо будинки', icon: Icon2, img: Image8}
  ]


  return (
    <section className='webuild'>
      <div className='webuild__circle'>
        <img src={Grey} alt='Grey Circle'></img>
      </div>
      <div className='webuild__title'>
        Ми будуємо
      </div>
      <div className='webuild__list'>
        {items.map(({title, icon, img}, index ) => {
          return (
            <div key={index} className='webuild__list_item'>
              <div className='webuild__icon'>
                <div>{title}</div>
                <img src={icon} alt='webuild__icons' />
              </div>
              <div className='webuild__list_item_flex'>
                <img src={img} alt='webuild__foto' />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default Webuild;