import apiUrl from '../apiConfig'
import axios from 'axios'

// Show/Index Article //////////////////////////////////////////////////////////
export const articleIndex = (user) => {
  return axios({
    url: apiUrl + '/articles',
    method: 'GET'
    // Add an authorization header
    // headers: {
    //   // we need the user, so we have access to their token
    //   'Authorization': `Bearer ${user.token}`
    // }
  })
}
// Create an Article //////////////////////////////////////////////////////////
export const articleCreate = (article, user) => {
  return axios({
    url: apiUrl + '/articles',
    method: 'POST',
    // Add an authorization header
    headers: {
      // we need the user, so we have access to their token
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
    // Add an authorization header
    headers: {
      // we need the user, so we have access to their token
      'Authorization': `Bearer ${user.token}`
    }
  })
}

// //////////////////////////////

export const articleUpdate = (id, article, user) => {
  return axios({
    url: apiUrl + '/articles/' + id,
    method: 'PATCH',
    // Add an authorization header
    headers: {
      // we need the user, so we have access to their token
      'Authorization': `Bearer ${user.token}`
    },
    data: { article: article }
  })
}
