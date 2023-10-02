import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { colorTokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Invoices = () => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    const columns = [
        { field: 'id', headerName: "ID" },
        { 
            field: 'name', 
            headerName: "Name", 
            flex: 1, 
            cellClassName: 'name-column--cell'
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
            field: 'cost', 
            headerName: "Cost",
            flex: 1,
            renderCell: (params) => (
                <Typography color={colors.greenAccent[500]}>
                    ${params.row.cost}
                </Typography>
            ),
        },
        { 
            field: 'date', 
            headerName: "Date",
            flex: 1
        },
    ];

    return (
        <Box m="20px">
            <Header title="INVOICES" subtitle="List of Invoices" />
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
                    rows={mockDataInvoices}
                    columns={columns}
                />
            </Box>
        </Box>
    );
}

export default Invoices;