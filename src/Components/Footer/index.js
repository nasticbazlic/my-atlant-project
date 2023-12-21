import { useForm } from "react-hook-form";

import Instagram from '../../Assets/Icons/Instagram.svg';
import Dribbble from '../../Assets/Icons/Dribbble.svg';
import Twitter from '../../Assets/Icons/Twitter.svg';
import Youtube from '../../Assets/Icons/Youtube.svg';

import Button  from '../../Assets/Icons/Vector.svg';
import './Footer.css';
import List from '../List';

const Footer = () => {

  const { register, handleSubmit, watch} = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); 

  const icons = [
    {img: Instagram},
    {img: Dribbble},
    {img: Twitter},
    {img: Youtube},
  ];
  const items1 = [
    {item: 'Ми збудували'},
    {item: 'Партнерам'},
    {item: 'Рекомендації'},
    {item: 'Вакансії'},
    {item: 'Про компанію'}
  ];

  const items2 = [
    {item: 'Склади'},
    {item: 'Логістич центри'},
    {item: 'Холодильні камери'},
    {item: 'Сендвіч панелі'},
    {item: 'Проектування'}
  ]

  return (
    <section className='footer'>
      <div className='footer__first'>
        <div className='footer__first_address'>
          <span>Atlant Constrcut</span>
          <span>Copyright © 2020</span>
          <span>All rights reserved</span>
        </div>
        <div className='footer__first_icons'>
          {icons.map(({img}, index) => {
            return (
              <div key={index} className='footer__first_item'>
              <img src={img} alt='Social Networks' />
              </div>
            )
          })}
        </div>
      </div>
      <div className='footer__second'>
        <>
          <List title='Головна' items={items1} />
        </>
        <>
          <List title='Проекти' items={items2} />
        </>
        <div className='footer__second_input'>
          <div className='footer__second_input_title'>
            Ваш email для зв'язку
          </div>
          <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type='email' placeholder='Ваша поштова скринька'{...register('example')} />
            <button className='submit' type='submit'>
              <img src={Button} alt='vector' />
            </button>
          </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;