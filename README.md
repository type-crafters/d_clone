# Whisper

**Project name**: Whisper

**Code**: whisper, d_clone

## Table of Contents


| Contents |
| --- |
| [Project Overview](#project-overview) |
| [Features](#features) |
| [Tech Stack](#tech-stack) |
| [Getting Started](#getting-started) |
| [Development](#development) |

## Project Overview

Whisper is a real time chat application that features direct messaging, friend lists, workgroups, and file sharing.

## Features

- User Creation: Users may create accounts to use the application
- Profile managemeng: Users may edit their profile picture, description, preferences, color scheme, and privacy and visibility settings. 
- Friend lists: Users may find friends by username, etc., and send friend requests, which, when accepted, will add the user to their friend list for further action.
- Direct messaging: Users may message their friends using private channels.
- Workgroups: Workgroups work by joining different users together in a collection of text and file channels that workgroup administrators may manage as needed, in order to provide a streamlined way to share information 
- Channels: Channel are the main method of communication between users and in workgroups. Text channels can be used to send text, images and files, while file channels offer an organized way to access images and files within workgroups. 

## Tech Stack

- Svelte
- Node.js
- Express
- MongoDB
- Docker

## Getting Started

In order to get a copy of this application running locally, first clone the repository, then relocate to the repository root:

```shell

git clone https://github.com/type-crafters/d_clone.git
cd d_clone

```

Restore all the necessary Node modules using your package manager of choice:

- For **npm** users:
```shell
npm install
```

- For **yarn** users:
```shell
yarn install
```

Use the included `start` script in the project's `package.json`, or the `start:dev` option to watch for file changes.

- For **npm** users:
```shell
npm run start
npm run start:dev
```

- For **yarn** users:
```shell
yarn run start
yarn run start:dev
```

## Development

This project is still in early development. Several features are currently being developed, and several more are staged for future development.

### Currently in development

- User Creation
- User Login
- User Profile (preferences)

### Staged for development

- Friend lists
- Friend requests
- Direct messaging