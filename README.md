# 🏀 North East Basketball Board Content Management System
This CMS for the North East Basketball Board was built using [Strapi v4](https://strapi.io/)

It sets up a set of related content types:
- Club
    - *(otm) Teams*
- League 
    - *(otm) Teams*
- Teams
    - *(mto) Club*
    - *(mto) League*
    - *(mtm) Fixture*
- Fixture
    - *(mtm) Team*
- User

To be added:
- News Posts
- Front Page links
- Front Page Welcome Message

Strapi generates from these content types a REST API which is consumed by the [NEBB Public Site](https://github.com/dangoreilly/nebb-front-end), which also serves as a portal for maintaining the league through updating fixtures with scores and assigning points. 