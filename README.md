# Water My Plants

Deployed on [Netlify](https://water-myplants-frontend.netlify.app).

---

## Frontend

- Users can login / signup
- Users can create plants to add to the database
- Users can edit existing plants in the database
- Users can delete existing plants in the database
- Users can update their phone number and password

## Backend

Found [here](https://github.com/LambdaBuildWeekWaterMyPlants/watermyplants-backend).

---

### Frontend Files

#### src/App.js

Main entrypoint for React application.

#### src/pages/\*

React component for each page rendered using react-router-dom.
Each page component handles its own API calls.

#### src/components/\*

Components and Styled-Components used to build out the UI.

#### src/hooks/\*

A couple basic custom hooks to help with UI.

#### src/theme

Styled-components theme object.

#### src/utils/\*

Helper functions for authenticated API calls and form validation.

#### src/validation

Form validation schemas.

#### src/config

Site-wite constants such as title and repository URL.

#### src/static/\*

Static files such as images.

---
