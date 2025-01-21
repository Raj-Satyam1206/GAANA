# GAANA-Music Player

GAANA-Music Player is a web-based music player project that I created while learning the fundamentals of JavaScript. This project includes features such as user authentication, a visually appealing welcome page, and functional music controls.

## Features

### User Authentication

- A **Sign Up / Sign In** page with backend authentication handled by PHP.
- User data is securely stored and retrieved using PHP and database connectivity.

### Music Library

- A manually curated list of songs is available (no external APIs were used).
- Songs are displayed and playable directly on the welcome page.

### Music Player Functionality

- **Play** and **Pause** buttons for controlling the music.
- **Download** option for downloading songs.
- **Progress Bar**:
  - Shows the total length of the music.
  - Displays the current duration of the music being played.
- **Volume Control**:
  - Adjustable slider to control the sound volume.

### Visual Design

- The welcome page is styled with **CSS** to provide a visually appealing user interface.
- Scrollbars are implemented for smooth navigation.

## Technologies Used

- **Frontend**:
  - HTML
  - CSS
  - JavaScript
- **Backend**:
  - PHP for authentication and database connection.
- **Database**:
  - MySQL for storing user data.

## Setup and Installation

### Prerequisites

1. Install a local server environment like [XAMPP](https://www.apachefriends.org/index.html).
2. Clone the repository:
   ```bash
   git clone https://github.com/Raj-Satyam1206/GAANA.git
   ```
3. Start Apache and MySQL from the XAMPP Control Panel.

### Steps

1. Place the project folder in the `htdocs` directory of your XAMPP installation.
2. Import the database:
   - Open `phpMyAdmin`.
   - Create a new database (e.g., `gaana_db`).
   - Import the provided SQL file into the database.
3. Update the `db_connect.php` file with your database credentials.
4. Open the project in your browser:
   ```
   http://localhost/GAANA
   ```

## Usage

1. Navigate to the Sign Up / Sign In page.
2. Create a new account or log in with an existing account.
3. After logging in, you will be redirected to the welcome page.
4. Use the music player controls to play, pause, or download songs.
5. Adjust the volume using the slider and track the music progress with the progress bar.

## Project Highlights

- Learned and implemented core JavaScript functionalities.
- Backend authentication using PHP for a dynamic user experience.
- Styled the application to make it visually appealing and user-friendly.
- Focused on creating a fully functional music player with basic yet powerful features.

## Future Improvements

- Integrate a third-party music API for a dynamic and larger song library.
- Implement user-specific playlists.
- Add advanced authentication mechanisms such as password reset functionality.
- Optimize the UI for responsiveness on various screen sizes.

Thank you for checking out my project! Feel free to contribute or suggest improvements by creating an issue or a pull request.
