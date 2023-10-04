import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import React from "react";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import Header from "../../components/Header";

const FAQ = () => {
    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
            
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                    <Typography>
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                    <Typography>
                        An Important Question 2
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );    
}

export default FAQ;