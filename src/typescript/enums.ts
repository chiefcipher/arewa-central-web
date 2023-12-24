export enum E_Pages {
  login = "/login",
  signup = "/signup",
  forgotPassword = "/forgot-password",
  profile = "/profile",
  cart = "/cart",
  orders = "/orders",
  notification = "/notification",
  checkout = "/checkout",
  // dashboard = "/dashboard",
  trackOrder = "/track-order",

  home = "/",
  about = "/about",
  contact = "/contact",
  investors = "/investors",
  careers = "/careers",
  terms = "/terms",
  privacy_policy = "/privacy-policy",
  help = "/help",
}

export enum E_Hidden {
  tokenName = "djanf",
}

export enum E_Order_Status {
  delivered = "Delivered",
  declined = "Declined",
  in_state_of_residence = "In state",
  on_transit = "On Transit",
  processing = "Processing",
}

export enum E_Order_Remark {
  paid = "Paid",
  processing_refund = "Processing Refund",
  refunded = "Refunded",
}
