import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const Users = ({users}) => {
    const options = {
        noDataText: 'There are currently no users',
        sizePerPage: 10
    };

    return (
        <Grid>
            <Row>
                <Col xs={12} md={8}>
                    <BootstrapTable search={true} data={users} bordered={false} striped={true} hover={true} options={options}>
                        <TableHeaderColumn isKey={true} dataField="id" dataSort={true}>Id</TableHeaderColumn>
                        <TableHeaderColumn dataField="name" dataSort={true}>Name</TableHeaderColumn>
                    </BootstrapTable>
                </Col>
            </Row>
        </Grid>
    );
};

export default Users;