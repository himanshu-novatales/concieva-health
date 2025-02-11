import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Button, Container } from '@mui/material'
import ContactUsMain from '../assets/images/happy-parents-cuddling-with-their-newborn-baby-2024-10-18-09-54-31-utc.jpg'
import ContactSectionOne from '../components/ContactSectionOne'
export default function ContactUs () {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className='bg-[#F4F6FF]  pb-[0] lg:pb-[90px] mb-[150px]'>
        <Container maxWidth={false} sx={{ width: '97%' }}>
          <Grid
            container
            sx={{
              background: 'white',
              border: '1px solid #EBE6DE',
              borderRadius: '20px',
            }}
            className='block lg:flex flex-row flex-nowrap'
          >
            <Grid
              item
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                
              }}
              className='w-[100%] lg:w-[47%] py-[20px] px-[20px] lg:px-[80px] '
            >
              <div>
                <h1 className='font-custom text-[42px] mt-8 lg:text-[78px] font-[300] tracking-[-3px] text-[#2D322C] leading-[1em] '>
                  Contact us.
                  <br />
                  We’re here to help
                </h1>
                <p className='font-paragraph py-[30px] leading-[1.5rem] lg:leading-[2em] text-[14px] text-start text-[#4F4D4D]'>
                  We meet women at important times in their lives; at their most
                  vulnerable, at their happiest and sometimes at the scariest
                  times.
                </p>
                <div className='mt-5 block lg:flex gap-8 items-center'>
                  <Button className='bg-[#F7941D] text-white font-semibold py-3 px-10 rounded-[30px] font-paragraph'>
                    Refer a patient
                  </Button>
                  <div className='relative flex items-start lg:items-center flex-col mt-6 lg:mt-0'>
                    <div className='before:absolute before:h-[40px] ml-8 lg:before:w-[1px] before:bg-[#c5e2f7] lg:before:left-0 lg:before:top-1/2 lg:before:-translate-y-1/2 pr-4 uppercase tracking-[2px] text-[#94857B] text-[12px] leading-[1.65em] font-[600]  md:before:content-none'>
                      Give Us a Call:
                    </div>
                    <div className='text-[21px] tracking-wide ml-6 lg:ml-12 font-paragraph '>
                      + 0800 2336 7811
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xl={7} md={6} sm={12} className='h-[400px] lg:h-[830px]'>
              <img
                src={ContactUsMain}
                alt=''
                className='rounded-tl-none rounded-tr-[0px] lg:rounded-tr-[20px] rounded-bl-[20px] lg:rounded-bl-[0px] rounded-br-[20px] h-[100%] w-[100%]'
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <ContactSectionOne />
    </>
  )
}
