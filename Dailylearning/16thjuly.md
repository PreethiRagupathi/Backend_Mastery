# 16.07.2026

# Forms, Controlled Components & Form Validation

## Objective

Today's objective was to understand how forms work in React and how user input is managed using controlled components. I learned how to create forms, handle user input with `useState`, submit forms using the `onSubmit` event, prevent the default browser behavior, validate user input, and build a complete feedback form as part of my Cycle Susa project.

---

## Topics Covered

### 1. Forms in React

I learned that a `<form>` is used to collect related user information. Unlike a normal `<div>`, a form provides built-in functionality such as submitting data, allowing submission using the Enter key, grouping input fields, and improving accessibility.

I also understood that when a submit button is clicked, the browser tries to submit the form and refreshes the page. In React applications, this default behavior is usually prevented because React handles form submission without reloading the page.

---

### 2. onSubmit Event

I learned that the `onSubmit` event is attached to the `<form>` element instead of the submit button.

```tsx
<form onSubmit={handleSubmit}>
```

Using `onSubmit` is better than `onClick` because it works when:

- The user clicks the Submit button.
- The user presses the Enter key inside an input field.

This makes form handling more reliable.

---

### 3. preventDefault()

I learned why we use:

```tsx
event.preventDefault();
```

Without it, the browser refreshes the page after submitting the form, causing all entered values to disappear.

Using `preventDefault()` allows React to control what happens after the form is submitted.

---

### 4. Controlled Components

I learned that React controls every input field through state.

Instead of allowing the browser to manage input values, React stores the values inside `useState`.

Example:

```tsx
const [data, setData] = useState({
  name: "",
  email: "",
  rating: "",
  feedback: ""
});
```

Each input is connected to the state using:

- `value`
- `onChange`

This keeps the UI and state synchronized.

---

### 5. Managing Multiple Inputs Using One State Object

Instead of creating separate state variables for every input field, I learned to store all form data inside a single object.

This approach makes the code cleaner and easier to maintain.

---

### 6. Common handleChange() Function

Initially, I updated every field separately.

Later, I learned how to create a common function that updates all input fields using the `name` attribute.

```tsx
const handleChange = (e) => {
  setData({
    ...data,
    [e.target.name]: e.target.value,
  });
};
```

This reduced repetitive code and improved maintainability.

---

### 7. Importance of the name Attribute

I understood that every input must have a `name` attribute when using a common `handleChange()` function.

Example:

```tsx
<input
  name="email"
  value={data.email}
  onChange={handleChange}
/>
```

The `name` attribute tells React which property inside the state object should be updated.

---

### 8. Form Elements

I learned when to use different form elements.

- `<input type="text">` for short text.
- `<input type="email">` for email addresses.
- `<select>` for choosing a rating.
- `<textarea>` for long feedback messages.

I also learned that `textarea` is a separate HTML element and not an input type.

---

### 9. Form Validation

I learned how to validate user input before submitting the form.

The validations included:

- Name should not be empty.
- Email should contain `@`.
- Rating must be selected.
- Feedback should contain at least 10 characters.

If validation fails, an alert is displayed and form submission is stopped using `return`.

I also understood the difference between HTML validation (`required`) and custom React validation using JavaScript conditions.

---

### 10. Resetting the Form

After successful submission, I reset all the form fields by updating the state.

```tsx
setData({
  name: "",
  email: "",
  rating: "",
  feedback: "",
});
```

This clears the form and prepares it for the next submission.

---

## Project Work Completed

- Created a Feedback page for the Cycle Susa project.
- Built a complete feedback form.
- Used a single `useState` object to manage form data.
- Implemented a common `handleChange()` function.
- Connected all input fields using controlled components.
- Implemented form submission using `onSubmit`.
- Prevented page refresh using `event.preventDefault()`.
- Added validation for all required fields.
- Reset the form after successful submission.
- Added a success message using `alert()`.

---

## Mistakes Made and Corrections

### Mistake 1

Forgot to add the `name` attribute to the input fields.

**Correction:** Added the correct `name` attribute for every input so the common `handleChange()` function could update the appropriate state property.

---

### Mistake 2

Used:

```tsx
<input type="textarea">
```

**Correction:** Replaced it with the correct HTML element:

```tsx
<textarea></textarea>
```

---

### Mistake 3

Used:

```tsx
name="Rating"
```

instead of:

```tsx
name="rating"
```

**Correction:** Matched the `name` attribute exactly with the state object's property names.

---

### Mistake 4

Initially repeated similar `onChange` logic for every input field.

**Correction:** Replaced all of them with a reusable `handleChange()` function.

---

### Mistake 5

Initially validated only the name field.

**Correction:** Added validation for email, rating, and feedback before allowing form submission.

---

## Key Takeaways

- Forms are used to collect user input.
- `onSubmit` is preferred over `onClick` for form submission.
- `event.preventDefault()` prevents page refresh.
- Controlled components keep React state and UI synchronized.
- A single state object simplifies form management.
- The `name` attribute is essential for reusable input handlers.
- Different form elements should be chosen based on the type of user input.
- Validation improves data quality before submission.
- Resetting the state clears the form after successful submission.
- Building a real project helped reinforce all these concepts.
````