# Chrome Extension Boilerplate ⚡

A modern foundation for Chrome extensions with Webpack 5, Tailwind CSS 3, and Manifest V3.

## Features

- 🛠 Webpack 5 + Babel
- 🎨 [Tailwind CSS](https://tailwindcss.com/) + PostCSS
- 📦 Manifest V3 Ready
- 📄 HTML/JS/CSS Hot Reloading
- ⚡ Production Optimization
- 📦 Auto ZIP Packaging
- 📝 Code Formatter with [Prettier](https://prettier.io/)
- 🎁 Automatic changelog generation with Semantic Release
- 📏 Linter with [ESLint](https://eslint.org/) 

## Requirements

- Node.js 22+ and npm

## Quick Start

1. **Getting started**
   Run the following command on your local environment:

```bash
git clone --depth=1 https://github.com/justintieu/chrome-extension-boilerplate.git
cd chrome-extension-boilerplate
npm install
```

2. **Build Project**

```bash
npm run build
```

3. **Load in Chrome**

- Go to chrome://extensions
- Enable "Developer mode" (toggle top-right)
- Click "Load unpacked"
- Select the dist folder

## Project Structure

```
├── README.md           # README file
├── .github             # GitHub folder
├── public/             # Static assets
│   ├── *.html          # Extension pages
│   └── icons/          # Extension icons
├── scripts             # Scripts folder
├── src/
│   ├── background.js   # Service worker
│   ├── content.js      # Content scripts
│   ├── popup.js        # Popup UI
│   ├── options.js      # Settings page
│   └── styles.js       # Tailwind CSS
├── webpack.config.js   # Build configuration
├── tailwind.config.js  # Tailwind settings
├── postcss.config.js   # PostCSS plugins
└── manifest.json       # Extension manifest
```

## Scripts

| Command            | Description                       |
| ------------------ | --------------------------------- |
| `npm run build`    | Creates production build          |
| `npm run package`  | Create zip from production build  |
| `npm run release`  | Runs build and package commands   |
| `npm run watch`    | Development build with watch mode |
| `npm run prettier` | Format all files                  |

## Customization

1. **Update Manifest**
   Edit `manifest.json` based on your needs:

```
{
  "name": "Your Extension",
  "description": "Custom description",
  "version": "1.0.0",
  "action": {
    "default_popup": "popup.html"
  }
}
```

2. **Add/Remove Pages**

- Create new HTML in `public/`
- Add JS entry in `webpack.config.js`
- Update manifest permissions

3. **Modify Styles**
   Edit Tailwind config:

```js
// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            colors: {
                primary: "#3b82f6",
            },
        },
    },
};
```

## Packaging

1. Build production files and create ZIP package

```bash
npm run release
```

2. Upload `extension.zip` to [Chrome Web Store Dashboard](https://chrome.google.com/webstore/developer/dashboard)

## FAQ

Q: Styles not updating?

- Restart Webpack dev server
- Check Tailwind content config

Q: Extension not loading?

- Reload extension in `chrome://extensions`
- Check browser console (Ctrl+Shift+J)

## Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have any questions or find a bug. Totally open to suggestions and improvements.

## License

Licensed under the MIT License, Copyright © 2025
See [LICENSE](https://github.com/justintieu/chrome-extension-boilerplate/blob/main/LICENSE) for more information.

Found this useful? Please star ⭐ the repo!
