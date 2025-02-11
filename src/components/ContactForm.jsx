import { TextField } from "@mui/material";
import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useTheme } from "@mui/material/styles";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

const ContactForm = () => {
  const theme = useTheme();
  const [serviceName, setServiceName] = React.useState([]);
  const [doctorName, setDoctorName] = React.useState([]);
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [timeValue, setTimeValue] = React.useState(null);
  const handleChangeService = (event) => {
    const {
      target: { value },
    } = event;
    setServiceName(value);
  };
  const handleChangeDoctor = (event) => {
    const {
      target: { value },
    } = event;
    setDoctorName(value);
  };

  return (
    <div className="flex justify-center w-full">
      <div className="w-11/12 xl:w-1/2 flex flex-col gap-2 justify-center text-center border-[1px] rounded-3xl border-[#EBE6DE]  items-center">
        <p className="px-4 py-1 mb-10 mt-5 bg-[#EFF7F7] text-sm  text-[#94857B] font-paragraph font-bold rounded-[30px]">
          Schedule Your Visit Online
        </p>
        <h1 className="text-3xl xl:text-6xl font-custom">
          Take the next step and schedule an appointment today
        </h1>
        <p className="text-xl mt-4 text-[#4F4D4D] font-paragraph">
          It just takes a few minutes to book a visit online.
        </p>
        <section className="w-11/12 xl:w-10/12 p-6 rounded-md mt-8">
          <form>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormControl fullWidth>
                <InputLabel id="demo-multiple-name-label">
                  Select Service
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={serviceName}
                  onChange={handleChangeService}
                  input={<OutlinedInput label="Select Service" />}
                  MenuProps={MenuProps}
                  className="text-left bg-[#FBF9F6]"
                  required
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, serviceName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <div>
                <FormControl fullWidth>
                  <InputLabel id="demo-multiple-name-label">
                    Select Specialist
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={doctorName}
                    onChange={handleChangeDoctor}
                    input={<OutlinedInput label="Select Specialist" />}
                    MenuProps={MenuProps}
                    className="text-left bg-[#FBF9F6]"
                    required
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, doctorName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div>
                <TextField
                  fullWidth
                  id="name-1"
                  label="Name"
                  required
                  className="bg-[#FBF9F6]"
                  variant="outlined"
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  id="name-2"
                  label="Phone Number"
                  required
                  type="number"
                  variant="outlined"
                  className="bg-[#FBF9F6]"
                />
              </div>
              <div>
                <LocalizationProvider
                  className="bg-black"
                  dateAdapter={AdapterDayjs}
                >
                  <DatePicker
                    label="Select Date"
                    className="w-full bg-[#FBF9F6]"
                    value={selectedDate}
                    onChange={(newValue) => setSelectedDate(newValue)}
                    renderInput={(params) => (
                      <TextField {...params} fullWidth />
                    )}
                  />
                </LocalizationProvider>
              </div>
              <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    label="Select Time"
                    value={timeValue}
                    className="w-full bg-[#FBF9F6]"
                    onChange={(newValue) => {
                      setTimeValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button className="py-3 w-full bg-[#0065B3] hover:bg-[#FFA61A] transition-all hover:duration-200 text-white  hover:text-[#0065B3] mt-6 md:mt-10 px-6 lg:px-10 rounded-3xl">
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactForm;
