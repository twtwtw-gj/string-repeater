# String Repeater

A simple web application that repeats a string up to a specified character count.

**Built with Claude Artifacts** - This project was created using Claude's Artifacts feature for rapid prototyping and development.

## Features

- 🔄 Repeat any string to a target length
- 📋 One-click copy to clipboard
- 🎨 Clean, modern UI with Tailwind CSS
- ⚡ Fast and responsive
- 🔒 Client-side only (no data sent to servers)

## Use Cases

- Generate test data with repeated patterns
- Fill database fields to maximum length
- Create padding strings for alignment
- Generate placeholder text

## Demo

👉 **[Live Demo](https://twtwtw-gj-string-repeater.pages.dev/)**

## Usage

1. Enter the string you want to repeat
2. Specify the target character count
3. Click "生成" (Generate)
4. Copy the result with one click

### Example

- Input: `TestCode001`
- Target: `255` characters
- Result: `TestCode001TestCode001TestCode001...` (truncated at 255 characters)

## Installation

### Prerequisites

- Node.js (>= 20.19.0)
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/twtwtw-gj/string-repeater.git

# Navigate to the project directory
cd string-repeater

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

## Build

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **Lucide React** - Icons

## Development Process

This project was developed using [Claude](https://claude.ai/) Artifacts, which enabled rapid iteration and prototyping. The entire application was built through conversational programming, demonstrating the power of AI-assisted development.

## Project Structure

```
string-repeater/
├── src/
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── index.html            # HTML template
└── vite.config.ts        # Vite configuration
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amaging-future`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/amaging-future`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Claude](https://claude.ai/) Artifacts
- Inspired by the need for simple test data generation
- Powered by modern web technologies
