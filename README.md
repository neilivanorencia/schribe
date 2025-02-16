<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD041 -->
<div align="center">
  <img src="public/icon.svg" alt="Schribe Logo" width="100" height="100" />
  <h1 align="center">Schribe</h1>
  <p align="center">Capture Ideas and Conquer Your Day</p>
</div>

<div align="center">
  <br />
  <img src="public/website-preview.png" alt="Schribe Demo" />
  <br /><br />
  <div>
    <img
      alt="Clerk"
      src="https://img.shields.io/badge/Clerk-%236C47FF?style=flat&logo=clerk"
    />
    <img
      alt="Next.js"
      src="https://img.shields.io/badge/Next.js-%23000000?logo=nextdotjs&logoColor=white"
    />
    <img
      alt="React"
      src="https://img.shields.io/badge/React-%230088CC?logo=react&logoColor=white"
    />
    <img
      alt="shadcn/ui"
      src="https://img.shields.io/badge/shadcn%2Fui-%23000000?logo=shadcnui&logoColor=white"
    />
    <img
      alt="Tailwind CSS"
      src="https://img.shields.io/badge/Tailwind%20CSS-%2306B6D4?logo=tailwindcss&logoColor=white"
    />
    <img
      alt="Typescript"
      src="https://img.shields.io/badge/Typescript-%233178C6?logo=typescript&logoColor=white"
    />
  </div>
</div>
<br />

Schribe is a minimalistic note-taking web application for capturing and organizing thoughts. It offers features such as nested documents, cover images, and public sharing capabilities. It incorporates modern, user-friendly text editing through a Blocknotes-powered slash menu to provide multiple text formatting options. It also uses Convex, which is a real-time database in order to ensure immediate data synchronization across connected clients, reflecting note updates instantaneously.

## Features

- **Dual Theme System** - Offers a dual theme system to accommodate user preferences and viewing environments. A cornsilk light theme provides a bright, aesthetically-looking interface suitable for well-lit conditions, while an indigo dark theme reduces eye strain in low-light settings.

<details>
  <summary>See screenshot</summary><br>
<img src="https://i.imgur.com/6h8ziFe.png" alt="Schribe Light Theme" />
<img src="https://i.imgur.com/yrDa7p7.png" alt="Schribe Dark Theme" />
</details>

- **Block-Based Content Architecture** - Powered by Blocknotes, the web application employs a block-based architecture that structures content into independent modules. This design allows for granular content manipulation to enable users to rearrange paragraphs, headings, and media. Editing and formatting blocks individually ensures an efficient workflow and maintains the structural integrity of the document throughout the writing process.

<details>
  <summary>See screenshot</summary><br>
<img src="https://i.imgur.com/d4AvxH3.png" alt="Schribe Block-Based Content Architecture" />
</details>

- **Text Formatting Palette** - Provides a comprehensive suite of text formatting options to enrich note composition. Users can structure content with three distinct heading levels, create organized lists using numbered and bulleted formats, manage tasks with checklists, and compose paragraphs. The inclusion of image embedding and emoji support further enhances expressive and visually engaging note-taking.

<details>
  <summary>See screenshot</summary><br>
<img src="https://i.imgur.com/eFkp9Rp.png" alt="Schribe Text Formatting Palette" />
</details>

- **Hierarchical Document Nesting** - To facilitate advanced organization, the web application supports nested documents. This feature enables users to establish hierarchical relationships between notes, categorizing topics and subtopics effectively. Nested documents contribute to a more structured and easily navigable knowledge base, particularly beneficial for extensive note collections.

<details>
  <summary>See screenshot</summary><br>
<img src="https://i.imgur.com/FVuacQf.png" alt="Schribe Hierarchical Document Nesting" />
</details>

- **Archive Note Management** - Incorporates an archive functionality to provide a safeguard for note deletion. Upon initial deletion, notes are moved to a trash archive, granting users a recovery period to reinstate notes if needed. This two-step deletion process offers an added layer of data protection to allow users to permanently remove notes from the archive at their discretion.

<details>
  <summary>See screenshot</summary><br>
<img src="https://i.imgur.com/cwr400L.png" alt="Schribe Archive Note Management" />
</details>

- **Public Note Dissemination via Links** - Enables users to share notes publicly through shareable links. This allows for easy distribution of information to make notes accessible to a wider audience without requiring recipients to have an account.

