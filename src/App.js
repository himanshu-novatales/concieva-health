import './App.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined'
import FacebookIcon from '@mui/icons-material/Facebook'
import XIcon from '@mui/icons-material/X'
import InstagramIcon from '@mui/icons-material/Instagram'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import HomaPage from './pages/homepage'
import Footer from './components/footer'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './pages/aboutus'
import ContactUs from './pages/ContactUs'
function App () {
  return (
    <div className='App'>
      <div className='flex justify-between items-center p-1 bg-[#FFE5CF] font-paragraph text-[15px] border border-[#f3daca]'>
        <div className='hidden lg:flex justify-center ms-4 my-1 gap-0 lg:gap-3 items-center'>
          <p className='ms-4 tracking-wide'>
            {' '}
            <LocationOnOutlinedIcon
              sx={{ color: 'black', fontSize: '32px', paddingRight: '10px' }}
            />{' '}
            Hitec City ,&nbsp; Hyderabad
          </p>
          <p className='ms-10 tracking-wide'>
            <WatchLaterOutlinedIcon
              sx={{ color: 'black', fontSize: '30px', paddingRight: '10px' }}
            />{' '}
            Mon – Fri: 8:30 am – 5:00 pm, Sat – Sun: Closed
          </p>
        </div>
        <p className='block lg:hidden'>
          <PhoneInTalkIcon
            sx={{ color: 'black', fontSize: '30px', paddingRight: '10px' }}
          />{' '}
          1800 255 1234
        </p>
        <div className='flex justify-center my-1 ms-4 gap-4 items-center font-paragraph text-[15px]'>
          <p className='hidden lg:block'>
            <PhoneInTalkIcon
              sx={{ color: 'black', fontSize: '30px', paddingRight: '10px' }}
            />{' '}
            1800 255 1234
          </p>
          <p className='flex justify-center items-center gap-4 me-8 '>
            <InstagramIcon
              sx={{
                color: "black" , fontSize:'18px'
              }}
            />
            <XIcon
              sx={{
                color: "black" , fontSize:'18px'
              }}
            />
            <FacebookIcon
              sx={{
                color: "black" , fontSize:'18px'
              }}
            />
          </p>
        </div>
      </div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomaPage />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/ContactUs' element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
