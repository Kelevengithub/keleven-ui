# Keleven UI

**A Dynamic, State-Driven UI Framework with Design Tokens and Plugin Support**

[](https://www.google.com/search?q=LICENSE)

-----

## ℹ️ Overview

Keleven UI is a lightweight, customizable, and state-driven JavaScript framework meticulously crafted to streamline dynamic user interface development. It leverages native Web Components and efficient dynamic CSS injection, empowering developers to construct responsive and interactive components through a declarative configuration approach.

-----

## ✨ Key Features

  * **Dynamic CSS Generation:** Features on-the-fly CSS generation with optional minification for optimized performance.
  * **State-Based UI Rendering:** Facilitates seamless UI transitions and rendering based on defined states.
  * **Design Token Management:** Centralized management of design tokens through CSS custom properties, ensuring consistent styling.
  * **Component-Based Architecture:** Built upon native Web Components, promoting modularity and reusability.
  * **Responsive Design Support:** Includes built-in capabilities for media queries and dark mode, enabling adaptive interfaces.
  * **Lightweight & Framework-Agnostic:** Designed for minimal footprint and seamless integration with any existing JavaScript ecosystem.
  * **Extensible Plugin System:** Easily extendable through a robust plugin architecture and custom component registration.

-----

## 📂 Project Structure

```
keleven-ui/
├── dist/
│   ├── keleven-ui.min.js       # Core framework (minified)
│   └── keleven-ui.bundle.js    # bundled framework scripts (minified)
├── src/                        # (Optional) Source files
├── README.md
├── package.json
└── LICENSE
```

-----

## 🌐 CDN Usage (via jsDelivr)

### Core Framework:

```html
<script src="https://cdn.jsdelivr.net/npm/keleven-ui@2.2.3/dist/keleven-ui.min.js"></script>
```

### Initialization Example:

```html
<script src="https://cdn.jsdelivr.net/npm/keleven-ui@2.2.3/dist/keleven-ui.bundle.js"></script>
```

Alternatively, you can directly link from GitHub:

```html
<script src="https://cdn.jsdelivr.net/gh/Kelevengithub/keleven-ui@latest/dist/keleven-ui.min.js"></script>
```

-----

## 📦 Installation (npm)

```bash
npm install keleven-ui
```

-----

## 💡 Basic Usage Example

Integrate Keleven UI into your HTML file as follows:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Keleven UI Example</title>

    <!-- Load the Keleven ui bundled framework -->
    <script src="https://cdn.jsdelivr.net/npm/keleven-ui/dist/keleven-ui.bundle.js"></script>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // Override existing options
            Keleven.debug = true;   // Enable debug logging
            Keleven.minify = false; // Use pretty CSS output

            // Define global design tokens
            Keleven.defineTokens({
                primary: '#3a86ff',
                secondary: '#ef233c',
                radius: '8px',
                wheat: '#EAD2AC',
            });

            // Demonstrating how to register a custom Web Component (not instantiated in this document)
            class MyElement extends KelevenUI.Component {}
            Keleven.register('k-element', MyElement);

            // Initialize the framework after configuration
            Keleven.init();
        });
    </script>

    <style>
        body {
            font-family: 'Inter', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background-color: #edf2f4;
        }
    </style>
</head>
<body>
    <div 
        configure="{ 
            initialState: 'default', 
            duration: '0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
            states: {
                default: { 
                    bg: '$primary', 
                    text: '#edf6f9', 
                    radius: '$radius', 
                    p: '20px', 
                    m: '20px',
                    shadow: '0 4px 6px rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '200px',
                    minHeight: '100px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                },
                hover: { 
                    bg: '$secondary', 
                    text: 'white',
                    radius: '$radius', 
                    p: '20px', 
                    m: '20px', 
                    minWidth: '200px',
                    minHeight: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    scale: '1.05', 
                    cursor: 'pointer', 
                    shadow: '0 6px 12px rgba(0,0,0,0.2)' 
                }
            },
            transitions: { 
                'default->hover': 'on:mouseover', 
                'hover->default': 'on:mouseout' 
            },
            media: {
                '(max-width: 600px)': {
                    states: { default: { bg: '$wheat', text: 'black' } }
                }
            },
            dark: {
                default: { bg: '#333', text: 'white' },
                hover: { bg: '#555', text: 'lightgray' }
            }
        }">
        Hover over me!
    </div>
