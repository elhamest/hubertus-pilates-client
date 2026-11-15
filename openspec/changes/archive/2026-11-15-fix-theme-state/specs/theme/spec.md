# Theme

## ADDED Requirements

### Requirement: Theme is right before first paint

The site SHALL show the right theme on the first paint, with no flash.

#### Scenario: Reload with a saved choice
- WHEN the user picked dark and reloads the page
- THEN the page is dark from the first paint, and the toggle shows "light mode"

### Requirement: The user's choice wins everywhere

All parts of the page SHALL follow the user's choice, not the system theme.

#### Scenario: Light choice on a dark system
- WHEN the system is dark and the user picked light
- THEN the gallery, slider and titles are light too

#### Scenario: System changes after a choice
- WHEN the user picked a theme and the system theme changes
- THEN the site keeps the user's choice

### Requirement: System theme without a choice

With no saved choice, the site SHALL use the system theme.
