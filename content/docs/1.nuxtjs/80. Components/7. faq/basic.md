# FAQ Basic Component


This component renders a Frequently Asked Questions (FAQ) section. It displays a title followed by a list of questions and answers. Each Q&A pair is styled with a vertical line and distinct "Q." and "A." labels. The component supports internationalization and adapts to light and dark modes.

![Banner Center Image](/BannerCenter.png)


## Usage

To use this component in your application, simply include it in your template:

```
<FaqBasic />
```


## Configuration and Internationalization

The component pulls FAQ data from the `config.faqs` array. Each FAQ item should have an `id`, `question`, and `answer` property.


The component uses Vue's internationalization system (`$t`) to translate the question and answer text. Ensure that your i18n setup includes translations for the keys specified in `config.faqs`.


## Styling

The component uses Tailwind CSS classes for styling. The background and text colors for light and dark modes are as follows:

#### Light Mode:

- background: `faqLightBackground`
- text color: `faqLightText`

#### Dark Mode:
- background: `faqDarkBackground`
- text color: `faqDarkText`

You can customize the colors by updating the values in the `tailwind.config.js` file.
