# Hero IO

## 📱 App Name: Hero IO

### 📝 Description
Hero IO is a responsive app showcase platform where users can explore, install, and manage a collection of mobile applications. The app displays a variety of applications with detailed information, including ratings, download count, and reviews. Users can search and filter apps, view app details, and install them directly from the app.

Key features include:
- A **responsive layout** for a seamless experience across all devices.
- A **searchable and sortable app catalog**.
- **Live search functionality** that filters apps by title as the user types.
- **App installation** with a local storage feature to track installed apps.
- **Detailed app information** including ratings, reviews, and installation status.
- **Interactive charts** to visualize app ratings and reviews.
- Custom **error pages** for invalid routes, and a **loading animation** during navigation and search operations.
- **Deployment** on Cloudflare/Netlify/Vercel for a reliable production environment.

This app is designed to mimic a modern app store experience while providing insights into popular mobile applications.

---

## 🔧 Technologies
- **React.js** - For building the user interface and managing the app’s components.
- **React Router** - To handle routing between different pages (Home, App Details, My Installations).
- **Recharts** - For implementing responsive charts to visualize app review data.
- **CSS3/SCSS** - For styling the components and making the app responsive on all devices.
- **LocalStorage** - To save and manage the installation state of apps.
- **Axios** - For handling API calls (if necessary for fetching data).
- **Vercel/Netlify/Cloudflare** - For deploying the app to the web.

---

## 🚀 Features
### 1. **Responsive Design**
   - Ensures a seamless experience on all screen sizes (Desktop, Tablet, Mobile).
   
### 2. **App Showcase**
   - Displays a list of apps with detailed information: ratings, download count, reviews, etc.
   - Interactive app cards to view details and navigate to app installation.

### 3. **Live Search & Filter**
   - A **search bar** with **live filtering** of apps based on the title, allowing users to easily find what they're looking for.

### 4. **App Installation**
   - **Install** functionality using LocalStorage to track installed apps.
   - Button toggles between **Install** and **Installed** states.
   - **Uninstall** feature for removing apps from LocalStorage and UI.

### 5. **Chart Visualization**
   - Interactive **Recharts** to display app ratings and reviews distribution.

### 6. **App Details Page**
   - Detailed app page showing app image, title, reviews, and an install button.
   - Displays success message with toast when an app is installed.

### 7. **Error Handling**
   - Custom **404 error page** for invalid routes.
   - **Loading animation** during search and page navigation.

### 8. **My Installations**
   - View and manage installed apps on a separate page.
   - Option to uninstall apps with a relevant success message.

### 9. **Sort by Downloads**
   - Dropdown to sort apps by download count (High-Low / Low-High).

---
