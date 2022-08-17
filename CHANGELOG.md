# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.17] - 2022-08-12
### Added
- Added feature for admins to see total forecasts days per selected month & year 
    for selected epic on `Forecasts` page
## [0.1.12] - 2022-07-11
### Added
- Added feature for users to see response message on submit click on `Capacities` page
- Added feature for users to add their own capacities
- Added feature to view amount of business days available per month on `Capacities` page
- Created `supervisor` column for `AppUser` model (database migration needed)
- Created a CHANGELOG.md file
- Created column `business_day` for `Calendar` model (database migration needed)
- Made logo on the top left clickable
- Removed `team_id` from `Capacities` model (database migration needed)

### Fixed
- Added github username to newly posted user's name to prevent new username duplicates
- Updated SQL sample for `Capacities` model to work after editing the model
- Removed forecasts validator preventing posting for previous months on `Forecasts` page 

