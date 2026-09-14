/**
 * Utility to open the Booksy booking widget modal on the current page.
 */

export function openBooksyWidget(e) {
  if (e && e.preventDefault) {
    e.preventDefault();
  }

  // Instantly open optimized React modal (0ms latency)
  window.dispatchEvent(new CustomEvent('open-booksy-modal'));
}
