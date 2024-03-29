# Meme Generator

This was a fun app to build in React! 
<br>It allows users to create memes by overlaying text on a choice of images sourced from the Imgflip API.
<br>
<br>Please visit the live site for [Meme Generator](https://corina-react-meme-generator.netlify.app/) and create your own meme!
<br>

<img width="360" alt="Toy Story characters Woody and Buzz. The top caption is Woody, look the weekend. The bottom caption is where" src="https://github.com/CorinaMurg/meme-generator/assets/115652409/1ed51500-7810-44ca-9d96-d66d1744245d">
<br>

## Key technical aspects 
The Meme Generator was my first React project using 
- event listeners
- state
- conditional rendering
- forms
- side effects

Here's a breakdown of my approach:

1. **React Components**: I built it using functional components. I used components like `Header`, `Meme` to structure the app, and hooks to manage the state and side effects within these components.

2. **State Management**: I used the `useState` hook for managing state within the `Meme` component. It holds the state for the top and bottom texts typed by the user, as well as the URL of the randomly selected image.

3. **API Fetch**: The `useEffect` hook triggers an API request to the Imgflip API on the initial render of the `Meme` component. The response, which contains an array of meme images, is stored in state using the `setAllMemes` function.

4. **Dynamic Meme Generation**: The app allows the user to generate a new meme by selecting a random image from the array of memes fetched from the Imgflip API. The URL of the new image is stored in state, which triggers a re-render of the component, displaying the new image to the user.

5. **Input Focus Management**: When building an app, I pay attention to focus management in order to enhance usability for keyboard-only users. For this reason, I employed here the `useRef` hook to help manage focus within the app. After a new image is selected, focus is returned to the first input field. This enhances accessibility and usability by guiding the user's focus through the app in a logical order.

6. **Event Handling**: I created an `onChange` handler on the input fields to update the meme text in real time as the user types. I also created a click event handler on the button to trigger the generation of a new meme image.

7. **CSS Styling**: I used a grid display to layout form elements in a visually appealing and logical manner. I included visual feedback for the active element using the `:focus` pseudo-class, to aid navigation for keyboard users. 

8. **BEM Naming Convention**: In order to create a more maintainable code, I used the Block Element Modifier (BEM) methodology for CSS class naming. For example, in the class name 'form--input', 'form' is the Block, and 'input' is the Element. I find that BEM naming makes the relationship between the HTML and CSS clear and consistent, and it helps me in both development and debugging processes. 





