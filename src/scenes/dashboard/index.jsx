import React from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { colorTokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import ProgressCircle from "../../components/ProgressCircle";
import { DownloadOutlined, EmailOutlined, PersonAddOutlined, PointOfSaleOutlined, TrafficOutlined } from "@mui/icons-material";
import StatsBox from "../../components/StatsBox";

const Dashboard = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  return (
    <Box m="20px">
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

            <Box>
                <Button sx={{
                        backgroundColor: colors.blueAccent[700],
                        color: colors.gray[100],
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "10px 20px",
                    }}
                >
                    <DownloadOutlined sx={{ mr: "10px" }} />
                    Download Reports
                </Button>
            </Box>
        </Box>

        {/* GRID & CHARTS */}
        <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
        >
            {/* ROW 1 */}
            <Box
                gridColumn="span 3"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <StatsBox
                    title="12,361"
                    subtitle="Emails Sent"
                    progress="0.75"
                    increase="+14%"
                    icon={
                        <EmailOutlined
                        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                        />
                    }
                />
            </Box>
            <Box
                gridColumn="span 3"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                    <StatsBox
                        title="431,225"
                        subtitle="Sales Obtained"
                        progress="0.50"
                        increase="+21%"
                        icon={
                            <PointOfSaleOutlined
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
            </Box>
            <Box
                gridColumn="span 3"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <StatsBox
                    title="32,441"
                    subtitle="New Clients"
                    progress="0.30"
                    increase="+5%"
                    icon={
                        <PersonAddOutlined
                            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                        />
                    }
                />
            </Box>
            <Box
                gridColumn="span 3"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <StatsBox
                    title="1,325,134"
                    subtitle="Traffic Received"
                    progress="0.80"
                    increase="+43%"
                    icon={
                        <TrafficOutlined
                            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                        />
                    }
                />
            </Box>
                
            {/* ROW 2 */}
            <Box
                gridColumn="span 8"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
            >
                <Box
                    mt="25px"
                    p="0 30px"
                    display="flex "
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Box>
                        <Typography
                            variant="h5"
                            fontWeight="600"
                            color={colors.gray[100]}
                        >
                            Revenue Generated
                        </Typography>
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            color={colors.greenAccent[500]}
                        >
                            $59,342.32
                        </Typography>
                    </Box>
                    <Box>
                        <IconButton>
                            <DownloadOutlined
                                sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                            />
                        </IconButton>
                    </Box>
                </Box>
                <Box height="250px" m="-20px 0 0 0">
                    <LineChart/>
                </Box>
            </Box>
            <Box
                gridColumn="span 4"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                overflow="auto"
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom={`4px solid ${colors.primary[500]}`}
                    colors={colors.gray[100]}
                    p="15px"
                >
                    <Typography color={colors.gray[100]} variant="h5" fontWeight="600">
                        Recent Transactions
                    </Typography>
                </Box>
                {mockTransactions.map((transaction, i) => (
                    <Box
                        key={`${transaction.txId}-${i}`}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        p="15px"
                    >
                        <Box>
                            <Typography
                                color={colors.greenAccent[500]}
                                variant="h5"
                                fontWeight="600"
                            >
                                {transaction.txId}
                            </Typography>
                            <Typography color={colors.gray[100]}>
                                {transaction.user}
                            </Typography>
                        </Box>
                        <Box color={colors.gray[100]}>{transaction.date}</Box>
                        <Box
                            backgroundColor={colors.greenAccent[500]}
                            p="5px 10px"
                            borderRadius="4px"
                        >
                            ${transaction.cost}
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* ROW 3 */}
            <Box
                gridColumn="span 4"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                p="30px"
            >
                <Typography variant="h5" fontWeight="600">
                    Campaign
                </Typography>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mt="25px"
                >
                    <ProgressCircle size="125" />
                    <Typography
                        variant="h5"
                        color={colors.greenAccent[500]}
                        sx={{ mt: "15px" }}
                    >
                        $48,352 revenue generated
                    </Typography>
                    <Typography>Includes extra misc expenditures and costs</Typography>
                </Box>
            </Box>
            <Box
                gridColumn="span 4"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
            >
                <Typography
                    variant="h5"
                    fontWeight="600"
                    sx={{ padding: "30px 30px 0 30px" }}
                >
                    Sales Quantity
                </Typography>
                <Box height="250px" mt="-20px">
                    <BarChart />
                </Box>
            </Box>
            <Box
                gridColumn="span 4"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                p="30px"
            >
                <Typography variant="h5" fontWeight="600">
                    Lost Opportunities
                </Typography>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mt="25px"
                >
                    <ProgressCircle size="125" progress="0.1" accent="red" />
                    <Typography
                        variant="h5"
                        color={colors.greenAccent[500]}
                        sx={{ mt: "15px" }}
                    >
                        $2,132 revenue lost
                    </Typography>
                    <Typography>Includes ternary relationships with businesses</Typography>
                </Box>
            </Box>
        </Box>
    </Box>
  );
};

export default Dashboard;