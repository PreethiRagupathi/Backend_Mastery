# 14.07.2026 

# React Lists, Keys & Conditional Rendering 



## Objective



Today's objective was to understand how React efficiently renders multiple UI elements using lists and how to display different content based on conditions. I learned how to render arrays using the `map()` function, why the `key` prop is important, and how to use conditional rendering to display dynamic content. I also implemented these concepts practically in my existing Cycle Susa project.



---



# 1. Understanding Lists in React



In React, lists are used to display multiple similar elements dynamically instead of writing the same JSX repeatedly.



Without lists, if there are five services, I would have to manually write five separate components. This makes the code repetitive and difficult to maintain.



React solves this problem by allowing arrays of data to be rendered dynamically using JavaScript's `map()` function.



Example data:



```tsx

const serviceList = [

  {

    id: 101,

    serviceName: "General Service",

    description: "Complete cycle inspection and maintenance",

    price: 500,

    available: true,

  },

  {

    id: 102,

    serviceName: "Brake Adjustment",

    description: "Improve braking performance",

    price: 200,

    available: true,

  }

];

```



Instead of manually creating multiple service cards, React loops through the array and renders each object automatically.



Benefits of using lists:



- Reduces repetitive code.

- Makes components reusable.

- Simplifies adding or removing data.

- Makes applications easier to maintain.

- Displays dynamic data efficiently.



---



# 2. Rendering Lists Using map()



The `map()` method is a JavaScript array method that executes a function for every element in an array and returns a new array.



React uses `map()` to convert data into JSX.



Example:



```tsx

{

  serviceList.map((service) => (

    <ShowServices key={service.id} {...service} />

  ))

}

```



How it works:



1. React reads the array.

2. `map()` iterates through every object.

3. Each object is passed as `service`.

4. React creates one `ShowServices` component for every object.

5. All generated components are displayed on the screen.



This makes rendering dynamic and scalable.



---



# 3. Understanding the key Prop



Whenever multiple elements are rendered using `map()`, React requires a unique `key` prop.



Example:



```tsx

key={service.id}

```



Purpose of `key`:



- Helps React uniquely identify each element.

- Improves rendering performance.

- Prevents unnecessary re-rendering.

- Allows React to update only the changed elements.



Rules for choosing keys:



- Keys must be unique.

- Prefer database IDs or unique identifiers.

- Avoid duplicate keys.

- Avoid using array indexes when the list changes dynamically.



---



# 4. Spread Operator (...service)



Instead of passing every property individually,



```tsx

<ShowServices

    id={service.id}

    serviceName={service.serviceName}

    description={service.description}

    price={service.price}

    available={service.available}

/>

```



I used the spread operator:



```tsx

<ShowServices {...service} />

```



The spread operator automatically passes every property of the object as props, reducing repetitive code and making components cleaner.



---



# 5. Conditional Rendering



Conditional rendering allows React to display different UI elements based on conditions.



Instead of always displaying the same content, React evaluates a condition and renders different output accordingly.



Example:



```tsx

<p>

  {available ? "Status: Available ✅" : "Status: Not Available ❌"}

</p>

```



Working:



- If `available` is `true`, React displays:



```

Status: Available ✅

```



- If `available` is `false`, React displays:



```

Status: Not Available ❌

```



This improves user experience by displaying meaningful information instead of boolean values.



---



# 6. Default Parameter Values



Some services did not initially contain the `available` property.



To handle this safely, I used a default parameter value.



Example:



```tsx

function ShowServices({

    serviceName,

    description,

    price,

    available = true,

}: ServiceProps)

```



If `available` is not provided,



React automatically assigns:



```tsx

available = true

```



This prevents undefined values and makes the component more reliable.



---



# 7. Practical Implementation



During today's practice, I enhanced the existing Cycle Susa project.



### Services Component



Implemented:



- Created an array of service objects.

- Stored service details inside objects.

- Rendered services dynamically using `map()`.

- Passed data using the spread operator.

- Used reusable `ServiceCard` components.

- Displayed availability using conditional rendering.



### ServiceCard Component



Displayed:



- Service Name

- Description

- Price

- Availability Status



Used conditional rendering to show user-friendly status messages instead of boolean values.



---



# 8. Concepts Understood



Today I gained a clear understanding of:



- Arrays of objects.

- Dynamic UI generation.

- JavaScript `map()` function.

- Rendering lists in React.

- Importance of unique keys.

- Spread operator (`...object`).

- Conditional rendering.

- Ternary operator.

- Component reusability.

- Props passing.



---



# 9. Mistakes I Made



### Mistake 1



Stored boolean values as strings.



Incorrect:



```tsx

available: "true"

```



Correct:



```tsx

available: true

```



Boolean values should not be enclosed in quotation marks.



---



### Mistake 2



Forgot to include the `price` property in one service object.



Since `price` was required in the type definition, every service object must contain a numeric price.



---



### Mistake 3



Displayed the boolean value directly.



Initially:



```tsx

Available true

```



Improved using conditional rendering:



```tsx

Status: Available ✅

```



This provides a better user experience.



---



### Mistake 4



Some objects contained the `available` property while others did not.



To handle missing values safely, I learned how to use default parameter values.



---



### Mistake 5



Initially focused only on displaying data without understanding why React requires a `key`.



Later I understood that keys help React identify elements efficiently during updates and improve rendering performance.



---



# 10. Key Learning Outcomes



Today's learning helped me understand:



- Dynamic rendering in React.

- Efficient UI generation using arrays.

- JavaScript `map()` for rendering components.

- Why every rendered item requires a unique key.

- Conditional rendering using the ternary operator.

- Spread operator for cleaner prop passing.

- Creating reusable components.

- Handling missing values using default parameters.

- Writing cleaner and more maintainable React code.



---



# 11. Summary



Today's session strengthened my understanding of dynamic rendering in React. I learned how to store data in arrays of objects, render components efficiently using the `map()` method, and use unique keys to help React identify elements during updates. I also explored conditional rendering to display different UI content based on boolean conditions, making the application more interactive and user-friendly. By implementing these concepts in my Cycle Susa project, I gained practical experience in creating reusable components, passing props using the spread operator, and displaying dynamic content with clean and maintainable code. These concepts form an important foundation for upcoming React topics such as state management, API integration, filtering lists, searching, and CRUD operations.