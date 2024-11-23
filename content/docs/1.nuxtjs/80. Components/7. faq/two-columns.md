# FAQ Two Column Component

This component renders a two-column layout for displaying frequently asked questions (FAQs). It uses a `SectionWrapper` component to provide a consistent layout and styling. The component fetches FAQ data from a configuration file and displays each question and answer pair in a grid format.

![Banner Center Image](/BannerCenter.png)


## Usage

To use this component in your application, simply include it in your template:

```
<FaqColumnTwo />
```

## Configuration and Internationalization

The component pulls FAQ data from the `config.faqs` array. Each FAQ item should have an `id`, `question`, and `answer` property.

The component uses Vue's internationalization system with the `$t` function to translate both questions and answers. Ensure that your i18n setup includes translations for the keys specified in the `config.faqs` array.

## Styling

The component uses Tailwind CSS classes for styling. The background and text colors for light and dark modes are as follows:

#### Light Mode:

- background: `faqLightBackground`
- text color: `faqLightText`

#### Dark Mode:
- background: `faqDarkBackground`
- text color: `faqDarkText`

You can customize the colors by updating the values in the `tailwind.config.js` file.
