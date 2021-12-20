# ESBuild JCP-App-Job
Guide for vsCode IDE
1. run command ``` yarn dlx @yarnpkg/sdks vscode ```
1. In Ts,tsx file press `Ctrl`+`Shift`+`P` then select typescript version on installed SDK
# Custom Atomic Design
In my project, I used 3 steps atomic design
 ### Atoms
 * The Atom contains pure html tag or antd design component and just uses property action not it's own function
 ### Organisms
 * The Organism is a component in which several atoms are bound.
 ### Templates
 * The Template is a component in which several organisms are bound.
 * The Template delivers functions to organisms and controls all of things
 * The Template is a single page.


# TODO
~~change design pattern to atomic design~~ 

~~fix esbuild pnp ant design error~~
 1. fix esbuild dev server modules
    * when build failed server just fall down
 1. add storybook
    * UI Development Tool
 1. add styledComponent global style
 1. add styledComponent theme provider
    * Is's for dark or light mode
