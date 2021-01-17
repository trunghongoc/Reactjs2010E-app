import React, { Component } from 'react'
import { students } from './../../constants/students'
import User from './User'
class Users extends Component {
  state = {
    students
  }

  editRow = (id, isEdit) => {
    // const user = this.state.students.find(user => user.id === id)
    // if (!user) {
    //   return;
    // }

    // user.isEdit = isEdit
    const index = this.state.students.findIndex(user => user.id === id)
    const user = { ...this.state.students[index] }
    user.isEdit = isEdit

    const newStudents = this.state.students
    newStudents[index] = user

    this.setState({
      students: [...newStudents]
    })
  }

  componentWillMount() {
    console.log('---componentWillMount---start')
    const addBtn = document.getElementById('add-btn')
    console.log(addBtn)
    console.log('---componentWillMount---end')
  }

  componentDidMount() {
    console.log('---componentDidMount')
  }

  deleteUser = id => {
    const newStudents = this.state.students.filter(user => user.id !== id)

    this.setState({
      students: [...newStudents]
    })
  }

  render() {
    console.log('----render----start')
    const addBtn = document.getElementById('add-btn')
    console.log(addBtn)
    console.log('----render----end')

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <button className="btn btn-info" id="add-btn">Add</button>
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
                    deleteUser={this.deleteUser}
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
