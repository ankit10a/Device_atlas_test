import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/esm/Form';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import Table from 'react-bootstrap/Table';

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

const TableComponent = ({ tableData }: Props) => {
    const [filterColumn, setFilterColumn] = useState<string>("");
    const [filterValue, setFilterValue] = useState<string>("");
    const [sortBy, setSortedBy] = useState<string>('')
    const [orderBy, setOrderBy] = useState<string>('')

    // Get all column keys for the dropdown
    const columns = [
        { key: "primaryHardwareType", label: "Primary Hardware Type" },
        { key: "osVersion", label: "OS Version" },
        { key: "vendor", label: "Vendor" },
        { key: "browserName", label: "Browser Name" },
        { key: "model", label: "Model" },
        { key: "osName", label: "OS Name" },
        { key: "browserRenderingEngine", label: "Browser Rendering Engine" },
    ];

    // Filter table data based on selected column and value
    const filteredData = tableData.filter((device) => {
        if (!filterColumn || !filterValue) return true;
        return device[filterColumn as keyof Device]
            ?.toString()
            .toLowerCase()
            .includes(filterValue.toLowerCase());
    });

    const handleClick = () => {
        console.log('click')
    }

    const handleReset = () => {
        console.log('handleReset')
    }

    return (
        <div>
            <InputGroup className="mb-3">
                <Form.Select
                    aria-label="Select filter column"
                    value={filterColumn}
                    onChange={(e) => setFilterColumn(e.target.value)}
                >
                    <option value="" disabled>Filter by Column</option>
                    {columns.map((col) => (
                        <option key={col.key} value={col.key}>
                            {col.label}
                        </option>
                    ))}
                </Form.Select>

                <Form.Control
                    type="text"
                    placeholder="Enter filter value..."
                    value={filterValue}
                    onChange={(e) => setFilterValue(e.target.value)}
                    disabled={!filterColumn}
                />

                <Form.Select
                    aria-label="Select filter column"
                    value={sortBy}
                    onChange={(e) => setFilterColumn(e.target.value)}
                >
                    <option value="" disabled>SortBy Column</option>
                    {columns.map((col) => (
                        <option key={col.key} value={col.key}>
                            {col.label}
                        </option>
                    ))}
                </Form.Select>
                <Form.Select
                    aria-label="Select column"
                    value={['ASC', 'DESC']}
                    onChange={(e) => setFilterColumn(e.target.value)}
                >
                    <option value="" disabled>Orderby Column</option>
                    <option key='ASC' value={'ASC'} disabled={!sortBy}>ASC</option>
                    <option key='DESC' value={'DESC'} disabled={!sortBy}>DESC</option>
                </Form.Select>
                <Button variant='primary' onClick={handleClick}>Filter</Button>
                <Button variant='danger' onClick={handleReset}>Reset</Button>
            </InputGroup>

            {/* Table Display */}
            <Table responsive="sm" striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        {columns.map((col) => (
                            <th key={col.key}>{col.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData && tableData.length > 0 ? (
                        tableData.map((ele, idx) => (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{ele.primaryHardwareType}</td>
                                <td>{ele.osVersion}</td>
                                <td>{ele.vendor}</td>
                                <td>{ele.browserName}</td>
                                <td>{ele.model}</td>
                                <td>{ele.osName}</td>
                                <td>{ele.browserRenderingEngine}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={8} className="text-center">
                                No data available
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default TableComponent;
