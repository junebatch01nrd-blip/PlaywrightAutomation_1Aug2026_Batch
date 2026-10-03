pipeline {
    agent any

    environment {
        CI = 'true'
        PLAYWRIGHT_BROWSERS_PATH = "${env.JENKINS_HOME}\\ms-playwright"
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
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Smoke Tests') {
            steps {
                bat 'npx playwright test --project=chromium'
            }
        }
    }

    post {
        always {
            script {
                if (fileExists('test-results/results.xml')) {
                    junit testResults: 'test-results/results.xml'
                } else {
                    echo 'JUnit results are unavailable because the smoke tests did not run.'
                }

                if (fileExists('playwright-report/index.html')) {
                    publishHTML(target: [
                        reportName: 'Playwright HTML Report',
                        reportDir: 'playwright-report',
                        reportFiles: 'index.html',
                        keepAll: true,
                        alwaysLinkToLastBuild: true,
                        allowMissing: true
                    ])
                } else {
                    echo 'Playwright HTML report is unavailable because the smoke tests did not run.'
                }

                if (fileExists('allure-results')) {
                    allure([
                        includeProperties: false,
                        jdk: '',
                        results: [[path: 'allure-results']]
                    ])
                } else {
                    echo 'Allure results are unavailable because the smoke tests did not run.'
                }
            }
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
