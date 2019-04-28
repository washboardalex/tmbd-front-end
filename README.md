## The Basics

This is a create-react-app build of the tmdb front end as specified in the Jumbo Interactive technical challenge. To view, clone this repository and then run

### `npm install`

and

### `npm start`

in your terminal of choice.

## Jumbo Interactive Criteria

* Must use TMDB API - yes, entire database of movies is searchable. Initial render provides a short list of popular movies for user perusal.
* Must display a list of popular media (TV or Movies) - yes
* Must link each entity to details page with relevant information - yes
* Must maintain browser history - yes. Browser history is maintained with react router's history object
* Must match provided mocks - yes. Implementation matches mocks across a full range of devices (tested in chrome dev tools) and is fully responsive.

## Broad Project Structure

The app is split into two pages, navigated via react router. The first is the Search Page, comprised of a search box and list of movies. Searching calls a query to the TMDB API which updates the list of movies. The second page, the Details Page, is accessible via link from a movie card only as props are passed between components. Navigating to the Detail Page directly results in a redirect to prevent the app crashing. The detail page is rendered as a single component.

## Considerations Addressed

In addressing these considerations, I wanted to offer solutions which were efficient as well as effective - the 8-hour working timeframe was a guide and whilst I did ending up working on the app for somewhat longer I did want to maintain some degree of time efficiency to simulate the employment environment.

As such, while I believe my solutions can certainly be improved upon (see below section), the work completed offers a solid base for scaling.

* Accuracy of implementation: I don't have many comments here. My main concern beyond matching the mockup in Figma was to ensure that I remained faithful to the design and maintained a degree of pleasant UX once the UI was fully interactive (click-through, loading screens, window resizes, etc). 

There are some low-key hover effects and an animated loading spinner which are understated enough not to disturb the overall visual impact of the UI.

To minimise resource use, I elected not to use a CSS framework. Usually I will use Bootstrap or Material UI, in this case I wanted to challenge myself to apply coherent principles to produce a fully responsive layout. 

I ended up using classes to bunch view-width and view-height rules to scale elements with max and min sizes to ensure elements did not crowd, along with CSS flexbox for layout. The strength of this approach was resource efficiency and simplicity. It impacted reusability of some JSX and CSS which is discussed below.

* Scalability & Testing: The site is built in React, which offers built-in state management and project structure based on components rather than separation of technologies. 

Only the two pages are stateful, and with one tweak (see below) it is possible for only one to be stateful. All components are either pure JS functions or are classes using componentDidMount only, without state. Any interactive elements have been extracted to prevent redundant re-rendering. 

This allows for greater reusability of components but also allows for easy testability as functions will act predictably to inputs. For the same reason the initial call to the fetch api has been abstracted into a function taking a query string as input.

## Potential Improvements

- Scalability & Testability: For some reason when receiving the array of popular movies the duration is not included in the JSON. Getting the duration requires a second fetch call for each movie using its id. I would have liked to have everything in one api call which could then just be passed as props to each card, used on click-through to render the details page. The alternative to making the details page a class was iterating over each movie id and making a separate fetch call to get duration whilst on the search page. I felt this would impact performance too much and elected to forsake the details page as a purely functional component.

The cost of this second call to API is lessened if one considers fleshing out the details page more fully - beyond film duration a wealth of data can be integrated into that page from the second fetch method.

The somewhat inefficient use of classes in my build versus using purely functional components would have been helped by implementing redux in this build - it also would have allowed for easier testabiliy. Whilst I am familiar with redux and originally planned to use it, I am not familiar with integrating redux and react router. Ultimately, given the time constraint and my uncertainty in estimating how long it would take to learn how to use react router and redux together *correctly*, I elected to use out-of-box state. My compartmentalisation of state allows for redux to be integrated relatively simply in future.

- Accuracy of Implementation - Not using a framework impacted the reusability of the poster element, as I had to write some fiddly custom CSS code in the wrapper to allow for the translation to occur on the details page. This component is not interactive, nor has it props, so the cost is not great. Nevertheless, it points to possible improvements in this area.