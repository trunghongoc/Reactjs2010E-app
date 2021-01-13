import React, { Component } from 'react'
import { students } from './../../constants/students'
import User from './User'

class Users extends Component {
  state = {
    students
  }

  editRow = (id, isEdit) => {
    const user = this.state.students.find(user => user.id === id)
    if (!user) {
      return;
    }

    user.isEdit = isEdit

    this.setState({
      students: [...this.state.students]
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <button className="btn btn-info">Add</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>

        <div className="row">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>ID</th>
                <th>Full name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {
                this.state.students.map((user, index) => (
                  <User
                    key={index}
                    user={user}
                    editRow={this.editRow}
                  />
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Users
