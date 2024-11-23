# Features Title Component

The Title component is a simple Vue component that displays a main title and subtitle. It uses internationalization to render the text content, making it easy to support multiple languages in your application.

![Banner Center Image](/FeaturesColumnTwo.png)


## Usage

To use this component in your application, simply include it in your template:

```
<FeaturesTitle />
```

## Configuration and Internationalization

This component uses Vue's internationalization system to display its content. The text for the title and subtitle are pulled from the translation files using the following keys:

- `features.title`: Used for the main title
- `features.subtitle`: Used for the subtitle

Make sure these keys are defined in your translation files for all supported languages.

## Styling

**Note**: This component doesn't specify any background or text colors directly. It uses Tailwind's utility classes for font sizes and weights. The actual colors would be inherited from the parent component or global styles.
