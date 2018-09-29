import * as React from "react";

export interface IToDoProps {
    text: string;
    value: string;
}

export class ToDo extends React.Component<IToDoProps> {
    constructor(props: IToDoProps) {
        super(props);
        this.state = {
            text: '',
            value: '',
        }
    }
    public render(): JSX.Element {
        return (
            <div>
                <header className="header">
                    <h1>todos</h1>
                    <input
                        className="new-todo"
                        placeholder="What needs to be done?"
                        onKeyDown={this.handleNewTodoKeyDown}
                        autoFocus={true}
                    />
                </header>
                <section className="main">
                    <input
                        id="toggle-all"
                        className="toggle-all"
                        type="checkbox"
                        onChange={this.toggleAll}
                        checked={true}
                    />
                    <label htmlFor="toggle-all">Mark all as complete</label>
                    {/* <ul className="todo-list">{todoItems}</ul> */}
                </section>
            </div>
        );
    }
    private handleNewTodoKeyDown = (e: any) => {
        const { value } = e.target;
        this.setState({
            text: value,
        })
    }
    private toggleAll = (e: any) => {
        const { value } = e.target;
        this.setState({
            value,
        })
    }
}
