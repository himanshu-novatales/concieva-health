import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/nvabar';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import HeadeVdo from './components/headervdo';
function App() {
  return (
    <div className="App">
      <div className='flex justify-between items-center p-1 bg-[#DDEFEF]'>
        <div className='flex justify-center ms-4 my-1 gap-3 items-center'>
          <p className='ms-1'> <LocationOnOutlinedIcon sx={{ color: "gray" }} /> Hitec City, Hyderabad</p>
          <p className='ms-1'><WatchLaterOutlinedIcon sx={{ color: "gray" }} /> Mon – Fri: 8:30 am – 5:00 pm, Sat – Sun: Closed</p>
        </div>
        <div className='flex justify-center my-1 ms-4 gap-4 items-center'>
          <p>
            <PhoneInTalkIcon sx={{ color: "gray" }} /> 1800 255 1234
          </p>
          <p className='flex justify-center items-center gap-4 me-8 '>
            <FacebookIcon sx={{

              fontSize: "20px",
            }} />
            <InstagramIcon sx={{

              fontSize: "20px",
            }} />
            <XIcon sx={{

              fontSize: "20px",
            }} />
          </p>

        </div>
      </div>
      <ResponsiveAppBar />
      <HeadeVdo/>
    </div>
  );
}

export default App;
