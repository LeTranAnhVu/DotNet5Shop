import $ from 'jquery'
import {parseCurrentParam, stringifyQuery, updateUrl} from '../helpers/queryParam'

export default class SearchQueryHandler {
  $searchInput = $('.main-navbar .search-form .search-input')

  run() {
    this.loadState()
    this.listenEvent()
  }

  loadState() {
    const {appSearch} = parseCurrentParam()
    this.$searchInput.val(appSearch)
  }

  listenEvent() {
    this.$searchInput.keypress(event => {
      const value = event.target.value
      const queryObj = parseCurrentParam()
      queryObj.appSearch = value

      const queryStr = stringifyQuery(queryObj)
      updateUrl(queryStr)
      if (event.which === 13) {
        event.preventDefault()
        console.log(window.location.href)
        window.location.href = window.location.href
      }
    })
  }
}