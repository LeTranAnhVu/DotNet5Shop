export default class HeaderHandler {
  $subPub = window.$subPub
  $store = window.$store
  $cartItems = $('.main-navbar .cart .cart-list')
  $badge = $('.main-navbar .cart .cart-badge')

  run() {
    console.log('header run')
    this.subscribeForCartItemChange()
    this.updateState()
  }

  updateState() {
    const items = this.$store.getters('getCartItems') || []

    // Items
    let $liEls = items.map(item => {
      const $li = $(document.createElement('li'))
      const $btn = $(document.createElement('button'))
      const $a = $(document.createElement('a'))
      $a.text(`${item.name}  x  ${item.amount}`)
      $a.attr("href", "#")

      $btn.addClass('icon-btn')
      $btn.html('<i class="far fa-trash-alt"></i>')
      $btn.click(event => {
        event.stopPropagation()
        console.log(item)
        this.$store.commit('removeCartItem', item)
        this.$subPub.pub('cart-change')
      })

      $li.append($a)
      $li.append($btn)
      return $li
    })
    console.log($liEls)
    this.$cartItems.html($liEls)

    // Badge
    const numb = items.length
    if (numb) {
      this.$badge.text(numb)
      this.$badge.removeClass('hidden')
    } else {
      this.$badge.innerText = ''
      this.$badge.addClass('hidden')
    }

  }

  subscribeForCartItemChange() {
    this.$subPub.sub('cart-change', () => {
      this.updateState()
    })
  }

}