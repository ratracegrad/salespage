# FAQ Sideways Component

This component renders a Frequently Asked Questions (FAQ) section with a sideways layout. It displays a title on the left side and a list of questions and answers on the right side. The component is responsive, adjusting its layout for different screen sizes, and supports both light and dark modes.

![Banner Center Image](/BannerCenter.png)


## Usage

To use this component in your application, simply include it in your template:

```
<FaqSideways />
```


## Configuration and Internationalization

The component pulls FAQ data from the `config.faqs` array. Each FAQ item should have an `id`, `question`, and `answer` property.

The component uses Vue's internationalization system (`$t`) to translate the questions and answers. Make sure to provide appropriate translations for each FAQ item in your i18n configuration.

## Styling

The component uses Tailwind CSS classes for styling. The background and text colors for light and dark modes are as follows:

#### Light Mode:

- background: `faqLightBackground`
- text color: `faqLightText`

#### Dark Mode:
- background: `faqDarkBackground`
- text color: `faqDarkText`

You can customize the colors by updating the values in the `tailwind.config.js` file.
