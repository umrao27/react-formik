pipeline {
    agent any // Or specify a specific agent
    stages {
        stage('Build') {
            steps {
                sh 'npm install' // Or yarn install
                sh 'npm run build' // Or yarn build
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test' // Or yarn test
            }
        }
    }
}