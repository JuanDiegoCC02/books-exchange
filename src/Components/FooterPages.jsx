import { Link, useNavigate } from 'react-router-dom';

import '../Styles/FooterPages.css'

function FooterPages() {
  const navigate = useNavigate()
  const closeUser = () => {
    localStorage.clear();
    navigate('/LogIn'); // Redirige a la página de inicio de sesión
  };


  return (
    <div>
        <footer>

        <div className='textFooter'>
          <h5>©Shared Exchanges <br /> Design JD</h5>
        </div><br />

        <h4>Networks</h4>
        <div className='networksContainer'>
          <div>
            <a href="https://www.facebook.com/" target='_blank'> <img className='LgFacebook' src="https://cdn-icons-png.flaticon.com/128/4494/4494464.png" alt="Logo Facebook" /></a>
          </div>
          <div>
            <a href="https://www.instagram.com/" target='_blank'> <img className='LgInstagram' src="https://cdn-icons-png.flaticon.com/128/4494/4494468.png" alt="Logo Instagram" /></a>
          </div>
          <div>
            <a href="https://www.youtube.com/" target='_blank'> <img className='LgYoutube' src="https://cdn-icons-png.flaticon.com/128/1384/1384028.png" alt="Logo Youtube" /></a>
          </div>
          <div>
          <Link className='LgCotanct' to='/ContactUs'>  <img className='LgContact' src="https://cdn-icons-png.flaticon.com/128/9674/9674482.png" alt="Logo Contact" /></Link>
          </div>
        </div>

          <div>
            <button className='BtnCloseCS' id='CloseCS'onClick={closeUser} >Close Session </button>
          </div>
          
        </footer>
    </div>
  )
}

export default FooterPages