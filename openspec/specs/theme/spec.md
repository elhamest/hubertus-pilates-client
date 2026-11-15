# theme Specification

## Purpose
Light and dark color theme. Code: `src/components/theme-provider/ThemeProvider.js` (`THEME_SCRIPT`), `src/components/UI/theme-toggle/ThemeToggle.jsx`, `src/app/layout.js`, CSS variables in `src/app/globals.css`.

## Requirements

### Requirement: Right theme before first paint
A small script in `<head>` (`THEME_SCRIPT`) SHALL set class `dark` or `light` on `<html>` before the page is shown: the theme saved in `localStorage.theme`, or, with nothing saved, the system theme (`prefers-color-scheme`). React SHALL read this class and not guess it.

#### Scenario: Reload with a saved choice
- **WHEN** the user picked dark and reloads the page
- **THEN** the page is dark from the first paint, with no flash, and the toggle shows "light mode"

### Requirement: Theme toggle
The header SHALL have a button that switches between light and dark, saves the choice in `localStorage.theme`, and sets class `dark` or `light` on `<html>`.

#### Scenario: User switches to light
- **WHEN** the theme is dark and the visitor clicks the toggle
- **THEN** class `light` is set, `localStorage.theme` is `"light"`, and the choice stays after reload

### Requirement: The user's choice wins everywhere
All colors SHALL follow the `.dark` / `.light` class, not the `prefers-color-scheme` media query, so every part of the page follows the user's choice.

#### Scenario: Light choice on a dark system
- **WHEN** the system is dark and the user picked light
- **THEN** the gallery, slider and titles are light too

### Requirement: Follow the system only without a saved choice
While no theme is saved, the site SHALL follow live changes of the system theme. After the visitor picks a theme, system changes SHALL be ignored.

#### Scenario: System changes after a saved choice
- **WHEN** `localStorage.theme` is set and the system theme changes
- **THEN** the site theme does not change
