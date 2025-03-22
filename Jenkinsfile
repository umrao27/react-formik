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
        // stage('Deploy') {
        //     when {
        //         anyOf {
        //             branch 'main' // Or 'master'
        //             tag /v\d+\.\d+\.\d+/
        //         }
        //     }
        //     steps {
        //         // Deploy your application (e.g., to a web server)
        //         // Example using 'rsync' (replace with your deployment method)
        //         sh 'rsync -avz build/ user@your_server:/path/to/web/app'
        //     }
        // }
    }
}