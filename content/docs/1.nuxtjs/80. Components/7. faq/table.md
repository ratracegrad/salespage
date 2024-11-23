# FAQ Table Component

This component renders a Frequently Asked Questions (FAQ) section. It displays a list of questions and answers in a responsive layout, with support for internationalization and dark/light mode styling.

![Banner Center Image](/BannerCenter.png)


## Usage

To use this component in your application, simply include it in your template:

```
<faqTable />
```


## Configuration and Internationalization

The component pulls FAQ data from the `config.faqs` array. Each FAQ item should have an `id`, `question`, and `answer` property.

The component uses Vue's `$t` function for internationalization. The question and answer texts are passed through this function, allowing for multi-language support.

## Styling

The component uses Tailwind CSS classes for styling. The background and text colors for light and dark modes are as follows:

#### Light Mode:

- background: `faqLightBackground`
- text color: `faqLightText`

#### Dark Mode:
- background: `faqDarkBackground`
- text color: `faqDarkText`

You can customize the colors by updating the values in the `tailwind.config.js` file.
