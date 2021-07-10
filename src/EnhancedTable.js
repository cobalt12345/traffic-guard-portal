import React, {useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {FormControlLabel, Switch, TableSortLabel, Toolbar, Typography} from "@material-ui/core";
import PropTypes from 'prop-types';
import {lighten} from "material-ui/utils/colorManipulator";
import clsx from "clsx";
import {createConsole} from "./inlineConsole";
import {S3Image} from 'aws-amplify-react';
import {Storage} from 'aws-amplify';
import SimpleMap from "./PreviewOnMap";

Storage.configure({
    customPrefix: {
        public: '',
        private: '',
        protected: ''
    }
});

const columns = [
    {
        id: 'car_license_plate_number',
        label: 'Plate Number',
        minWidth: 100,
        align: 'left'
    },
    {
        id: 'parsed_timestamp',
        label: 'Timestamp',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'parsed_date_time',
        label: 'Parsed date/time',
        minWidth: 140,
        align: 'center'
    },
    {
        id: 'gps_location',
        label: 'Gps Coordinates',
        minWidth: 120,
        align: 'center'
    },
    {
        id: 'object_key_in_bucket',
        label: 'Car Image',
        minWidth: 250,
        align: 'left'
    },
];

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
    recognizedImagePreview: {
        width: '200px'
    }
}));

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {columns.map((column) => (
                    <TableCell
                        key={column.id}
                        align={column.align}
                        style={{minWidth: column.minWidth}}
                        sortDirection={orderBy === column.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === column.id}
                            direction={orderBy === column.id ? order : 'asc'}
                            onClick={createSortHandler(column.id)}
                        >
                            {column.label}
                            {orderBy === column.id ? (
                                <span className={useStyles.visuallyHidden}>
                                                {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                            </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    title: {
        flex: '1 1 100%',
    },
}));

const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const { numSelected } = props;

    return (
        <Toolbar
            className={clsx(classes.root)}
        >
            <Typography className={classes.title} variant='h6' id='carLicensePlates' component='div'>
                Car license plates
            </Typography>
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable(props) {
    const [inlineConsoleVisible, setInlineConsoleVisible] = React.useState(false);
    const ref = useRef();
    useEffect(() => {
        const inlinedConsole = createConsole();
        document.body.appendChild(inlinedConsole);
        ref.current = inlineConsoleVisible;
        console.debug('Created inline console: ' + inlinedConsole);
        const tableHeader = document.querySelector('div#carLicensePlates');
        if (tableHeader) {
            tableHeader.addEventListener('dblclick', (event) => showHideConsole());
            console.debug('Listener added');
        } else {
            console.warn('Table header not found. Inline console cannot be attached.');
        };

        return function cleanup() {tableHeader.removeEventListener('dblclick', (event) => showHideConsole())};
    }, []);
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('car_license_plate_number');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const showHideConsole = () => {
        let inlinedConsole = document.getElementById('consoleWrapper');
        const prevConsoleState = ref.current;
        if (prevConsoleState) {
            inlinedConsole.setAttribute('hidden', 'true');
        } else {
            inlinedConsole.removeAttribute('hidden');
        }
        ref.current = !prevConsoleState;
        setInlineConsoleVisible(!prevConsoleState);
    };
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = props.plates.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.plates.length - page * rowsPerPage);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            classes={classes}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={props.plates.length}
                        />
                        <TableBody>
                            {stableSort(props.plates, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;
                                    let location;
                                    if (row.gps_location) {
                                        let coords = row.gps_location.split(', ');
                                        const coordsObject = {
                                            lat: Number(coords[0]),
                                            lng: Number(coords[1]),
                                        };
                                        location = <SimpleMap
                                            center = {coordsObject}
                                            marker = {coordsObject}
                                            zoom = {18}
                                        />;
                                    } else {
                                        location = row.gps_location;
                                    }

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.name)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.name}
                                            selected={isItemSelected}
                                        >
                                            <TableCell align="center" component="th" id={labelId} scope="row" padding="none">
                                                {row.car_license_plate_number}
                                            </TableCell>
                                            <TableCell align="center">{row.parsed_timestamp}</TableCell>
                                            <TableCell align="center">{row.parsed_date_time}</TableCell>
                                            <TableCell align="center">{location}</TableCell>
                                            <TableCell align="left">
                                                <S3Image imgKey={row.object_key_in_bucket}
                                                         className={classes.recognizedImagePreview} />
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[15, 30, 45]}
                    component="div"
                    count={props.plates.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Dense padding"
            />
        </div>
    );
}