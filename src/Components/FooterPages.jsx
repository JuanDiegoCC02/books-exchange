import { Link } from 'react-router-dom';

import '../Styles/FooterPages.css'

function FooterPages() {
  


  return (
    <div>
        <footer>


        <h4 className='titleNetworks'>Networks</h4>
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

          
          
          
        <div className='ContainerTextFooter'>
          <h5 className='TextFooter'>©Shared Reading <br /> Design JD</h5>
        </div>

        </footer>
    </div>
  )
}

export default FooterPages