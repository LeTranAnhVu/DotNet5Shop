import $ from 'jquery'

export function loadCheckboxState($checkboxes, values) {
  $checkboxes.each((index, checkbox) => {
    const $checkbox = $(checkbox)
    const value = $checkbox.val()
    if(values && values.includes(value)) {
      $checkbox.prop('checked', true).change()
    }else {
      $checkbox.prop('checked', false).change()
    }
  })
}