</body>
</html>
```

-----

## ⚙️ Configuration Example

Utilize the `configure` attribute directly on any HTML element to declaratively define its states and associated styles.

```html
<div configure="{ 
    initialState: 'default', 
    states: {
        default: { bg: '$primary', text: 'white', radius: '$radius' },
        hover: { bg: '$secondary', text: 'black' }
    },
    transitions: { 'default->hover': 'on:mouseover', 'hover->default': 'on:mouseout' }
}">
    Hover over me
</div>
```

-----

## 📚 API Overview

### `new KelevenUI(options)`

Initializes a new instance of the Keleven UI framework.

| Option | Type | Default | Description |
| :----- | :--- | :------ | :---------- |
| `debug` | `Boolean` | `false` | Enables verbose debug logs in the console. |
| `minify` | `Boolean` | `false` | Specifies whether generated CSS should be minified. |

### `keleven.init()`

Initializes the framework, injects global styles, and applies configurations to all elements with the `[configure]` attribute. This method should be invoked after the `DOMContentLoaded` event.

### `keleven.defineTokens(tokens)`

Registers global design tokens, which are then accessible as CSS variables (`var(--tokenName)`) within your configurations.

**Example:**

```javascript
keleven.defineTokens({ 
    primary: '#4caf50', 
    secondary: '#ff9800' 
});
```

### `keleven.register(tagName, componentClass)`

Registers a custom Web Component with the browser. This allows you to extend Keleven UI's capabilities with your own reusable components.

**Example:**

```javascript
keleven.register('k-element', KelevenUI.Component);
```

-----

## 🌓 Dark Mode & Media Queries Support

Keleven UI seamlessly supports automatic dark mode overrides and responsive designs through its flexible configuration options.

**Example Configuration Snippet:**

```javascript
{
    // ... other configurations
    media: {
        '(max-width: 600px)': {
            states: { default: { bg: 'lightblue' } }
        }
    },
    dark: {
        default: { bg: '#333', text: 'white' }
    }
}
```

-----

## 🧩 Extending with Plugins

The framework is designed for extensibility. You can extend the base `KelevenComponent` class or create entirely new custom components and register them using `keleven.register()`.

-----

## ⚖️ License

This project is licensed under the MIT License. See the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.

-----

## 🧑‍💻 Author & Developer

**Author:** Keleven Studio
**Developer:** Kaustav Mohan Bhuyan
GitHub: [Kelevengithub](https://www.google.com/search?q=https://github.com/Kelevengithub)

-----

## 🔗 Links

  * **Repository:** [https://github.com/Kelevengithub/keleven-ui](https://github.com/Kelevengithub/keleven-ui)
  * **CDN (jsDelivr):** [https://cdn.jsdelivr.net/npm/keleven-ui/](https://cdn.jsdelivr.net/npm/keleven-ui/)

-----

## 📜 Changelog

### `v2.2.3` (Latest)

  * Added a `minify` option to the constructor for cleaner CSS output.
  * Introduced dynamically generated class names (`k-[random_string]`) for improved uniqueness and reduced potential conflicts.
  * Enhanced state management and CSS rule generation logic.
  * Improved support for media queries and dark mode.
  * Optimized global style injection mechanism.

### `v2.1.8`

  * Initial public release of Keleven UI.
  * Core framework with dynamic state-driven styling capabilities.
  * Included support for design tokens and component registration.

-----

## 🤝 Contributing

We warmly welcome contributions from the community\! To contribute, please follow these guidelines:

1.  **Fork** the repository.
2.  Create a new branch for your feature or bug fix:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3.  Implement your changes.
4.  Commit your changes with a clear and descriptive message.
5.  Push your branch to your forked repository.
6.  Submit a **Pull Request (PR)** to the main repository.

-----

## 💻 Development Setup

To set up the development environment:

1.  Install project dependencies:
    ```bash
    npm install
    ```
2.  Build the distribution files:
    ```bash
    npm run build
    ```

-----

## 📝 Contribution Guidelines

  * Adhere to the existing code style and conventions.
  * Write clear, concise, and descriptive commit messages.
  * Provide comprehensive documentation for any new features or significant changes.
  * Thoroughly test your changes before submitting a pull request.

-----

## 🌟 Empowering Your Development Journey

Thank you for exploring Keleven UI. We are committed to fostering an innovative and collaborative environment, and we believe this framework will empower you to build exceptional user interfaces with elegance and efficiency. We look forward to seeing the incredible projects you create and welcome your valuable contributions to our growing community. Happy coding\!