export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (_cartItem) => _cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((_cartItem) =>
      _cartItem.id === cartItemToAdd.id
        ? { ..._cartItem, quantity: _cartItem.quantity + 1 }
        : _cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (_cartItem) => _cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (_cartItem) => _cartItem.id !== cartItemToRemove.id
    );
  }

  return cartItems.map((_cartItem) =>
    _cartItem.id === cartItemToRemove.id
      ? { ..._cartItem, quantity: _cartItem.quantity - 1 }
      : _cartItem
  );
};
