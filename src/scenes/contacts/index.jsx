import React from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { colorTokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Contacts = () => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    // the headerName will be shown on the tabke
    const columns = [
        // this will not grow
        { field: 'id', headerName: "ID", flex: 0.5 },
        { field: 'registrarId', headerName: 'Registrar ID'},
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
            field: 'address', 
            headerName: "Address",
            flex: 1
        },
        { 
            field: 'city', 
            headerName: "City",
            flex: 1
        },
        { 
            field: 'zipCode', 
            headerName: "ZipCode",
            flex: 1
        }
    ];

    return (
        <Box m="20px">
            <Header title="CONTACTS" subtitle="List of Contacts" />
            {/* Need to explicitly define an actual pixel height of the Box because it was 100% */}
            <Box
                mt="40px" 
                height="75vh"
                sx={{
                    // hide borders of the table. Inspect elements and find classes of MuiDataGrid
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none"
                    },
                    // this class was defined when I configured the columns for the DataGrid
                    "& .name-column--cell": {
                        color: colors.greenAccent[300]
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none"
                    },
                    // the middle section between header and footer ( the content )
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400]
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700]
                    },
                }}
            >
                <DataGrid 
                    rows={mockDataContacts}
                    columns={columns}
                />
            </Box>
        </Box>
    );
}

export default Contacts;