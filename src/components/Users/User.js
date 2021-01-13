import React, { Component } from 'react'

class User extends Component {
  state = {
    editingUser: { ...this.props.user }
  }

  get display() {
    const { user } = this.props

    return (
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>{user.id}</td>
        <td>{user.fullName}</td>
        <td>{user.gender === 'male' ? 'Nam' : 'Nữ'}</td>
        <td>{user.age}</td>
        <td>
          <button
            className="btn btn-info"
            onClick={() => this.props.editRow(user.id, true)}
          >Edit</button>

          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    )
  }

  changeName = event => {
    const value =  event.target.value
    this.setState({
      editingUser: {
        ...this.state.editingUser,
        fullName: value
      }
    })
  }

  get editingRow() {
    const user = this.state.editingUser

    return (
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>{user.id}</td>

        <td>
          <input value={user.fullName} onChange={this.changeName} className="form-control" />
        </td>

        <td>
          <select className="form-control" value={user.gender}>
            <option value="male">Nam</option>
            <option value="felmale">Nữ</option>
          </select>
        </td>

        <td>{user.age}</td>

        <td>
          <button
            className="btn btn-info"
            onClick={() => this.props.editRow(user.id, false)}
          >Cancel</button>
        </td>
      </tr>
    )
  }

  render() {
    const { user } = this.props

    return (
      <>
        { user.isEdit ? this.editingRow : this.display }
      </>
    )
  }
}

export default User
