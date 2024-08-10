# React + TypeScript + Vite Template

Welcome to the **React + TypeScript + Vite** template! This project serves as a robust starting point for building modern web applications with the latest technologies and best practices.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Vite:** Fast and efficient build tool for modern web projects.
- **React 18:** Latest version of React with concurrent features.
- **TypeScript:** Strongly typed programming language for scalable and maintainable code.
- **State Management:** Utilizes `@tanstack/react-query` for efficient data fetching and caching.
- **Routing:** Managed by `react-router-dom` for declarative routing.
- **Animations:** Powered by `framer-motion` for smooth and interactive animations.
- **Form Validation:** Handled by `zod` for schema-based validation.
- **Styling:** Configured with Tailwind CSS and related utilities for rapid UI development.
- **HTTP Requests:** Managed by `axios` for promise-based HTTP requests.

## Getting Started

Follow these steps to get the project up and running on your local machine:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/MigCVA/vite-react-template-v2.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd your-repo-name
   ```

3. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

4. **Start the Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open in Browser**

   Visit `http://localhost:5173` to see the application in action.

## Project Structure

```bash
├── public
│   └── ...
├── src
│   ├── assets
│   └── ...
│   ├── components
│   │   └── ...
│   ├── lib
│   │   └── ...
│   ├── pages
│   │   └── ...
│   ├── App.tsx
│   ├── config.ts
│   ├── env.ts
│   ├── index.css
│   ├── main.tsx
│   └── routes.tsx
├── ...
```

- **public/**: Static assets.
- **src/**: Source code.
  - **assets/**: Static resources such as images and fonts.
  - **components/**: Reusable React components.
  - **lib/**: Libraries and reusable modules.
  - **pages/**: Page components for routing.
  - **App.tsx**: Root component of the application.
  - **config.ts**: Global project configurations.
  - **env.ts**: Environment variables configurations.
  - **index.css**: Global styles.
  - **main.tsx**: Application entry point.
  - **routes.tsx**: Application routing configuration.
- **...**: Other project files and directories.

## Dependencies

Below is a list of the main dependencies used in this project:

- **[@tanstack/react-query](https://tanstack.com/query/v5):** Data fetching and caching.
- **[axios](https://github.com/axios/axios):** Promise-based HTTP client.
- **[class-variance-authority](https://github.com/joe-bell/class-variance-authority):** Utility for managing className variants.
- **[clsx](https://github.com/lukeed/clsx):** Utility for constructing className strings conditionally.
- **[framer-motion](https://www.framer.com/motion/):** Declarative animations.
- **[localforage](https://github.com/localForage/localForage):** Offline storage.
- **[lucide-react](https://lucide.dev/):** Icon library.
- **[match-sorter](https://github.com/kentcdodds/match-sorter):** Simple, expected, and deterministic best-match sorting of an array.
- **[react](https://reactjs.org/):** UI library.
- **[react-dom](https://reactjs.org/docs/react-dom.html):** React DOM renderer.
- **[react-helmet-async](https://github.com/staylor/react-helmet-async):** Manage changes to the document head.
- **[react-router-dom](https://reactrouter.com/):** Declarative routing.
- **[sonner](https://github.com/emilkowalski/sonner):** Notification system.
- **[tailwindcss](https://tailwindcss.com/):** Utility-first CSS framework.
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge):** Merge Tailwind CSS classes.
- **[tailwindcss-animate](https://github.com/matteing/tailwindcss-animate):** Tailwind CSS plugin for animations.
- **[zod](https://github.com/colinhacks/zod):** TypeScript-first schema validation.

### Optional Dependencies

- **[shadcn-ui](https://github.com/shadcn-ui/ui):** A component library built on top of Tailwind CSS for building modern and accessible user interfaces.

## Available Scripts

In the project directory, you can run:

- **`pnpm dev`**: Starts the development server.
- **`pnpm build`**: Builds the app for production.
- **`pnpm preview`**: Previews the production build.
- **`pnpm lint`**: Runs ESLint to check for linting errors.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**
2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit Your Changes**

   ```bash
   git commit -m 'Add Your Feature'
   ```

4. **Push to the Branch**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a Pull Request**

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy coding! 🎉