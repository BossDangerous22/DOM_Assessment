// Get reference to the main tag
const main = document.querySelector('main');

// Define three jokes
const joke1 = "Why did the developer go broke? Because he used up all his cache.";
const joke2 = "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.";
const joke3 = "Why did the programmer quit his job? Because he didn't get arrays!";

// Define HTML template with jokes
const jokesTemplate = `
    <h2>My Jokes</h2>
    <ul>
        <li>${joke1}</li>
        <li>${joke2}</li>
        <li>${joke3}</li>
    </ul>
`;

// Put the template inside the main tag
main.innerHTML = jokesTemplate;

// Create a paragraph tag
const paragraph = document.createElement('p');

// Add text content to the paragraph
paragraph.textContent = "That's all folks!";

// Append the paragraph tag to the body
document.body.appendChild(paragraph);
