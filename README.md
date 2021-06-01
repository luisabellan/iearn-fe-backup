
# subtotal-fe
**Project name was changed to MentorBeast after repository creation. 
Production Deployment: https://getsubtotal.com 
Dev Deployment: TBA

## Basic Info
 **Project Manager:** Christine Carpenter

 **PM Email:** christine@nuclius.com

## Figma Design
The design for this platform can be found [here](https://www.figma.com/file/GYGzJSFk1yJUL9EPPV54P1/Subto-Flow?node-id=64%3A2)

## Database Design
The dbdiagram design can be found [here](https://dbdiagram.io/d/60019a2480d742080a367f3a)

 
## Git Workflow
When working on this project, developers should follow the Nuclius Git workflow. 

For a more detailed description of the Nuclius Workflow, see [this document](https://www.notion.so/christinecarpenter/Code-Reviews-Git-Workflow-30b72fb6bd874036b23d82c0b842859a). 

**Workflow Overview:**
1. Clone project from the `dev` branch, **NOT FROM THE MAIN BRANCH**
2. Create a new branch for your task. If you were working on a feature task for creating a new header, your branch should be `feature/create-new-header`
    `git checkout 'feature/create-new-header`
3. Make your changes, committing frequently, and pulling recent changes from the `dev` branch before each commit. Make sure to use descriptive commit messages. 
    `git add .`
    `git pull origin dev`
    `git commit -m 'add positional styling to header'`
4. Push changes up to your branch frequently.
    `git push origin feature/your-branch`
5. When you are finished with your task, create a pull request, comparing your branch to the `dev` branch. 
6. Send your project manager a link to your pull request
7. Update your clickup task

## React
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

