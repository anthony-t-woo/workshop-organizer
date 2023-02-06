# Slices

## Display Workshops

    - User should be able to see a list of all workshops and participants within individual divs.
        - Fetch workshops table data from database and link participants table
        - Assign to data to state
            - let workshopsData
            - let participantsData
        - Render and append divs to DOM

## Add Participant

    - User should be able to add a user to a selected workshop
        - Get data from create form
        - Call addParticipant(name, workshopId)
        - Call displayWorkshops again

## Delete Participant

    - User should be able to delete a participant from a workshop by clicking on them
        - Event listener within rendering ('click')
            - click event calls deleteParticipant(id) function
            - call displayWorkshops again

# HTML Setup

## Home Page

### Header

    - Auth Button - redirects user to auth page
    - Create Button - redirects user to create page

### Body

    - Empty div to inject workshops divs into

## Create Page

### Header

    - Home Button - redirects user to home page

### Body

    - Form for user to create new participant
        - Input box for participant name
        - Dropdown to select workshop
