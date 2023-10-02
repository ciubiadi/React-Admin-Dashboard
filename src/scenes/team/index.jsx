import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { colorTokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    // the headerName will be shown on the tabke
    const columns = [
        // this will not grow
        { field: 'id', headerName: "ID" },
        // it will grow to 1 fraction of the size
        { 
            field: 'name', 
            headerName: "Name", 
            flex: 1, 
            cellClassName: 'name-column--cell'
        },
        /* don't want to grow this column since it will be small amd I allign it to left because by default sometimes 
            it alligns it to the right.
        */
        { 
            field: 'age', 
            headerName: "Age",
            type: 'number',
            headerAlign: 'left', 
            align: 'left',
        },
        { 
            field: 'phone',
            headerName: "Phone Number",
            flex: 1
        },
        { 
            field: 'email', 
            headerName: "Email",
            flex: 1
        },
        { 
            field: 'access', 
            headerName: "Access Level",
            flex: 1,
            // show different content depending on the access
            renderCell: ({ row: { access }}) => {
                return (
                    <Box 
                        m="0 auto" 
                        display="flex" 
                        justifyContent="center"
                    >
                        {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
                        {access === 'manager' && <SecurityOutlinedIcon />}
                        {access === 'user' && <LockOpenOutlinedIcon />}
                        <Typography>
                            {access}
                        </Typography>
                    </Box>
                );
            }
        },
    ];

    return (
        <Box>
            <Header title="TEAM" subtitle="Managing the Team Members" />
            <Box 
                height="75vh"
            >
                <DataGrid 
                    rows={mockDataTeam}
                    columns={columns}
                />
            </Box>
        </Box>
    );
}

export default Team;