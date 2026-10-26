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
- **Technologies Used**: HTML5, CSS3, JavaScript (ES6+), jQuery (v3.7.1 CDN). *Strictly no backend required.*

---

## 2. Team Members & Roles

| Member Name | Student ID | Assigned Contribution |
| :--- | :--- | :--- |
| **Team Member 1** | *[Insert ID]* | Semantic HTML5 structure (4 linked pages, forms, tables, accessibility) & CSS Flexbox/Grid layouts. |
| **Team Member 2** | *[Insert ID]* | Core ES6 JavaScript logic (array methods `filter`, `find`, `sort`, `reduce`, rest parameters, event delegation, client-side validation). |
| **Team Member 3** | *[Insert ID]* | jQuery integration (AJAX `$.getJSON` with loading/error handling, animations `.slideToggle`, `.fadeIn`, `.animate`, method chaining) & Bonus Features. |

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

## 6. Full Assignment Checklist & Rubric Compliance

### 3.1 HTML (1.5 Marks)
- [x] **At least 4 pages**: `index.html`, `products.html`, `cart.html`, `contact.html`. Linked via a unified navigation bar.
- [x] **Semantic tags**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` used on every page.
- [x] **Valid document structure**: `<!DOCTYPE html>`, `<meta charset="UTF-8">`, `<meta name="viewport" content="width=device-width, initial-scale=1.0">`, descriptive `<title>` per page.
- [x] **Images & Lists**: All images have descriptive `alt` tags; navigation, feature lists, and ingredients use `<ul>` / `<ol>`.
- [x] **Tables**: `cart.html` features an order table (`<table>`, `<thead>`, `<tbody>`, `<tfoot>`, `<th>`, `<td>`), and `contact.html` features an opening hours table.
- [x] **Forms with 6+ field types**:
  - Checkout form: `text` (Name, Address), `email` (Email), `tel` (Phone), `number` (Postal/Table), `select` (Service Type), `radio` (Payment Method), `textarea` (Chef Notes), `checkbox` (Terms Agreement).
  - Validation attributes: `required`, `pattern`, `minlength`, `min`.

### 3.2 CSS (2 Marks)
- [x] **Single external stylesheet**: All styles are consolidated in `css/style.css`. No inline style tags.
- [x] **Selector diversity**: Element selectors (`h1`, `table`), classes (`.dish-card`), IDs (`#cart-table`), attribute selectors (`[data-category]`, `input[type="radio"]`), and pseudo-classes (`:hover`, `:focus-visible`, `:active`, `:disabled`, `:nth-child`).
- [x] **Box model**: `*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }` with consistent padding/margins.
- [x] **Layout models**: Flexbox for navbar, hero banner, quantity buttons, and modal headers. CSS Grid for product catalog and features.
- [x] **Responsive breakpoints**:
  - Desktop (>1024px): 3 to 4 column dish grid.
  - Tablet (≤768px): 2 column dish grid, responsive stacked layouts.
  - Mobile (≤480px): 1 column dish grid, touch-friendly tap targets.
- [x] **Visual design quality**: Harmonious warm bistro color palette, visible focus rings, smooth hover micro-interactions.

### 3.3 JavaScript ES6 (2.5 Marks)
- [x] **Data array**: 15 distinct culinary dishes containing `id`, `name`, `price`, `category`, `rating`, `reviewsCount`, `inStock`, `stockCount`, `prepTime`, `calories`, `image`, `description`, `ingredients`.
- [x] **Dynamic rendering**: Dishes are created dynamically via DOM creation in `js/store.js`.
- [x] **Filter**: Live keyword search and category filtering using `Array.prototype.filter()`.
- [x] **Sort without mutation**: Sorted using spread operator `[...dishes].sort(...)` by price (low/high), rating, and alphabetical name.
- [x] **Find**: Dish modal populated using `Array.prototype.find(d => d.id === Number(id))`.
- [x] **Cart math with reduce**: Calculates subtotal, discounts, and grand totals using `Array.prototype.reduce()`.
- [x] **Rest parameter**: `applyVoucherDiscounts(subtotal, ...voucherCodes)` handles multiple promotion vouchers.
- [x] **Event delegation**: `addEventListener` applied to parent containers `#dishes-grid` and `#cart-table-body`.
- [x] **Form validation**: Validates inputs, shows inline `.error-message` spans, and invokes `event.preventDefault()` when invalid.
- [x] **Clean code**: Zero `var`, exclusively `const` and `let`, descriptive function names, and comprehensive comments.

### 3.4 jQuery (1.5 Marks)
- [x] **CDN & Ready**: Loaded from official jQuery CDN and wrapped inside `$(document).ready()`.
- [x] **Selectors & Events**: Used `.on("click")`, `.on("input")`, `.on("change")`, and `.on("scroll")`.
- [x] **At least 3 effects / animations**:
  1. FAQ Accordion: `.slideToggle(280)`.
  2. Dish Card Reveal: Staggered `.delay().fadeIn(350)`.
  3. Back-to-Top Button: Animated smooth scroll `$('html, body').animate({ scrollTop: 0 }, 500)`.
  4. Floating Toast Notification: `.fadeIn(250).delay(2800).fadeOut(350)`.
