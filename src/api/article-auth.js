import apiUrl from '../apiConfig'
import axios from 'axios'

// Show/Index Article //////////////////////////////////////////////////////////
export const articleIndex = (user) => {
  return axios({
    url: apiUrl + '/articles',
    method: 'GET'
  })
}
// 14 articles on homepage

export const homeIndex = (user) => {
  return axios({
    url: apiUrl + '/first14',
    method: 'GET'
  })
}
export const index14 = (user, loadCount) => {
  return axios({
    url: apiUrl + '/next14',
    method: 'GET',
    data: { loadCount }
  })
}

// Create an Article //////////////////////////////////////////////////////////
export const articleCreate = (article, user) => {
  return axios({
    url: apiUrl + '/articles',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { article }
  })
}
// Show 1 Article ////////////////////////////////////////////////////////
export const showArticle = (id, user) => {
  return axios({
    url: apiUrl + '/articles/' + id,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

// //////////////////////////////

export const articleUpdate = (id, article, user) => {
  return axios({
    url: apiUrl + '/articles/' + id,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { article: article }
  })
}
