import { useCallback, useEffect, useState } from 'react';
import { Button, Form, InputGroup, Table } from 'react-bootstrap';
import apiInstanse from '../config/axiosConfig';

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
    filterColumn?: string;
    filterValue?: string;
    sortBy?: string;
    orderBy?: string;
}

interface TableComponentProps {
    tableData: Device[];
    currentFilters: FilterParams;
    onFilterChange: (filters: FilterParams) => void;
}

const COLUMNS = [
    { key: "primaryHardwareType", label: "Primary Hardware Type" },
    { key: "osVersion", label: "OS Version" },
    { key: "vendor", label: "Vendor" },
    { key: "browserName", label: "Browser Name" },
    { key: "model", label: "Model" },
    { key: "osName", label: "OS Name" },
    { key: "browserRenderingEngine", label: "Browser Rendering Engine" },
] as const;

const TableComponent = ({ tableData, currentFilters, onFilterChange }: TableComponentProps) => {
    const [filterValues, setFilterValues] = useState<string[]>([]);
    const [cache, setCache] = useState<Record<string, string[]>>({});

    const handleFilterChange = useCallback((type: keyof FilterParams, value: string) => {
        onFilterChange({ ...currentFilters, [type]: value });
    }, [currentFilters, onFilterChange]);

    const getFilterColumnData = useCallback(async () => {
        const column = currentFilters.filterColumn;
        if (!column || cache[column]) {
            setFilterValues(column ? cache[column] || [] : []);
            return;
        }

        try {
            const { data } = await apiInstanse.get(`/get-device-column-data?params=${column}`);
            if (data?.result) {
                setCache(prev => ({ ...prev, [column]: data.result }));
                setFilterValues(data.result);
            }
        } catch (error) {
            console.error('Error fetching filter values:', error);
            setFilterValues([]);
        }
    }, [currentFilters.filterColumn, cache]);

    const handleReset = useCallback(() => {
        onFilterChange({
            filterColumn: undefined,
            filterValue: undefined,
            sortBy: undefined,
            orderBy: undefined
        });
        setFilterValues([]);
        setCache({});
    }, [onFilterChange]);

    useEffect(() => {
        getFilterColumnData();
    }, [getFilterColumnData]);

    return (
        <div className="table-responsive">
            <InputGroup className="mb-3 flex-wrap gap-2">
                <Form.Select
                    value={currentFilters.filterColumn || ''}
                    onChange={(e) => handleFilterChange('filterColumn', e.target.value)}
                >
                    <option value="" disabled>Filter by Column</option>
                    {COLUMNS.map(({ key, label }) => (
                        <option key={key} value={key}>{label}</option>
                    ))}
                </Form.Select>

                <Form.Select
                    value={currentFilters.filterValue || ''}
                    onChange={(e) => handleFilterChange('filterValue', e.target.value)}
                    disabled={!currentFilters.filterColumn}
                >
                    <option value="" disabled>
                        {filterValues.length ? 'Filter Value' : 'No options available'}
                    </option>
                    {filterValues.map(value => (
                        <option key={value} value={value}>{value}</option>
                    ))}
                </Form.Select>

                <Form.Select
                    value={currentFilters.sortBy || ''}
                    onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                >
                    <option value="" disabled>Sort By</option>
                    {COLUMNS.map(({ key, label }) => (
                        <option key={key} value={key}>{label}</option>
                    ))}
                </Form.Select>

                <Form.Select
                    value={currentFilters.orderBy || ''}
                    onChange={(e) => handleFilterChange('orderBy', e.target.value)}
                    disabled={!currentFilters.sortBy}
                >
                    <option value="" disabled>Order</option>
                    <option value="ASC">Ascending</option>
                    <option value="DESC">Descending</option>
                </Form.Select>

                <Button variant="danger" onClick={handleReset}>Reset</Button>
            </InputGroup>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        {COLUMNS.map(({ label }) => (
                            <th key={label}>{label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData.length > 0 ? (
                        tableData.map((device, index) => (
                            <tr key={`${device.model}-${index}`}>
                                <td>{index + 1}</td>
                                {COLUMNS.map(({ key }) => (
                                    <td key={key}>{device[key]}</td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={COLUMNS.length + 1} className="text-center">
                                No matching records found
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default TableComponent;