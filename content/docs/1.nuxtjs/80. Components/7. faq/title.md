# FAQ Title Component

The Title component is a simple Vue component that displays a main title and subtitle for a FAQ section. It uses internationalization to render the text content, making it easy to support multiple languages in your application.

![Banner Center Image](/BannerCenter.png)


## Usage

To use this component in your application, simply include it in your template:

```
<faqTitle />
```

## Configuration and Internationalization

This component uses Vue's internationalization system to display text content. The following translations are used:

- `faq.title`: Used for the main title text
- `faq.subtitle`: Used for the subtitle text

Make sure these translations are defined in your i18n configuration files for all supported languages.

## Styling

The component uses Tailwind CSS classes for styling. The background and text colors for light and dark modes are as follows:

#### Light Mode:

- background: N/A (not specified in the component)
- text color: N/A (not specified in the component)

#### Dark Mode:

- background: N/A (not specified in the component)
- text color: N/A (not specified in the component)

You can customize the colors by updating the values in the `tailwind.config.js` file.
-=4
Note: This component doesn't specify any background colors. It uses Tailwind CSS utility classes for text sizing and font weight. The main title uses `text-4xl` (extra large text) on small screens and `text-6xl` (extra extra large text) on larger screens. The subtitle uses `text-xl` (extra large text) on small screens and `text-lg` (large text) on larger screens. Both title and subtitle use `font-bold` and `font-semibold` respectively for emphasis.
