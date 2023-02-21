# Calm Health Design Tokens
Cross-platform design tokens

## TODO
* Create a way to generate typescript package from a constant
* Create a way to generate Android package
* Create a way to generate iOS package


Schpiel: I know we have the @calm-web/design-system that is built on top of blueprint. In Calm Health we are creating a new Material UI theme .

To do this, we are using constants and enums derived from our Figma designs. These consist of things such as standard color hexs, numbers to represent different levels of font-size font-weight, height, viewport breakpoints,  or other types of spacing such as spacing between elements and border-radius, along with gradients and font-familys.

For now this is with Calm Health, but I could see sharing these design tokens as their own repo as being useful so that we could easily standardize these values, especially colors, and spacing across different apps using different technologies. Since they are just constants, they will be easy to use
