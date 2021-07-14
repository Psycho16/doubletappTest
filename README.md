# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn storybook`
Script run storybook instance on `6006` port, if available

## GitLab CI
### Установка GitLab Runner

- На машине необходимо установить Docker
[(Инструкция для Ubuntu)](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04-ru)

- Клонировать репозиторий 

`git clone https://gitlab.com/doubletapp/dt-gitlab-runner.git`

- Зарегистрировать **runner** по инструкции из [README.md](https://gitlab.com/doubletapp/dt-gitlab-runner) репозитория

- Запустить **runner**

`make`

### `.gitlab-ci.yml`

> автоматически подхватывается gitlab из корня репозитория, дополнительно регистрировать не нужно

В файле нужно описать все необходимые **jobs**, в которых:
- **script**: список выполняемых команд
- **tags**: список тэгов, по которым фильтруются ранее зарегистрированные *runners*, на которых будет выполняться job
- **only**: список веток, при изменении в которых выполнять *job*
- **environment**: окружение, из которого подтягивать *.env*

> в корне проекта лежит пример, где все работы описаны для **test** и **prod** окружений

### Переменные окружения для **Docker**

**Добавить переменную названия образа в `.env` файл и заменить {project_name} на название вашего приложения:**
```bash
# .env
IMAGE_APP=$CI_REGISTRY/doubletapp/{project_name}/{project_name}__app:$CI_ENVIRONMENT_SLUG-$CI_COMMIT_SHA
PORT=80 # или любой другой. они могут быть разные для test и prod окружения 
```
**Добавить `.env` в GitLab:**
1. Go to **Settings** -> **CI / CD**
2. Expand **Variables**
3. Press **Add Variable** and fill in the form for all of your environments:
 - **Key**: DOT_ENV
 - **Value**: all contents of your .env file
 - **Type**: File
 - **Environment scope**: test/prod (just enter the name and press Create wildcard)
4. Confirm **Add Variable**

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
