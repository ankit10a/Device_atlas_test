import { useEffect, useState } from "react";
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

interface Props {
    tableData: Device[];
}


const DeviceTable = () => {

    const [tableData, setTableData] = useState([]);

    const getTableData = async () => {
        const res = await apiInstanse.get('/device-list');
        if (res.status == 200) {
            setTableData(res.data.list)
        }
    }

    useEffect(() => {
        getTableData()
    }, [])

    return <TableComponent tableData={tableData} />
}

export default DeviceTable;