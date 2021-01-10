import React, { Component } from 'react'
import { musicList } from './../mockData/music'

class MusicList extends Component {
  state = {
    musicList
  }

  get musics() {
    const list = []

    this.state.musicList.forEach((item, index) => {
      const li = (
        <li key={index}>
          <p>Title: {item.title}</p>
          <p>Name: {item.name}</p>
          <p>Time: {item.time}</p>
        </li>
      )

      list.push(li)
    })

    return list
  }

  render() {
    return (
      <>
        {this.musics}
      </>
    )
  }
}

export default MusicList
