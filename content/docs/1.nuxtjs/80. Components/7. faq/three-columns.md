# FAQ Three Columns Component

This component renders a section of frequently asked questions (FAQs) in a three-column layout. It uses a `SectionWrapper` component for consistent styling and displays a title followed by a grid of questions and answers. The component is responsive, adjusting its layout based on screen size.

![Banner Center Image](/BannerCenter.png)


## Usage

To use this component in your application, simply include it in your template:

```
<FaqColumnThree />
```


## Configuration and Internationalization

The component pulls FAQ data from the `config` object, specifically the `faqs` array. Each FAQ item should have an `id`, `question`, and `answer` property.

The component uses Vue's internationalization system (`$t`) to translate both questions and answers. Ensure that your i18n setup includes translations for the keys specified in the `config.faqs` array.

## Styling

The component uses Tailwind CSS classes for styling. The background and text colors for light and dark modes are as follows:

#### Light Mode:

- background: `faqLightBackground`
- text color: `faqLightText`

#### Dark Mode:
- background: `faqDarkBackground`
- text color: `faqDarkText`

You can customize the colors by updating the values in the `tailwind.config.js` file.
