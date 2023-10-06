import React from "react";
import Header from "../../components/Header";
import { Box, Button } from "@mui/material";
import { DownloadOutlined, PersonAddOutlined, PointOfSaleOutlined, TrafficOutlined } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { colorTokens } from "../../theme";
import StatsBox from "../../components/StatsBox";
import { EmailOutlined } from "@mui/icons-material";

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
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <StatsBox 
                        title="12,361"
                        subtitle="Emails Sent"
                        progress="0.75"
                        increase="+14k"
                        icon={
                            <EmailOutlined sx={{
                                color: colors.greenAccent[600], fontSize: "25px"
                            }}/>
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <StatsBox 
                        title="431,225"
                        subtitle="Sales Obtained"
                        progress="0.50"
                        increase="+21%"
                        icon={
                            <PointOfSaleOutlined sx={{
                                color: colors.greenAccent[600], fontSize: "25px"
                            }}/>
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <StatsBox 
                        title="32,441"
                        subtitle="Max Clients"
                        progress="0.30"
                        increase="+5%"
                        icon={
                            <PersonAddOutlined sx={{
                                color: colors.greenAccent[600], fontSize: "25px"
                            }}/>
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <StatsBox 
                        title="1,325,134"
                        subtitle="Traffic Received"
                        progress="0.80"
                        increase="+43%"
                        icon={
                            <TrafficOutlined sx={{
                                color: colors.greenAccent[600], fontSize: "25px"
                            }}/>
                        }
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Dashboard;