import React, {Component} from 'react';
import { connect } from 'react-redux';

import {createTodo, getTodos, onTodoStatusChange} from '../../actions';

import Todos from './Todos';
import AddTodo from './AddTodo';

import {Grid, Row, Col} from 'react-bootstrap';

class TodosContainer extends Component{
    constructor(props) {
        super(props);
        this.onTodoStatusChange = this.onTodoStatusChange.bind(this);
    }

    onTodoStatusChange (todo) {
        this.props.onTodoStatusChange(todo);
    };

    render(){
        return (
            <Grid>
                <Row>
                    <Col>
                        <h1><i className="fa fa-th-list mr10"></i>Todos</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AddTodo addTodo={this.props.createTodo} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Todos todos={this.props.todos} onTodoStatusChange={this.onTodoStatusChange}/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

// Determine which state to map into container's props
function select(state){
    return {
        todos: state.todosState.todos
    };
}

export default connect(
    select, {
        createTodo,
        getTodos,
        onTodoStatusChange
    } // comma delimited list of actionCreators
)(TodosContainer);
