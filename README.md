# Gustoso: Artisanal Italian Kitchen & Online Ordering Store
**Web Engineering — Assignment No. 2**  
*A modern, responsive, multi-page front-end web store built with semantic HTML5, modern CSS3 (Flexbox & CSS Grid), vanilla JavaScript (ES6), and jQuery.*

---

## 1. Project Overview & Theme

- **Store Name**: **Gustoso — Artisanal Italian Kitchen**
- **Theme**: Restaurant Menu and Online Food Ordering (*Theme 3 from Assignment Specification*)
- **Menu Categorization**:
  - **Antipasti / Starters (`starters`)**: Bruschetta al Pomodoro, Crispy Truffle Arancini, Burrata Caprese Salad, Rosemary Garlic Focaccia, Calamari Fritti al Limone.
  - **Primi & Main Course (`main_course`)**: Handmade Tagliatelle Bolognese, Wood-Fired Margherita D.O.P., Wild Porcini & Truffle Risotto, Pan-Seared Chilean Sea Bass, Prime Bistecca alla Fiorentina, Artisanal Gnocchi Gorgonzola.
  - **Dolci / Desserts (`desserts`)**: Classic Espresso Tiramisù, Sicilian Pistachio Cannoli, Warm Chocolate Soufflé, Limoncello Panna Cotta.
- **Technologies Used**: HTML5, CSS3, JavaScript (ES6+), jQuery (v3.7.1 CDN). 

---

## 2. introduction

| Name | kashaf ehtisham | 70175231 |

---


## 3. Technology Architecture ("Which Technology Does What")

| Feature Area | Plain JavaScript (ES6) | jQuery (v3.7.1) |
| :--- | :--- | :--- |
| **Product Data** | Array of 15 structured objects with price, rating, stock, prep time, calories, and ingredients. Fallback in `js/data.js`. | Fetches `products.json` dynamically via `$.getJSON()`. Displays animated loading message and graceful fallback banner if AJAX fails. |
| **Dish Catalog Grid** | Dynamically constructs semantic `<article class="dish-card">` DOM elements; filters by category and keyword search using `filter()`; sorts with non-mutating spread `[...dishes].sort()`. | Staggered fade-in card reveal animation (`.hide().delay().fadeIn()`). |
| **Quick-View Dish Details** | Locates clicked dish by ID using `Array.prototype.find()` and renders ingredients list. | Modal backdrop display and smooth dismissal. |
| **Order & Cart** | Manages cart state array, updates quantities, removes items, and persists data across refreshes using `localStorage`. Calculates Subtotal, Discount, Delivery, and Grand Total using `Array.prototype.reduce()`. | Slide-in notifications, dynamic `.text()` badge updates in navigation bar across all pages. |
| **Discount Voucher System** | Custom rest-parameter function `applyVoucherDiscounts(subtotal, ...voucherCodes)` supporting multi-code stackable promotions (`GUSTO10`, `TASTY20`, `FREEDELIVERY`). | Clears input with `.val("")`, updates text labels. |
| **Checkout & Contact Forms** | Event handler validation stopping invalid submission via `event.preventDefault()`, validating patterns, email, phone, minlengths, and injecting error messages. | Highlights invalid inputs by toggling `.addClass('input-error')` and clears warnings on user focus. |
| **Interactive UI Extras** | Event delegation for dynamic dish and cart table buttons via `addEventListener`. | FAQ Accordion toggle using `.slideToggle(280)`, Back-to-Top smooth scrolling using `$('html, body').animate({ scrollTop: 0 }, 500)`, and toast notifications with method chaining. |

---

## 4. File Structure

```
gustoso/
├── index.html              # Home: Hero banner, chef's specials, values, FAQ accordion
├── products.html           # Menu: Search, category filter pills, sorting, responsive grid, quick-view modal
├── cart.html               # Cart & Checkout: Table of dishes, quantity buttons, reduce totals, 8-field checkout form
├── contact.html            # Contact & Reserve: Opening hours table, store info, reservation form
├── products.json           # 15 culinary dishes loaded via jQuery $.getJSON()
├── css/
│   └── style.css           # Single external stylesheet with CSS variables, Flexbox, Grid, and media queries
├── js/
│   ├── data.js             # Fallback array (FALLBACK_DISHES) for offline / direct file:// access
│   ├── store.js            # Core business logic in plain ES6 (functional methods, cart math, delegation, validation)
│   └── ui.js               # jQuery interactions inside $(document).ready() (AJAX, effects, animations, chaining)
├── images/
│   ├── logo.svg            # Custom vector brand logo
│   ├── hero-chef.svg       # Artisan cooking hero vector graphic
│   └── dishes/             # 15 handcrafted SVG food illustrations for all dishes
└── README.md               # Project documentation and viva defense preparation
```

---

## 5. How to Run the Project

Browsers block local AJAX calls (such as `$.getJSON("products.json")`) when files are opened directly by double-clicking (`file:///` protocol) due to CORS security rules.

### Method 1: VS Code Live Server (Recommended)
1. Open the project folder (`gustoso/`) in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click on `index.html` and select **"Open with Live Server"**.
4. The site will launch automatically at `http://127.0.0.1:5500/index.html`.

### Method 2: Python Simple HTTP Server
If Python is installed on your machine, navigate to the folder in PowerShell or Command Prompt and run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in any modern web browser.

### Method 3: Direct Double-Click (Offline Fallback)
If opened directly by double-clicking `index.html` or `products.html`, Gustoso's built-in offline fallback in `js/ui.js` automatically detects the AJAX failure and seamlessly populates the catalog from `js/data.js` with an informative banner.

---
## 6. github link

 ### git repo link : https://github.com/kashaf186/gustoso.git
 