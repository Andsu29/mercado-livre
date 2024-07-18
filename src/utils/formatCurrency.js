const formatCurrency = (value, currency) => {
  if (value != null) {
    return value.toLocaleString("pt-br", { style: "currency", currency });
  } else {
    return "";
  }
};

export default formatCurrency;
