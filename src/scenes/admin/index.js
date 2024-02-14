import React from 'react'
import Header from '../../components/Header';
import { Box, Grid, Typography } from "@mui/material";

function Admin() {

  return (
    <>
    <Box m="1rem 1rem">
      <Header title="CusDec Preview"/>
    </Box>

    <Box  m="0.8rem 0.8rem 0rem 0.8rem" height="56px" width="1200px" display= 'flex' flexDirection= 'column' justifyContent= 'flex-end' sx={{ border: 3, borderBottom: 0, borderRight: 6, borderColor: '#0A623A', backgroundColor: "#ffffff", padding: 0.4 }}>   
        <Box
            sx={{
            display: 'flex', 
            justifyContent: 'space-between',
            width: '100%'
            }}
        >
            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, paddingTop: '1rem'}}>CUSDEC I</Typography>
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', 
                alignItems: 'center', 
                paddingRight: '12rem',
                }}
            >
                <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600}}>
                SCHEDULE II
                </Typography>
                <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600}}>
                SRI LANKA CUSTOMS - GOODS DECLARATION
                </Typography>
            </Box>
            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, paddingRight: '16px', paddingTop: '1rem'}}>Customs - 53</Typography>
        </Box>
    </Box>
    <Box  m="0rem 0.8rem 0.8rem 0.8rem" height="687px" width="1200px" sx={{ border: 6, borderColor: '#0A623A', backgroundColor: "#ffffff" }}>
        <Grid container>
            <Grid item xs={1.2}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', p: 1.5, pl: 0.4, borderRight: 6, borderColor: '#0A623A', minHeight: '676px'}}>
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>Header</Typography>
                        <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>Information</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={5.4}>
                <Grid item xs={12}>
                    <Box
                        p={1}
                        sx={{ borderRight: 3, borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '164px' }}
                    >
                        <Box display="flex">
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>2 Exporter</Typography>
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, marginLeft: '170px'}}>TIN:</Typography>
                            <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, marginLeft: '10px', marginTop: '-3px'}}></Typography>
                        </Box>

                        <Box marginTop={'8px'}>
                            <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, }}></Typography>
                            <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, }}></Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        p={1}
                        sx={{ borderRight: 3, borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '148px' }}
                    >
                        <Box display="flex">
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>8 Consingee</Typography>
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, marginLeft: '160px'}}>TIN:</Typography>
                            <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, marginLeft: '10px', marginTop: '-3px' }}></Typography>
                        </Box>

                        <Box marginTop={'8px'}>
                            <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, }}></Typography>
                            <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, }}></Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        p={1}
                        sx={{ borderRight: 3, borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '114px' }}
                    >
                        <Box display="flex">
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>14 Declarant Representative</Typography>
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, marginLeft: '70px'}}>TIN:</Typography>
                            <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, marginLeft: '10px', marginTop: '-3px'}}></Typography>
                        </Box>

                        <Box marginTop={'8px'}>
                            <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, }}></Typography>
                            <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, }}></Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid container>
                    <Grid item xs={8}>
                        <Box
                            p={1}
                            sx={{ borderRight: 3, borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '58px' }}
                        >
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>18 Vessel/Flight</Typography>
                            <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, }}></Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box
                            p={1}
                            sx={{ borderRight: 3, borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '58px', }}
                        >
                            <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, marginTop: '16px'}}></Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box
                            p={1}
                            sx={{ borderRight: 3, borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '58px' }}
                        >
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>19 Ctr.</Typography>
                            <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, }}></Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={10}>
                        <Box
                            p={1}
                            sx={{ borderRight: 3, borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '60px' }}
                        >
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>21 Voyage No./Date</Typography>
                            <Box display={'flex'}>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, }}></Typography>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, marginLeft: '16px'}}></Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box
                            p={1}
                            sx={{ borderRight: 3, borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '60px' }}
                        >
                            <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, }}></Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={3}>
                        <Box
                            p={1}
                            sx={{ borderRight: 3, borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '60px' }}
                        >
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>25 Mode Trans.</Typography>
                            <Box  display="flex" sx={{marginTop: '1px',}}>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, }}></Typography>
                                <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, marginLeft: '30px', borderLeft: 3, borderColor: '#0A623A', }}>at Border</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box
                            p={1}
                            sx={{ borderRight: 3, borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '60px' }}
                        >
                            <Typography variant="body1" component="span" mr={2} sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>26 Inland Mode</Typography>
                            <Box  display="flex" sx={{marginTop: '3px',}}>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, }}></Typography>
                                <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, marginLeft: '30px', borderLeft: 3, borderColor: '#0A623A', paddingLeft: '2px'}}>Transport</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box
                            p={1}
                            sx={{ borderRight: 3, borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '60px' }}
                        >
                            <Typography variant="body1" component="span" mr={2} sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>27 Place of Loading/Discarging</Typography>
                            <Box display={'flex'}>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, }}></Typography>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, marginLeft: '4px'}}></Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <Box
                            p={1}
                            sx={{ borderRight: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '72px' }}
                        >
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>29 Office of Entry/Exit</Typography>
                            <Box display={'flex'} sx={{ marginTop: '8px' }}>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, }}></Typography>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, marginLeft: '8px'}}></Typography>
                            </Box>
                            
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box
                            p={1}
                            sx={{ borderRight: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '72px' }}
                        >
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>30 Location of Goods</Typography>
                            <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, marginTop: '8px'}}></Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={5.4}>
            <Grid container>
                    <Grid item xs={6}>
                        <Box
                            p={1}
                            sx={{ borderLeft: 6, borderTop: 6, borderRight: 6, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '54px', marginTop: '-20px',  marginLeft: '-2px'}}
                        >
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>1 DECLARATION</Typography>
                            <Box  display="flex">
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, paddingRight: '8px' }}></Typography>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, borderLeft: 3, borderColor: '#0A623A', paddingRight: '8px', paddingLeft: '8px' }}></Typography>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, borderLeft: 3, borderColor: '#0A623A', paddingLeft: '8px' }}></Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box
                            p={1}
                            sx={{ borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '54px' }}
                        >
                            <Box display={'flex'}>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, }}></Typography>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, marginLeft: '4px'}}></Typography>
                            </Box>
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>Customs Reference Number:</Typography>
                            <Box display={'flex'}>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, }}>S</Typography>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, marginLeft: '12px'}}></Typography>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, marginLeft: '12px'}}></Typography>
                            </Box>
                            <Box display={'flex'}>
                                <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, marginTop: '8px'}}>Manifest</Typography>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, marginTop: '6px', marginLeft: '8px'}}></Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box
                            p={1}
                            sx={{ borderRight: 3, borderBottom: 3, borderTop: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '65px', marginTop: '-65px' }}
                        >
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>3 Pages</Typography>
                            <Box  display="flex" sx={{marginTop: '1px',}}>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, paddingLeft: '8px', paddingRight: '8px', marginTop: '4px' }}></Typography>
                                <Typography sx={{color: '#0333333', fontSize: '14px', fontWeight: 600, borderLeft: 3, marginTop: '4px', borderColor: '#0A623A', paddingLeft: '8px' }}></Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box
                            p={1}
                            sx={{ borderRight: 3, borderBottom: 3, borderTop: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '65px', marginTop: '-65px' }}
                        >
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>4 List</Typography>
                            <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, }}></Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={2}>
                        <Box
                            p={1}
                            sx={{ borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '58px' }}
                        >
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>5 Items</Typography>
                            <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, textAlign: 'right'}}></Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box
                            p={1}
                            sx={{ borderLeft: 3, borderRight: 3, borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '58px', }}
                        >
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>6 Total Packages</Typography>
                            <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, textAlign: 'right'}}></Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box
                            p={1}
                            sx={{ borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '58px' }}
                        >
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>7 Declarant's Sequence Number</Typography>
                            <Box display={'flex'}>
                                <Typography mr={2} sx={{color: '#333333', fontSize: '14px', fontWeight: 600, }}></Typography>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, }}></Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        p={1}
                        sx={{ borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '90px' }}
                    >
                        <Box display="flex">
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>9 Person Responsible for Financial Settlement</Typography>
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, marginLeft: '0px'}}>TIN:</Typography>
                            <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, marginLeft: '10px', marginTop: '-3px' }}></Typography>
                        </Box>

                        <Box marginTop={'8px'}>
                            <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, }}></Typography>
                            <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, }}></Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid container>
                    <Grid item xs={5}>
                        <Box
                            p={1}
                            sx={{ borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '54px' }}
                        >
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>10 Cty of Last Cons/First Dst.</Typography>
                            <Box  display="flex">
                                <Box width='50px'>
                                    <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, paddingRight: '2px'}}></Typography>
                                </Box>
                                <Box sx={{ borderLeft: 3, borderColor: '#0A623A', paddingLeft: '2px'}} width='50px'>
                                    <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, marginLeft: '30px', paddingLeft: '2px'}}></Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box
                            p={1}
                            sx={{ borderLeft: 3, borderRight: 3, borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '57.5px', marginLeft: '-14px' }}
                        >
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>11 Trading</Typography>
                            <Box  display="flex">
                                <Box>
                                    <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, paddingRight: '3px'}}></Typography>
                                </Box>
                                <Box sx={{ borderLeft: 3, borderColor: '#0A623A', paddingLeft: '2px'}}>
                                    <Typography sx={{color: '#333333', fontSize: '12px', fontWeight: 600, paddingLeft: '1px', }}>Cty.</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box
                            p={1}
                            sx={{ borderRight: 3, borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '57.5px' }}
                        >
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>12 Value Details</Typography>
                            <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, }}></Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box
                            p={1}
                            sx={{ borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '57.5px' }}
                        >
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>13 C.A.P.</Typography>
                            <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, }}></Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <Box
                            p={1}
                            sx={{ borderRight: 3, borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '54px' }}
                        >
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>15 Country of Export</Typography>
                            <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, }}></Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box
                            p={1}
                            sx={{ borderRight: 3, borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '54px', }}
                        >
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>15 Cty.Ex. Code</Typography>
                            <Box  display="flex">
                                <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, paddingRight: '4px' }}>a</Typography>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, borderLeft: 3, borderColor: '#0A623A', paddingRight: '8px', paddingLeft: '4px' }}></Typography>
                                <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, borderLeft: 3, borderColor: '#0A623A', paddingRight: '4px', paddingLeft: '4px' }}>b</Typography>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, borderLeft: 3, borderColor: '#0A623A', paddingLeft: '4px' }}></Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box
                            p={1}
                            sx={{ borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '54px' }}
                        >
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>17 Cty.Dst. Code</Typography>
                            <Box  display="flex">
                                <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, paddingRight: '4px' }}>a</Typography>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, borderLeft: 3, borderColor: '#0A623A', paddingRight: '8px', paddingLeft: '4px' }}></Typography>
                                <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, borderLeft: 3, borderColor: '#0A623A', paddingRight: '4px', paddingLeft: '4px' }}>b</Typography>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, borderLeft: 3, borderColor: '#0A623A', paddingLeft: '4px' }}></Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <Box
                            p={1}
                            sx={{ borderRight: 3, borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '54px' }}
                        >
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>16 Country of Origin</Typography>
                            <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, }}></Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box
                            p={1}
                            sx={{ borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '54px' }}
                        >
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>17 Country of Destination</Typography>
                            <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, }}></Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        p={1}
                        sx={{ borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '58px' }}
                    >
                        <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>20 Delivery Terms</Typography>
                        <Box  display="flex" sx={{marginTop: '1px',}}>
                            <Box width='50px'>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, paddingRight: '2px'}}></Typography>
                            </Box>
                            <Box sx={{ borderLeft: 3, borderColor: '#0A623A', paddingLeft: '2px'}} width='50px'>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, marginLeft: '30px', paddingLeft: '2px'}}></Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <Box
                            p={1}
                            sx={{ borderRight: 3, borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '60px' }}
                        >
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>22 Currency & Total Amount Invoiced</Typography>
                            <Box  display="flex" sx={{marginTop: '3px',}}>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, }}></Typography>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, marginLeft: '10px', borderLeft: 3, borderColor: '#0A623A', paddingLeft: '8px' }}></Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box
                            p={1}
                            sx={{ borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '60px' }}
                        >
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>23 Exchange Rate</Typography>
                            <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, marginTop: '2.8px'}}></Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box
                            p={1}
                            sx={{ borderLeft: 3, borderBottom: 3, borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '60px', marginLeft: '-30px'}}
                        >
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>24 Nature of</Typography>
                            <Box  display="flex" sx={{marginTop: '3.4px',}}>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, paddingRight: '4px' }}></Typography>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, borderLeft: 3, borderColor: '#0A623A', paddingRight: '4px', paddingLeft: '4px' }}></Typography>
                                <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, borderLeft: 3, borderColor: '#0A623A', paddingLeft: '4px' }}>Transt.</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-start"
                        gap={15}
                        p={1}
                        sx={{ borderColor: '#0A623A', backgroundColor: "#ffffff", minHeight: '130px' }}
                    >
                        <Box display="flex">
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>28 Financial and Banking Data</Typography>
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, marginLeft: '28px'}}>Bank Code</Typography>
                            <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, marginLeft: '20px', marginTop: '-3px'}}></Typography>
                        </Box>
                        <Box marginTop="-110px">
                            <Box display={'flex'}>
                                <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>Terms of Payment</Typography>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, marginLeft: '20px'}}></Typography>
                            </Box>
                            <Box display={'flex'}>
                                <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, marginTop: "12px"}}>Bank Name:</Typography>
                                <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, marginLeft: '20px', marginTop: "8px"}}></Typography>
                            </Box>
                        </Box>
                        <Box display="flex" marginTop="-110px">
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, }}>Branch:</Typography>
                            <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, marginLeft: '10px'}}></Typography>
                            <Typography sx={{color: '#0A623A', fontSize: '12px', fontWeight: 600, marginLeft: '64px'}}>Ref No:</Typography>
                            <Typography sx={{color: '#333333', fontSize: '14px', fontWeight: 600, marginLeft: '10px'}}></Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    </Box>

  </>
);

}

export default Admin