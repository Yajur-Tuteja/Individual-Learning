
#Parcel
-Dev Build
-Local Server
-HMR = Hot Module Refresh
-File Watching Algorithm - Written in C++
-Cache - Faster Builds
-Image Optimization
-Minification
-Bundling
-Compressing
-Consistent Hashning
-Code Splitting
-Differential Bundling - support older browser
-Diagnostic
-Error Handling
-HTTPS
-Tree Shaking - Removes unused code for us
-Different dev and prod

#App Structure:
/*
- Header
    - Logo
    - Nav Items

- Body
    - Search Functionality
    - Resaurants card container
        - Restaurant card
            -Img
            -Name,ratings,cuisine,delivery time

- Footer
    - Copyright
    - Links
    - Address
    - Contact
*/

Two types of import/export

- Default export/import

export default x
import x from /file

- Named export/import

export const x
import {x} from /file

x can be a variable as well as a component too

#React Hooks

- Normal JS utility function
- Written by fb devs in react library

- important hooks
    - useState() - used to generate State variables
    - useEffect()