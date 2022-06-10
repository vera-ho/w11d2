import React from "react";
// import uniqueId from "../util";
class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            body: "",
            done: false
        }

        this.updateBody = this.updateBody.bind(this)
        this.updateTitle = this.updateTitle.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateTitle(e) {
        this.setState({ title: e.target.value })
    }
    
    updateBody(e) {
        this.setState({ body: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createTodo(this.state).then(
            () => this.setState({
                title: "",
                body: "",
                done: false
            })
        )
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Add todo</h1>
                <label>title
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.updateTitle}
                    />
                </label>
                <label>body
                    <input
                        type="text"
                        value={this.state.body}
                        onChange={this.updateBody}
                    />
                </label>
                <input type="submit" value="Add todo" />
            </form>
        )
    }
}

export default TodoForm;