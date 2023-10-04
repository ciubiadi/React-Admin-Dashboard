import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import React from "react";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import Header from "../../components/Header";
import { useTheme } from "@emotion/react";
import { colorTokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);
    
    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
            
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
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
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Another Important Question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Your Favorite Question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Some Random Question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    The Final Question
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