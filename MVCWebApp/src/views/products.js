import $ from 'jquery'

import {handleCheckboxChange} from '../helpers/handleCheckboxChange'
import {handleNumberInputChange} from '../helpers/handleNumberInputChange'
import {parseCurrentParam, stringifyQuery, updateUrl} from '../helpers/queryParam'
import {loadCheckboxState} from '../helpers/loadCheckboxState'
import {loadInputState} from '../helpers/loadInputState'
import SearchQueryHandler from '../features/searchQueryHandler'

export function run() {
  const filterHandler = new SideFilterHandler()
  filterHandler.run()

  const productViewSwitch = new ProductViewSwitch()
  productViewSwitch.run()

  const searchQueryHandler = new SearchQueryHandler()
  searchQueryHandler.run()
}

class ProductViewSwitch {
  $grid = $('.product-view-switch .grid-filter')
  $list = $('.product-view-switch .list-filter')

  run() {
    this.listenViewChange(this.$grid)
    this.listenViewChange(this.$list)
    this.loadState()
  }

  loadState() {
    const {productViewType} = parseCurrentParam()
    if(productViewType === 'list') {
      this.$list.addClass('active')
      this.$grid.removeClass('active')
    }else {
      this.$grid.addClass('active')
      this.$list.removeClass('active')
    }

  }

  listenViewChange($element) {
    $element.click(() => {
      const value = $element.hasClass('list-filter') ? 'list' : 'grid'
      const queryObj = parseCurrentParam()
      queryObj.productViewType = value

      const queryStr = stringifyQuery(queryObj)
      updateUrl(queryStr)
      window.location.href = window.location.href
    })
  }

}

// Side Filter
class SideFilterHandler {
  brandSet = new Set()
  categorySet = new Set()
  minValue = {value: undefined}
  maxValue = {value: undefined}

  $form = $('#side-filters-form')
  $applyBtn = $('.side-filters .js-btn-submit')
  // Brands
  $brandFilterCheckboxes = $('.brand-filters input[type=checkbox]')
  // Categories
  $categoryFilterCheckboxes = $('.category-filters input[type=checkbox]')
  // Min & Max
  $minInput = $('.min-max-filters input#min-price')
  $maxInput = $('.min-max-filters input#max-price')

  run() {
    this.listenToFilters()
    this.updateTheFilters()
    this.listenToSubmitBtn()
  }

  updateTheFilters() {
    // Get query param
    const params = parseCurrentParam()
    let {brands, categories, min, max} = params
    min = isNaN(Number(min)) ? undefined : Number(min)
    max = isNaN(Number(max)) ? undefined : Number(max)
    loadCheckboxState(this.$brandFilterCheckboxes, brands)
    loadCheckboxState(this.$categoryFilterCheckboxes, categories)
    loadInputState(this.$minInput, min)
    loadInputState(this.$maxInput, max)
  }

  listenToSubmitBtn() {
    this.$applyBtn.click((event) => {
      event.preventDefault()
      const queryObj = parseCurrentParam()
      queryObj.brands = Array.from(this.brandSet)
      queryObj.categories = Array.from(this.categorySet)
      queryObj.min = this.minValue.value
      queryObj.max = this.maxValue.value
      const queryStr = stringifyQuery(queryObj)

      updateUrl(queryStr)
      window.location.href = window.location.href
    })
  }

  listenToFilters() {
    handleCheckboxChange(this.$brandFilterCheckboxes, this.brandSet)
    handleCheckboxChange(this.$categoryFilterCheckboxes, this.categorySet)
    handleNumberInputChange(this.$minInput, this.minValue)
    handleNumberInputChange(this.$maxInput, this.maxValue)
  }
}