<details>
  <summary>See screenshot</summary><br>
<img src="https://i.imgur.com/JTjbBE4.png" alt="Schribe Public Note Dissemination" />
</details>

## Technology Stack

- **Clerk** - An authentication platform offering social, passwordless, and multi-factor login options, basic user management and more.
- **Next.js** - A powerful React framework used for building fast and optimized web applications.
- **React** - A JavaScript library made by Facebook primarily used for building user interfaces for web applications.
- **shadcn/ui** - A UI component library specifically designed for building user interfaces in web applications using React.
- **Tailwind CSS** - A utility-first CSS framework that allows for quick and flexible styling using predefined classes.
- **Typescript** - A strongly typed programming language that builds on JavaScript by adding static types.

## Project Structure

<details>
  <summary>See project structure here</summary>

```plaintext
└── 📁.vscode
    └── settings.json
└── 📁app
    └── 📁(landing-page)
        └── 📁_components
            └── discover.tsx
            └── example.tsx
            └── features.tsx
            └── footer.tsx
            └── header.tsx
            └── hero.tsx
            └── logo.tsx
            └── navigation-bar.tsx
        └── layout.tsx
        └── page.tsx
    └── 📁(main)
        └── 📁_components
            └── banner.tsx
            └── document-list.tsx
            └── item.tsx
            └── menu.tsx
            └── navigation-bar.tsx
            └── navigation.tsx
            └── publish.tsx
            └── title.tsx
            └── trash.tsx
            └── user-item.tsx
        └── 📁(routes)
            └── 📁documents
                └── 📁[documentId]
                    └── layout.tsx
                    └── page.tsx
                └── page.tsx
        └── layout.tsx
    └── 📁(public)
        └── 📁(routes)
            └── 📁preview
                └── 📁[documentId]
                    └── layout.tsx
                    └── page.tsx
        └── layout.tsx
    └── 📁api
        └── 📁edgestore
            └── 📁[...edgestore]
                └── route.ts
    └── 📁fonts
        └── GeistMonoVF.woff
        └── GeistVF.woff
    └── error.tsx
    └── globals.css
    └── layout.tsx
└── 📁components
    └── 📁modals
        └── confirm-delete.tsx
        └── confirm-restore.tsx
        └── cover-image-modal.tsx
        └── settings-modal.tsx
    └── 📁ui
        └── alert-dialog.tsx
        └── avatar.tsx
        └── button.tsx
        └── command.tsx
        └── dialog.tsx
        └── dropdown-menu.tsx
        └── input.tsx
        └── label.tsx
        └── popover.tsx
         └── skeleton.tsx
      └── sonner.tsx
    └── convex-provider.tsx
    └── cover.tsx
    └── editor.module.css
    └── editor.tsx
    └── emoji-picker.module.css
    └── emoji-picker.tsx
    └── modal-provider.tsx
    └── mode-toggle.tsx
    └── search-command.tsx
    └── single-image-dropdown.tsx
    └── theme-provider.tsx
    └── toolbar.tsx
    └── word-counter.tsx
└── 📁convex
    └── 📁_generated
        └── api.d.ts
        └── api.js
        └── dataModel.d.ts
        └── server.d.ts
        └── server.js
    └── auth.config.ts
    └── documents.ts
    └── schema.ts
└── 📁hooks
    └── use-cover-image.tsx
    └── use-origin.tsx
    └── use-search.tsx
    └── use-settings.tsx
└── 📁lib
    └── edgestore.ts
    └── utils.ts
└── 📁public
└── .eslintrc.json
└── .gitignore
└── components.json
└── LICENSE
└── next.config.mjs
└── package-lock.json
└── package.json
└── postcss.config.mjs
└── prettier.config.js
└── README.md
└── tailwind.config.ts
└── tsconfig.json
```

</details>

## Acknowledgment

Illustrations in this project were adapted from [Storyset](https://storyset.com/) under a Creative Commons license. Specific assets were modified to align with the project's theme.

## Contribution

This project is intended as a personal web project to learn and improve my personal skills when it comes to web development. But if you would like to suggest improvements or modifications, feel free to fork the repository and submit a pull request.

## License

Distributed under the [MIT License](https://opensource.org/license/mit). See `LICENSE` for more information.
