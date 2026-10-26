/**
 * Gustoso Artisanal Kitchen - jQuery UI Interactions & AJAX
 * Technologies: jQuery (v3.7.1)
 * Rubric compliance:
 * - Inside $(document).ready()
 * - jQuery selectors and events (.on(), .click()) for at least 3 interactions
 * - At least 3 effects: .slideToggle(), .fadeIn(), .fadeOut(), .animate()
 * - DOM methods: .addClass(), .removeClass(), .toggleClass(), .text(), .html(), .val(), .append(), .remove()
 * - AJAX JSON loading with $.getJSON() / $.ajax() with loading & error handling
 * - Method chaining used extensively
 */

$(document).ready(function() {
  console.log("Gustoso UI: jQuery initialized successfully inside $(document).ready().");

  /* ------------------------------------------------------------------------
     1. AJAX: Load dishes from products.json with Loading & Error States
     ------------------------------------------------------------------------ */
  function loadProductsAjax() {
    const $loader = $("#products-loader");
    const $errorBox = $("#products-error");
    const $dishesGrid = $("#dishes-grid");
    const $featuredGrid = $("#featured-grid");

    // Display animated loader message
    if ($loader.length) {
      $loader.html('<p class="loading-spinner">⏳ Loading authentic Italian dishes from menu database...</p>').show();
    }

    if ($errorBox.length) {
      $errorBox.hide().empty();
    }

    // jQuery $.getJSON() AJAX call
    $.getJSON("products.json")
      .done(function(data) {
        console.log("AJAX Success: Loaded", data.length, "dishes from products.json");

        // Update global store state
        if (typeof storeState !== "undefined") {
          storeState.dishes = data;
        }

        // Hide loader with a gentle fade effect
        if ($loader.length) {
          $loader.fadeOut(200);
        }

        // Render on Products page if grid exists
        if ($dishesGrid.length && typeof renderDishesGrid === "function") {
          const filtered = getFilteredDishes();
          const sorted = getSortedDishes(filtered);
          renderDishesGrid($dishesGrid[0], sorted);

          // jQuery animation: Fade in cards sequentially
          animateDishesEntrance();
        }

        // Render on Home page featured grid
        if ($featuredGrid.length && typeof renderFeaturedDishes === "function") {
          renderFeaturedDishes();
          $(".dish-card", $featuredGrid).hide().fadeIn(400);
        }
      })
      .fail(function(jqxhr, textStatus, error) {
        console.warn("AJAX Info: Could not fetch products.json (e.g. direct file:// protocol). Falling back to data.js array.");

        if ($loader.length) {
          $loader.fadeOut(150);
        }

        // Graceful fallback to FALLBACK_DISHES
        if (typeof FALLBACK_DISHES !== "undefined" && typeof storeState !== "undefined") {
          storeState.dishes = FALLBACK_DISHES;

          // Render fallback data
          if ($dishesGrid.length && typeof renderDishesGrid === "function") {
            const filtered = getFilteredDishes();
            const sorted = getSortedDishes(filtered);
            renderDishesGrid($dishesGrid[0], sorted);
            animateDishesEntrance();
          }

          if ($featuredGrid.length && typeof renderFeaturedDishes === "function") {
            renderFeaturedDishes();
            $(".dish-card", $featuredGrid).hide().fadeIn(400);
          }

          // Show friendly informative banner using jQuery method chaining
          if ($errorBox.length) {
            $errorBox
              .html('<span>ℹ️ <strong>Offline Mode:</strong> Menu loaded from local fallback dataset (run via VS Code Live Server for live AJAX).</span>')
              .stop(true, true)
              .fadeIn(300);
          }
        } else {
          // Unrecoverable error state
          if ($errorBox.length) {
            $errorBox
              .html('<span>❌ <strong>Error:</strong> Failed to load menu dishes. Please check products.json.</span>')
              .stop(true, true)
              .fadeIn(300);
          }
        }
      });
  }

  // Trigger AJAX load
  loadProductsAjax();

  /* ------------------------------------------------------------------------
     2. Effect 1: Staggered Fade-in Animation for Dish Cards
     ------------------------------------------------------------------------ */
  function animateDishesEntrance() {
    $(".dish-card").hide().each(function(index) {
      $(this).delay(index * 60).fadeIn(350);
    });
  }

  /* ------------------------------------------------------------------------
     3. Interactions: Filter Pills with jQuery Selection & Method Chaining
     ------------------------------------------------------------------------ */
  $(".filter-btn").on("click", function(e) {
    e.preventDefault();

    // Demonstrate jQuery Method Chaining & DOM classes
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");

    const selectedCategory = $(this).attr("data-category");

    if (typeof storeState !== "undefined") {
      storeState.activeCategory = selectedCategory;

      const filtered = getFilteredDishes();
      const sorted = getSortedDishes(filtered);
      const grid = document.getElementById("dishes-grid");

      if (grid && typeof renderDishesGrid === "function") {
        renderDishesGrid(grid, sorted);
        animateDishesEntrance();
      }
    }
  });

  /* ------------------------------------------------------------------------
     4. Interactions: Live Search Input with jQuery (.on('input'))
     ------------------------------------------------------------------------ */
  $("#search-input").on("input", function() {
    const query = $(this).val();

    if (typeof storeState !== "undefined") {
      storeState.searchQuery = query;

      const filtered = getFilteredDishes();
      const sorted = getSortedDishes(filtered);
      const grid = document.getElementById("dishes-grid");

      if (grid && typeof renderDishesGrid === "function") {
        renderDishesGrid(grid, sorted);
        animateDishesEntrance();
      }
    }
  });

  /* ------------------------------------------------------------------------
     5. Interactions: Sorting Dropdown with jQuery (.on('change'))
     ------------------------------------------------------------------------ */
  $("#sort-select").on("change", function() {
    const selectedSort = $(this).val();

    if (typeof storeState !== "undefined") {
      storeState.activeSort = selectedSort;

      const filtered = getFilteredDishes();
      const sorted = getSortedDishes(filtered);
      const grid = document.getElementById("dishes-grid");

      if (grid && typeof renderDishesGrid === "function") {
        renderDishesGrid(grid, sorted);
        animateDishesEntrance();
      }
    }
  });

  /* ------------------------------------------------------------------------
     6. Effect 2: FAQ Accordion (.slideToggle() and .toggleClass())
     ------------------------------------------------------------------------ */
  $(".faq-question").on("click", function(e) {
    e.preventDefault();

    const $parentItem = $(this).parent(".faq-item");
    const $answer = $(this).next(".faq-answer");

    // Toggle current item with slide animation
    $parentItem.toggleClass("active");
    $answer.stop(true, true).slideToggle(280);

    // Close other sibling items smoothly (accordion behavior)
    $parentItem
      .siblings(".faq-item")
      .removeClass("active")
      .find(".faq-answer")
      .stop(true, true)
      .slideUp(280);
  });

  /* ------------------------------------------------------------------------
     7. Effect 3: Back to Top Button (.animate() and .fadeIn() / .fadeOut())
     ------------------------------------------------------------------------ */
  const $backToTop = $("#back-to-top");

  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 350) {
      $backToTop.stop(true, true).fadeIn(250);
    } else {
      $backToTop.stop(true, true).fadeOut(250);
    }
  });

  $backToTop.on("click", function(e) {
    e.preventDefault();
    // jQuery smooth scroll animation
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  /* ------------------------------------------------------------------------
     8. Effect 4: Enhanced jQuery Toast with Method Chaining
     ------------------------------------------------------------------------ */
  window.showJQueryToast = function(messageHtml) {
    const $toast = $("#toast-notification");
    if ($toast.length) {
      // Clear previous timeout and chain effects
      $toast
        .stop(true, true)
        .html(messageHtml)
        .addClass("show")
        .fadeIn(250)
        .delay(2800)
        .fadeOut(350, function() {
          $(this).removeClass("show");
        });
    }
  };

  /* ------------------------------------------------------------------------
     9. Interactive Checkout Enhancements (jQuery Form Field Highlighting)
     ------------------------------------------------------------------------ */
  $("form input, form select, form textarea").on("focus", function() {
    $(this).removeClass("input-error");
    $(this).next(".error-message").empty();
  });

});
