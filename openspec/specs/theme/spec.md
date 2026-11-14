# theme Specification

## Purpose
Light and dark color theme. Code: `src/components/theme-provider/ThemeProvider.js`, `src/components/UI/theme-toggle/ThemeToggle.jsx`, CSS variables in `src/app/globals.css`.

## Requirements

### Requirement: Initial theme
The site SHALL use the theme saved in `localStorage` key `theme` (`"light"` or `"dark"`). If nothing is saved, it SHALL follow the operating system setting (`prefers-color-scheme`).

#### Scenario: First visit with dark OS
- **WHEN** a visitor with a dark OS theme opens the site for the first time
- **THEN** the `<html>` element gets class `dark` and dark colors are used

### Requirement: Theme toggle
The header SHALL have a button that switches between light and dark, saves the choice in `localStorage`, and sets class `dark` or `light` on `<html>`.

#### Scenario: User switches to light
- **WHEN** the theme is dark and the visitor clicks the toggle
- **THEN** class `light` is set, `localStorage.theme` is `"light"`, and the choice stays after reload

### Requirement: Follow OS changes only without a saved choice
While no theme is saved, the site SHALL follow live changes of the OS theme. After the visitor picks a theme, OS changes SHALL be ignored.

#### Scenario: OS changes after a saved choice
- **WHEN** `localStorage.theme` is set and the OS theme changes
- **THEN** the site theme does not change
