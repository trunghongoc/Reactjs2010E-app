import React, { useEffect, useState, useMemo } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Posts = () => {
  const user = useSelector(store => store.user.currentUser)
  const [postList, setPostList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(6)
  const [totalPage, setTotalPage] = useState(0)
  const [loading, setLoading] = useState(false)

  const start = useMemo(() => {
    return (currentPage - 1) * pageSize
  }, [currentPage, pageSize])

  const fetchData = () => {
    setLoading(true)

    axios.get(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${pageSize}`)
      .then(response => {
        setPostList(response.data)
        const totalRecords = 100
        const totalPages = Math.ceil(totalRecords / pageSize)
        setTotalPage(totalPages)
      })
      .then(() => {
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }

  const paginate = page => {
    setCurrentPage(page)
  }

  const pagingNumber = useMemo(() => {
    const links = []

    for (let i = 1; i < totalPage; i++) {
      links.push(
        <li
          key={i}
          onClick={() => paginate(i)}
          className={`page-item ${i === currentPage ? 'active' : ''}`}
        >
          <span className="page-link">{i}</span>
        </li>
      )
    }

    return links
  }, [totalPage, currentPage])

  const goToPrev = () => {
    const newPage = Math.max(currentPage - 1, 1)
    setCurrentPage(newPage)
  }

  const changePageSize = num => {
    setPageSize(num)
    setCurrentPage(1)
  }

  useEffect(() => {
    fetchData()
  }, [currentPage, pageSize])

  return (
    <div className="container">
      <p>User: {user.name}</p>
      <h1>Danh sách bài viết</h1>

      {
        loading && <p>Loading ...</p>
      }

      {
        !loading && (
          <ul className="list-group">
            {
              postList.map(post => (
                <li className="list-group-item" key={post.id}>
                  [{post.id}]
                  {post.title}
                </li>
              ))
            }
          </ul>
        )
      }

      <ul className="pagination">
        <li onClick={goToPrev} className="page-item">
          <span className="page-link">Previous</span>
        </li>

        {pagingNumber}
        <li className="page-item"><a className="page-link" href="#">Next</a></li>
      </ul>

      <p>Page size:</p>
      <span style={{ display: 'inline-block', padding: '20px', cursor: 'pointer'}} onClick={() => changePageSize(5)}>5</span>
      <span style={{ display: 'inline-block', padding: '20px', cursor: 'pointer'}} onClick={() => changePageSize(10)}>10</span>
      <span style={{ display: 'inline-block', padding: '20px', cursor: 'pointer'}} onClick={() => changePageSize(15)}>15</span>
    </div>
  )
}

export default Posts
