import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import CompletedStatus from './CompletedStatus';

export default class Todos extends Component {
    constructor(props) {
        super(props);

        this.options = {
            noDataText: 'There are currently no todos',
            sizePerPage: 10
        };

        this.formatCompleted = this.formatCompleted.bind(this);
        this.onCompletedChanged = this.onCompletedChanged.bind(this);
    }

    onCompletedChanged (todo) {
        console.log('onCompletedChanged', todo);
        this.props.onTodoStatusChange(todo)
    };

    formatCompleted (completed, todo) {
        return <CompletedStatus todo={todo}  onTodoStatusChange={this.onCompletedChanged}/>
    };

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={8}>
                        <BootstrapTable search={true} data={this.props.todos} bordered={false} striped={true} hover={true}
                                        options={this.options}>
                            <TableHeaderColumn isKey={true} dataField="id" dataSort={true}>Id</TableHeaderColumn>
                            <TableHeaderColumn dataField="name" dataSort={true}>Name</TableHeaderColumn>
                            <TableHeaderColumn dataField="completed" dataSort={true} dataFormat={this.formatCompleted}>Completed
                                ?</TableHeaderColumn>
                        </BootstrapTable>
                    </Col>
                </Row>
            </Grid>
        );
    }
};
