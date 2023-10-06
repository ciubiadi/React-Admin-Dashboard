import React from "react";
import Header from "../../components/Header";
import { Box, Button } from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { colorTokens } from "../../theme";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to yourdashboard" />

                <Box>
                    <Button sx={{
                        backgroundColor: colors.blueAccent[700],
                        color: colors.gray[100]
                    }}>
                        <DownloadOutlined />
                        Download Reports
                    </Button>
                </Box>
            </Box>
            
            {/*  GRID AND CHARTS */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                {/* ROW 1 with statuses */}
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[500]}
                >
                    <ProgressCircle />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[500]}
                >
                    <ProgressCircle />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[500]}
                >
                    <ProgressCircle />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[500]}
                >
                    <ProgressCircle />
                </Box>
            </Box>
        </Box>
    )
}

export default Dashboard;