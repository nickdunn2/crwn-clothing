export const addItemToCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find(item => item.id === itemToAdd.id)

  if (existingItem) {
    return cartItems.map(item => {
      return item.id === itemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    })
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }]
}

export const clearItemFromCart = (cartItems, itemToClear) => {
  return cartItems.filter(item => item.id !== itemToClear.id)
}
