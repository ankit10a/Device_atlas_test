import { useCallback, useEffect, useState } from "react";
import TableComponent from "../component/Table";
import apiInstanse from "../config/axiosConfig";

interface Device {
    primaryHardwareType: string;
    osVersion: string;
    vendor: string;
    browserName: string;
    model: string;
    osName: string;
    browserRenderingEngine: string;
}

interface FilterParams {
    sortBy?: string;
    orderBy?: string;
    filterColumn?: string;
    filterValue?: string;
}

const DeviceTable = () => {
    const [tableData, setTableData] = useState<Device[]>([]);
    const [filters, setFilters] = useState<FilterParams>({});

    const getTableData = useCallback(async () => {
        try {
            const params = new URLSearchParams();

            if (filters.sortBy) params.append('sortBy', filters.sortBy);
            if (filters.orderBy) params.append('orderBy', filters.orderBy);
            if (filters.filterColumn) params.append('filterColumn', filters.filterColumn);
            if (filters.filterValue) params.append('filterValue', filters.filterValue);

            const res = await apiInstanse.get('/device-list', { params });

            if (res.status === 200) {
                setTableData(res.data.list);
            }
        } catch (error) {
            console.error("Error fetching device data:", error);
        }
    }, [filters]);

    // Update filters from child component
    const handleFilterChange = useCallback((newFilters: FilterParams) => {
        setFilters(prev => ({ ...prev, ...newFilters }));
    }, []);

    useEffect(() => {
        getTableData();
    }, [getTableData]);

    return (
        <TableComponent
            tableData={tableData}
            onFilterChange={handleFilterChange}
            currentFilters={filters}
        />
    );
};

export default DeviceTable;