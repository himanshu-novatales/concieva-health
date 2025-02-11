import { Box, Container } from '@mui/material'
import { Grid } from '@mui/system'
import React from 'react'

export default function ContactSectionOne() {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
           <Container>
               <Grid className='block lg:flex'>
                   <Grid item   className='w-[41%]  space-y-[30px]' >
                    <div className='pr-[80px]'>
                        <h2 className='font-custom text-[62px] font-[300] text-[#2D322C] leading-[1.05em] tracking-[-2px]'>Contact Information</h2>
                    </div>
                    <div>
                        <p className='font-paragraph text-[#4F4D4D] text-[17px] leading-[1.6em]'>Learn more about our clinic and doctors and why they are trusted by so many families in our community.</p>
                    </div>
                   </Grid>
                   <Grid item xl={5} md={6} sm={12} >
                    <div>
                        <h2 className='font-custom text-[62px] font-[300] text-[#2D322C]'>Contact Information</h2>
                    </div>
                   </Grid>
               </Grid>
           </Container>
        </Box>
    </div>
  )
}
