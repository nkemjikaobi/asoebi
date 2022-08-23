/**
 * Return sanitized HTML to be rendered to prevent XSS attacks from user generated content
 * Rationale: https://zhenyong.github.io/react/tips/dangerously-set-inner-html.html
 * @param {String} content HTML content from server
 * @return {Object} Sanitized content
 */
export const getSanitizedHtml = (content: string) => ({ __html: content });
