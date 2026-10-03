pipeline {
    agent any

    environment {
        CI = 'true'
    }

    options {
        timestamps()
        timeout(time: 60, unit: 'MINUTES')
    }

    stages {
        stage('Clean Reports') {
            steps {
                bat '''
                    IF EXIST allure-results rmdir /S /Q allure-results
                    IF EXIST allure-report rmdir /S /Q allure-report
                    IF EXIST playwright-report rmdir /S /Q playwright-report
                    IF EXIST test-results rmdir /S /Q test-results
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Smoke Tests') {
            steps {
                bat 'npx playwright test --grep "@smoke"'
            }
        }
    }

    post {
        always {
            publishHTML(target: [
                reportName: 'Playwright HTML Report',
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                keepAll: true,
                alwaysLinkToLastBuild: true,
                allowMissing: true
            ])

            allure([
                includeProperties: false,
                jdk: '',
                results: [[path: 'allure-results']]
            ])
        }

        success {
            echo '================================='
            echo 'Pipeline executed successfully.'
            echo '================================='
        }

        failure {
            echo '================================='
            echo 'Pipeline execution failed.'
            echo 'Check Console Output and Reports.'
            echo '================================='
        }

        cleanup {
            cleanWs()
        }
    }
}
