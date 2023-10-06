import React from "react";
import Header from "../../components/Header";
import { Box, Button } from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { colorTokens } from "../../theme";

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
        </Box>
    )
}

export default Dashboard;