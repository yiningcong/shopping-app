import { toggleCartActions } from "./toggle-cart-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchItem = async () => {
      const response = await fetch(
        "https://food-order-app-a1d9e-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const responseData = await response.json();
      return responseData;
    };

    try {
      const cartData = await fetchItem();
      dispatch(
        cartActions.replaceItem({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
      console.log(cartData);
    } catch (error) {
      dispatch(
        toggleCartActions.setShowNotify({
          status: "error",
          title: "has error ",
          message: "data can't be sent",
        })
      );
    }
  };
};

//id price title
export const sendCartData = (cartStaff) => {
  return async (dispatch) => {
    dispatch(
      toggleCartActions.setShowNotify({
        status: "sending",
        title: "is sending",
        message: "data is being sent",
      })
    );

    const sendItem = async () => {
      const response = await fetch(
        "https://food-order-app-a1d9e-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          Headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            items: cartStaff.items,
            totalQuantity: cartStaff.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data!");
      }
    };

    try {
      await sendItem();

      dispatch(
        toggleCartActions.setShowNotify({
          status: "success",
          title: "success sent",
          message: "data has been sent successfully",
        })
      );
    } catch (error) {
      dispatch(
        toggleCartActions.setShowNotify({
          status: "error",
          title: "has error ",
          message: "data can't be sent",
        })
      );
    }
  };
};