- [x] **DOM methods**: `.addClass()`, `.removeClass()`, `.toggleClass()`, `.text()`, `.html()`, `.val()`, `.append()`, `.remove()`.
- [x] **AJAX JSON**: Fetches `products.json` using `$.getJSON()` with animated loading status and error fallback.
- [x] **Method chaining**: Extensively demonstrated (e.g. `$toast.stop(true, true).html(msg).addClass('show').fadeIn(250).delay(2800).fadeOut(350)`).

### Bonus Features (Up to 0.5 Extra Marks)
- [x] **Cart LocalStorage Persistence**: Cart contents survive page reloads and persist seamlessly across pages.
- [x] **Light / Dark Theme Toggle**: Full color-scheme toggle with persistent choice stored in `localStorage`.
- [x] **Discount Coupon System**: Multi-code promotion engine (`GUSTO10`, `TASTY20`, `FREEDELIVERY`) powered by rest parameters.
- [x] **Bootstrap Integration**: Bootstrap 5 utility classes utilized on `contact.html` alongside pure custom CSS.

---

## 7. Instructor Viva Defense Guide & Questions

Prepare for your assignment viva evaluation with the following explanations:

### Q1: Why do we copy the array before sorting?
> **Answer**: In JavaScript, `Array.prototype.sort()` sorts an array *in-place*, meaning it mutates (alters) the original array permanently. To maintain pure functions, predictability, and prevent unintended side effects (such as losing the original default ordering or causing race conditions), we create a shallow copy first using the ES6 spread operator (`const clonedDishes = [...dishesList]; clonedDishes.sort(...)`).

### Q2: What is the difference between `filter` and `find`? Where did you use each?
> **Answer**:
> - `filter()` evaluates every element against a condition and returns a **new array** containing *all* matching elements (e.g. 0, 1, or many). We used `filter()` for category selection and live keyword search.
> - `find()` iterates through the array and returns only the **first single matching object** itself (or `undefined` if none match). We used `find()` in `openDishDetailsModal(dishId)` to retrieve the specific clicked dish for the quick-view modal.

### Q3: Explain how your cart total is calculated with `reduce`. What is the starting value?
> **Answer**: `Array.prototype.reduce()` collapses an array into a single accumulated value by executing a reducer callback on each item. In `calculateCartTotals()`, we write:
> ```javascript
> const subtotal = storeState.cart.reduce((accumulator, item) => {
>   const dish = findDishById(item.id);
>   return dish ? accumulator + (dish.price * item.quantity) : accumulator;
> }, 0);
> ```
> The second argument (`0`) is the **starting accumulator value**. Without it, `reduce` would use the first object in the array as the initial accumulator, causing `[object Object]` type concatenation errors.

### Q4: What does event delegation do and why did you need it for dynamically added buttons?
> **Answer**: Event delegation takes advantage of **event bubbling** (where events triggered on child elements bubble up the DOM tree to their ancestors). Instead of attaching hundreds of separate event listeners to every individual button, we attach a single listener to the static parent container (e.g., `#dishes-grid`).  
> When new dishes are rendered dynamically by JavaScript or AJAX, their buttons did not exist in the DOM when the page first loaded. Event delegation allows clicks on dynamically inserted buttons to be captured immediately via `event.target.closest("button")`.

### Q5: What happens if the AJAX request fails? Show where you handle the error.
> **Answer**: In `js/ui.js`, our `$.getJSON("products.json")` call chains `.fail(function(jqxhr, textStatus, error) { ... })`. If the request fails (for example, when a user double-clicks the HTML file via the `file:///` protocol where browsers block local cross-origin AJAX), the error callback hides the loading spinner, displays an informative notification banner, and falls back to `FALLBACK_DISHES` in `js/data.js` so the website remains fully operational.

### Q6: Show one place where jQuery and plain JavaScript work together. Could you do the same effect in plain JavaScript?
> **Answer**: In the category filtering process, plain JavaScript manages the business logic and array manipulation (`storeState.activeCategory`, `getFilteredDishes()`, `getSortedDishes()`), while jQuery handles the user interface animation:
> ```javascript
> renderDishesGrid($dishesGrid[0], sorted);
> $(".dish-card").hide().each(function(index) {
>   $(this).delay(index * 60).fadeIn(350);
> });
> ```
> Yes, the same effect could be achieved in plain JavaScript using the Web Animations API (`element.animate()`) or CSS transition classes (`opacity` and `transform`) with `requestAnimationFrame()` or `setTimeout()`, though jQuery provides a more concise syntax with `.delay().fadeIn()`.

### Q7: How does your page change at the 768px breakpoint and why?
> **Answer**: At `@media (max-width: 768px)`:
> 1. The product grid transitions from **3 columns to 2 columns** (`grid-template-columns: repeat(2, 1fr)`) so dish cards retain adequate width and readability on tablet displays.
> 2. The hero banner switches from a horizontal Flexbox layout (`flex-direction: row`) to a vertical stacked layout (`flex-direction: column-reverse`) with centered typography.
> 3. The cart layout adjusts from side-by-side (`1.6fr 1fr`) to a single stacked column (`grid-template-columns: 1fr`).
> 4. At the mobile breakpoint (`480px`), the dish grid further collapses to a single column (`1fr`) with full-width inputs for touch ergonomics.
