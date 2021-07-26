
# iEarn-fe

Production Deployment: TBA
Dev Deployment: TBA
## Basic Info
 **Project Manager:** Christine Carpenter

 **PM Email:** christine@nuclius.com

## Figma Design
The design for this platform can be found [here](https://www.figma.com/file/MgtrpSs4NluFSrXSq4faGO/iEarn-Nuclius?node-id=1%3A20084)

## Database Design
The dbdiagram design can be found [TBD](https://dbdiagram.io/)

 
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

