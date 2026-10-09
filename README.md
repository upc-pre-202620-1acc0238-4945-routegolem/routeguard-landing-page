# RouteGuard Landing Page Solution

This is a solution for developing a landing page for RouteGuard, a smart platform for fleet management and real-time monitoring of private school transport in Peru.

## Overview
The RouteGuard Project replaces the informal coordination of school transport (phone calls, chat messages and paper lists) with a connected ecosystem for drivers and families. Parents see where the vehicle is without calling anyone, and drivers keep their attention on the road while the app reports the route for them.

### Visitors can explore:
- The problem of today's school transport: daily uncertainty for parents, driver distraction and informal processes.

- A connected ecosystem with two interfaces, one for drivers and one for families, with 100% route traceability and zero distractions at the wheel.

- The main features of the product: background GPS, offline check-in and geofencing alerts.

- The subscription plans: a free **Basic** plan for independent drivers and a **Flota Pro** plan (S/ 49.99 per month) for administrators with several vehicles, with automatic geofencing alerts, advanced reports and a panic button.

- The mobile app in action, with mockups of the main dashboard and the stops and tracking screens.

- A user validation video (embedded from YouTube) showing a real user trying RouteGuard.

- The RouteGolem team behind the project, plus a link to the official repository with the full project documentation.

- A light and dark theme switcher whose preference is saved in the browser.

- Full content in Latin American Spanish.

### Screenshots

![Parte 1](assets/images/p1.png)
![Parte 2](assets/images/p2.png)
![Parte 3](assets/images/p3.png)
![Parte 4](assets/images/p4.png)
![Parte 5](assets/images/p5.png)
![Parte 6](assets/images/p6.png)
![Parte 7](assets/images/p7.png)

### Links
- Solution URL : [https://upc-pre-202620-1acc0238-4945-routegolem.github.io/routeguard-landing-page/](https://upc-pre-202620-1acc0238-4945-routegolem.github.io/routeguard-landing-page/)
- Project report : [https://github.com/upc-pre-202620-1acc0238-4945-routegolem/routeguard-report](https://github.com/upc-pre-202620-1acc0238-4945-routegolem/routeguard-report)

### The RouteGuard ecosystem
This repository is only the landing page. The rest of the project lives in sibling repositories of the same organization:

| Repository | What it contains |
|---|---|
| [routeguard-report](https://github.com/upc-pre-202620-1acc0238-4945-routegolem/routeguard-report) | Project report: user stories, diagrams, bounded contexts and design decisions |
| [routeguard-web-services](https://github.com/upc-pre-202620-1acc0238-4945-routegolem/routeguard-web-services) | Backend: ASP.NET Core (.NET 10) REST API with JWT and roles (admin, driver, parent), PostgreSQL, RabbitMQ, deployed on Azure |
| [routeguard-native-app](https://github.com/upc-pre-202620-1acc0238-4945-routegolem/routeguard-native-app) | Android app (Kotlin, Jetpack Compose, Hilt, Retrofit, Room, Mapbox) for drivers, parents and administrators |
| routeguard-landing-page (this repo) | Marketing landing page, published with GitHub Pages |

### Project structure
```
index.html          Landing page markup
assets/
├── styles.css      Custom styles
├── script.js       Theme switcher (light / dark)
└── images/         Logo, hero image, page screenshots (p1-p7), app mockups and team photos
```

### Page sections
`problem` (the challenge) · `solution` (the connected ecosystem and its impact) · `features` · `plans` · `product` (app mockups) · `validation-video` · `team`

### Build with
- Semantic HTML5 markup
- Tailwind CSS (CDN) with a custom stylesheet
- Poppins typography (Google Fonts)
- Vanilla JavaScript (light / dark theme switcher)
- YouTube embed for the validation video

### Run locally
It is a static site with no build step: open `index.html` in a browser, or serve the folder with any static server (for example `python -m http.server 8000` and visit `http://localhost:8000`).

### Deployment
Published with GitHub Pages from the `develop` branch, root folder.

### Author
- RouteGolem
  - Mathias De la Cruz
  - Jhony Manuel Francia
  - Marcelo Pareja
  - Nickolas Ramirez
