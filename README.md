# Evexia Design Tokens
Cross-platform design tokens for the Evexia design system [Figma link](https://www.figma.com/file/ghBbTKdBD1bHGeqN347Py7/Calm-Health-Web-Design-System?node-id=4662%3A14&t=HXSjV9LZUXhhztMP-0)


| Enum | Description |
|------|-------------|
| DS_ HEIGHT | Heights of various elements in px |
| DS_SHAPE_SPACING | Basic unit of spacing in px |
| DS_SHAPE_BORDER_RADIUS | Used in `border-radius` in px |
| DS_BREAKPOINT | Viewport breakpoints in px |
| DS_FONT_FAMILY | Used in `font-family` (contains AvenirNext) |
| DS_FONT_SIZE | Used in `font-size` in px |
| DS_LETTER_SPACING | Used in `letter-spacing` |
| DS_FONT_WEIGHT | Used in `font-weight` |
| DS_COLOR | Colors available to use in 6 or 8 digit hex, both light and dark theme |
| DS_GRADIENT | Available gradients, can be used in the `background` property |

## TODO
* Create a way to generate typescript package from a constant
* Create a way to generate Android package
* Create a way to generate iOS package


Schpiel: I know we have the @calm-web/design-system that is built on top of blueprint. In Calm Health we are creating a new Material UI theme .

To do this, we are using constants and enums derived from our Figma designs. These consist of things such as standard color hexs, numbers to represent different levels of font-size font-weight, height, viewport breakpoints,  or other types of spacing such as spacing between elements and border-radius, along with gradients and font-familys.

For now this is with Calm Health, but I could see sharing these design tokens as their own repo as being useful so that we could easily standardize these values, especially colors, and spacing across different apps using different technologies. Since they are just constants, they will be easy to use
