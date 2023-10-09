# My Frontend Application

This repository contains the frontend code for Song List. Due to my deployment setup using JSONPlaceholder, a fake online REST API for testing, I am unable to perform real CRUD operations with permanent data storage on the backend. JSONPlaceholder does not store data permanently and is meant for development and testing purposes only. Any data changes made to JSONPlaceholder will not persist after a page refresh or server restart.

## Purpose

The primary purpose of this repository is to showcase how CRUD operations can be implemented in a frontend application using state management. It serves as a demonstration to illustrate how the application would work when deployed with a backend that supports permanent data storage.

## Deployment

This frontend application is deployed on [Vercel](https://songs-list.vercel.app/) for demonstration purposes only. While the application allows you to perform CRUD (Create, Read, Update, Delete) operations on songs, there is an important limitation to keep in mind.

**Data Reset on Refresh:** Please note that the data will reset to its original state when the page is refreshed. This limitation is due to the absence of a real backend server with permanent data storage.

**Why No Backend?** The decision not to deploy this application with a backend server that provides permanent data storage is primarily because of the lack of free hosting options for backend services. While the frontend demonstrates the functionality of CRUD operations, implementing a backend with permanent data storage would require additional hosting and maintenance costs.

Feel free to explore and interact with the application to understand how it functions. If you intend to use it as a starting point for a real-world project, consider implementing a backend server to ensure data persistence beyond page refreshes.

## Technologies Used

This frontend web application is built using the following technologies:

- **ReactJS:** A JavaScript library for building user interfaces, used as the foundation of this application's UI.

- **Redux Toolkit:** A state management library for React applications. It is used to manage the state of the app and handle data flow efficiently.

- **Redux-Saga:** A middleware library for Redux that helps manage side effects, such as making asynchronous API calls, in a more organized way.

- **Emotion:** A popular CSS-in-JS library for styling React components. Emotion allows you to write CSS styles using JavaScript for a more dynamic and component-based approach to styling.

- **Styled System:** A library for building themeable, responsive UI components in React. It works well with Emotion to create consistent and responsive designs.

These technologies are combined to create a robust and interactive frontend application that can handle data flow, asynchronous operations, and styling effectively.

## Local Development

To run this frontend application locally and experiment with CRUD operations, follow these steps:

1. Clone this repository to your local machine.
2. Install the necessary dependencies by running

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
