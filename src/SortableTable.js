import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css'


export default function SortableTable(props) {
    return (
        <Table data={props.plates} autoHeight={true}
            locale={ {emptyMessage: ('No data'), loading: ('Loading...')} }
               sortColumn='car_license_plate_number'
               sortType={'asc'}
               onSortColumn={(dataKey, sortType) => console.debug(`Sort by ${dataKey} ${sortType}`)}
        >
            <Column minWidth={180} sortable fixed resizable>
                <HeaderCell>Plate Number</HeaderCell>
                <Cell dataKey='car_license_plate_number'/>
            </Column>
            <Column minWidth={180} sortable resizable>
                <HeaderCell>Timestamp</HeaderCell>
                <Cell dataKey='parsed_timestamp' />
            </Column>
            <Column minWidth={250} sortable resizable>
                <HeaderCell>Parsed date/time</HeaderCell>
                <Cell dataKey='parsed_date_time' />
            </Column>
            <Column minWidth={350} sortable resizable>
                <HeaderCell>Gps Coordinates</HeaderCell>
                <Cell dataKey='gps_location' />
            </Column>
            <Column minWidth={460} sortable resizable>
                <HeaderCell>Car Image</HeaderCell>
                <Cell dataKey='object_key_in_bucket' />
            </Column>
        </Table>
    );
}