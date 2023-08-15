// Function to initialize the necessary CSS styles for the extension's UI elements.
const initStyles = () => {
  // Create a <style> element to hold the CSS styles.
  const styleElement = document.createElement("style");
  // Set the CSS styles for the extension's UI elements.
  styleElement.textContent = `
    .extension-delete {
        position: fixed;
        right: 20px;
        bottom: 20px;
    }
    .extension-delete__button {
        position: relative;
        display: inline-block;
        background: #5b98d7;
        background: linear-gradient(90deg, #0162c8, #55e7fc);
        text-decoration: none;
        text-transform: uppercase;
        padding: 12px 36px;
        border-radius: 20px;
        color: #fff;
        text-align: center;
        overflow: hidden;
        border: none;
        cursor: pointer;
    }
    .extension-delete__button span {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        font-weight: 600;
        color: #fff;
    }
    .extension-delete__messages {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        height: 20px;
    }
    .extension-delete__message {
        display: none;
        font-family: 'Roboto', sans-serif
        font-size: 16px;
        color: #;
        text-align: center;
        color: #87be51;
        margin: 0;
        padding: 0;
    }
`;
  // Append the style element to the <head> of the document.
  document.head.appendChild(styleElement);
};

// Function to render the extension's UI elements.
const renderElements = () => {
  // Create a container element for the extension's UI elements.
  const container = document.createElement("div");
  container.id = "extension-delete-search-result";
  // Append the container to the <body> of the document.
  document.body.appendChild(container);
  // Define the HTML markup for the extension's UI elements.
  const markup = `
    <div class="extension-delete">
        <div class="extension-delete__actions">
            <button class="extension-delete__button">
                <span>Delete first result</span>
            </button>
        </div>
        <div class="extension-delete__messages">
            <p class="extension-delete__message extension-delete__message--info">Blocks Not Found</p>
        </div>
    </div>
    `;
  // Set the inner HTML of the container with the defined markup.
  container.innerHTML = markup;
};

// Function to initialize event listeners for the extension's UI interactions.
const initEvents = () => {
  // Select the elements.
  const button = document.querySelector(".extension-delete__button");
  const infoMessage = document.querySelector(
    ".extension-delete__message--info"
  );

  // Add a click event listener to the delete button.
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const allResults = document.querySelectorAll(".MjjYud");

    // If there are no results, display the info message and exit.
    if (!allResults.length) {
      infoMessage.style.display = "block";
      return;
    }

    infoMessage.style.display = "none";

    allResults[0].remove();
  });
};

// Main function to initialize the extension.
const main = () => {
  initStyles();
  renderElements();
  initEvents();
};

// Call the main function to start the extension.
main();
