import Logo1 from '../../Assets/Icons/image 1.svg';
import Logo2 from '../../Assets/Icons/image 2.svg';
import Fasad from '../../Assets/Images/Image.png';
import Circle from '../../Assets/Icons/image 3.svg';
import Button from '../Button';
import Creative from '../../Assets/Images/Creative.png';
import Mobile from '../../Assets/Images/Phone Mockup.png';

import Foto1 from '../../Assets/Images/foto1.png';
import Foto2 from '../../Assets/Images/foto2.png';
import Foto3 from '../../Assets/Images/foto3.png';
import Foto4 from '../../Assets/Images/foto4.png';
import Foto5 from '../../Assets/Images/foto5.png';
import Foto6 from '../../Assets/Images/foto6.png';

import Logo11 from '../../Assets/Icons/Logo1.svg';
import Logo22 from '../../Assets/Icons/Logo2.svg';
import Logo3 from '../../Assets/Icons/Logo3.svg';
import Logo4 from '../../Assets/Icons/Logo4.svg';
import Logo5 from '../../Assets/Icons/Logo5.svg';
import Logo6 from '../../Assets/Icons/Logo6.svg';
import Logo7 from '../../Assets/Icons/Logo7.svg';
import Logo8 from '../../Assets/Icons/Logo8.svg';
import Logo9 from '../../Assets/Icons/Logo9.svg';

import ButtonAppBar from '../../Components/Menu';

import "./App.css";
import Webuild from '../Webuild';
import OurProjets from '../Project';
import Footer from '../Footer';


const App = () => {
const stats = [
  {title: "70+", subtitle: "Об'єктів побудували під ключ"},
  {title: "540+", subtitle: "Проектів вели"},
  {title: "47357", subtitle: "Годинник ми провели на об'єктах"},
  {title: "25+", subtitle: "Співробітників працює"}
]
const foto = [
  {img: Foto1},
  {img: Foto2},
  {img: Foto3},
  {img: Foto4},
  {img: Foto5},
  {img: Foto6}
]

  return (
    <div className="app">
      <section className="header">
       <div className="header__logo">
        <img src={Logo1} alt="logo1"></img>
        <img src={Logo2} alt="logo2"></img>
       </div>
       <div className='header__menu'>
        <ul>
          <li>Види будівництва</li>
          <li>Ми збудували</li>
          <li>Партнерам</li>
          <li>Вакансії</li>
          <li>Про компанію</li>
        </ul>
        <Button variant="header__btn">
          Зв'язатися
        </Button>
       </div>
      </section>
      <div className='header__mob'>
        <ButtonAppBar />
      </div>
      <div className="app__first">
        <section className="app__first_content">
          <div className='app__first_content_title'>
            Atlant <br />Construct
          </div>
          <div className='app__first_content_subtitle'>
            11 років досвіду індустріального будівництва у Молдові та Кишиневі.
          </div>
          <div className='app__first_content_circle'>
            <img src={Circle} alt="Circle"></img>
            <hr />
            <span>Проекти</span>
          </div>
        </section>
        <div className="app__first_img">
          <img src={Fasad} alt="Fasad"></img>
        </div>
      </div>
      <section className='app__stats'>
        {stats.map(({title, subtitle}, index) => {
          return (
            <div key={index} className='app__stats_item'>
              <div className='app__stats_item_title'>
                {title}
              </div>
              <div className='app__stats_item_subtitle'>
                {subtitle}
              </div>
            </div>
          )
        })}
      </section>
      <Webuild />
      <OurProjets />
      <section className='creative'>
        <img src={Creative} alt='creative'></img>
        <div className='creative__info'>
          <div className='creative__info_subtitle'>
            aTLANT CONSTRCUT
          </div>
          <div className='creative__info_title'>
            Про компанію
          </div>
          <div className='creative__info_text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus.
            Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi,
            risus in suscipit non. Non commodo volutpat, pharetra, vel.
          </div>
          <Button variant='creative__btn'>
            Детальніше →
          </Button>
        </div>
      </section>
      <section >
        <div className='app__mobile'>
          <div className='app__mobile_info'>
            <h3>Комерційна пропозиція</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. 
              Dictumst risus, sem egestas odio cras adipiscing vulputate. 
              Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.
            </p>
            <Button variant='mobile__btn'>
              Завантажити →
            </Button>
          </div>
          <img src={Mobile} alt='Mobile'></img>
        </div>
      </section>
      <section className='app__gallery'>
        <div className='app__gallery_title'>
          Галерея 
        </div>
        <div className='app__gallery_list'>
          {foto.map(({img}, index) => {
            return (
              <div key={index} className='app__gallery_item'>
                <div className='box'>
                  <div class="box-inner">
                    <div class="box-front">
                      <img src={img} alt='foto__gallery' />
                    </div>
                    <div class="box-back">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Condimentum diam orci pretium a pharetra, feugiat cursus.
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section className='app__logos'>
        <div className='app__logos_title'>
          Нам довіряють
        </div>
        <div className='app__logos_subtitle'>
          We have been working with some Fortune 50 clients
        </div>
        <div className='app__logos_buttons'>
          <div>
            <Button variant='logo__btn'>
              <img src={Logo11} alt='logo1' />
            </Button>
          </div>
          <div>
            <Button variant='logo__btn'>
              <img src={Logo22} alt='logo2' />
            </Button>
            <Button variant='logo__btn'>
              <img src={Logo3} alt='logo3' />
            </Button>
          </div>
          <div>
            <Button variant='logo__btn'>
              <img src={Logo4} alt='logo4' />
            </Button>
            <Button variant='logo__btn'>
              <img src={Logo5} alt='logo5' />
            </Button>
            <Button variant='logo__btn'>
              <img src={Logo6} alt='logo6' />
            </Button>
          </div>
          <div>
            <Button variant='logo__btn'>
              <img src={Logo7} alt='logo7' />
            </Button>
            <Button variant='logo__btn'>
              <img src={Logo8} alt='logo8' />
            </Button>
          </div>
          <div>
            <Button variant='logo__btn'>
              <img src={Logo9} alt='logo9' />
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App;
