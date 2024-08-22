# EPL Results Dashboard

This project is a simple web application that allows users to view and submit English Premier League (EPL) match results.
 The application consists of a React.js frontend and a Django backend, and will be deployed on AWS using a 3-tier architecture.

## Features

- **View EPL Results**: Users can see a list of EPL match results, including the teams that played, the score, and the match date.
- **Submit New Results**: Users can add new match results using a form on the website.
- **RESTful API**: The backend provides API endpoints to retrieve and post match results.

## Architecture

The website is built with the following components:

- **Frontend**: React.js application that interacts with the backend APIs.
- **Backend**: Django REST framework that handles API requests and manages the database.
- **Database**: Stores EPL match results (e.g., team names, scores, match dates).
- **Deployment**: Designed to be deployed on AWS using a 3-tier architecture:
  - **Frontend**: Hosted on Amazon S3 and delivered via Amazon CloudFront (CDN).
  - **Backend**: Hosted on an EC2 instance or AWS Lambda.
  - **Database**: Managed by Amazon RDS.

## Getting Started

### Prerequisites

- **Node.js** and **npm** for the frontend.
- **Python 3.x** and **Django** for the backend.
- **AWS account** for deployment.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/epl-results-dashboard.git
   cd epl-results-dashboard
