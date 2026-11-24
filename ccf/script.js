const form = document.getElementById("form");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNumber = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const complaintsGroup = document.getElementById("complaints-group");
const complaintDescription = document.getElementById("complaint-description");
const otherComplaint = document.getElementById("other-complaint");
const solutionsGroup = document.getElementById("solutions-group");
const solutionDescription = document.getElementById("solution-description");
const otherSolution = document.getElementById("other-solution");

const complaintCheckboxes = document.querySelectorAll(
  "#complaints-group input[type='checkbox']"
);
const solutionRadios = document.querySelectorAll(
  "#solutions-group input[type='radio']"
);

const validators = {
  "full-name": () => fullName.value !== "",
  "email": () => email.value !== "" && email.checkValidity(),
  "order-no": () => /^2024\d{6}$/.test(orderNumber.value),
  "product-code": () =>
    /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/.test(productCode.value),
  "quantity": () => /^[1-9]\d*$/.test(quantity.value),
  "complaints-group": () =>
    Array.from(complaintCheckboxes).some((checkbox) => checkbox.checked),
  "complaint-description": () =>
    !otherComplaint.checked || complaintDescription.value.length >= 20,
  "solutions-group": () =>
    Array.from(solutionRadios).some((radio) => radio.checked),
  "solution-description": () =>
    !otherSolution.checked || solutionDescription.value.length >= 20,
};

const elements = {
  "full-name": fullName,
  "email": email,
  "order-no": orderNumber,
  "product-code": productCode,
  "quantity": quantity,
  "complaints-group": complaintsGroup,
  "complaint-description": complaintDescription,
  "solutions-group": solutionsGroup,
  "solution-description": solutionDescription,
};

function setBorder(key, isValid) {
  const color = isValid ? "green" : "red";
  const element = elements[key];
  element.style.borderColor = color;
  element.style.borderBlockColor = color;
}

function validateForm() {
  const result = {};
  for (const key in validators) {
    result[key] = validators[key]();
  }
  return result;
}

function isValid(formObject) {
  return Object.values(formObject).every(Boolean);
}

function highlightInvalidFields(formObject) {
  for (const key in formObject) {
    if (!formObject[key]) {
      elements[key].style.borderColor = "red";
      elements[key].style.borderBlockColor = "red";
    }
  }
}

[
  "full-name",
  "email",
  "order-no",
  "product-code",
  "quantity",
  "complaint-description",
  "solution-description",
].forEach((key) => {
  elements[key].addEventListener("change", () => {
    setBorder(key, validators[key]());
  });
});

complaintCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    setBorder("complaints-group", validators["complaints-group"]());
  });
});

solutionRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    setBorder("solutions-group", validators["solutions-group"]());
  });
});

otherComplaint.addEventListener("change", () => {
  setBorder("complaint-description", validators["complaint-description"]());
});

otherSolution.addEventListener("change", () => {
  setBorder("solution-description", validators["solution-description"]());
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const result = validateForm();
  if (!isValid(result)) {
    highlightInvalidFields(result);
  }
});
