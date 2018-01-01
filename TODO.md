
on start => copies the main text to the ui
            copies the titles of all notes to the ui
            copies the timestamp to the main timestamp in the ui
            copies the timestamps of all notes to the ui

DONE enter text => title changes
DONE               title changes but only the first line
DONE               text does not allow XSS attacks

DONE select title => main text changes
                selected title becomes active, 
                old active title becomes inactive

select title and enter text => the new title becomes topmost
                               the correct note is being modified permanently

DONE press new => main text becomes blank
DONE             there is a new title in the topmost position
DONE             and the title is "New Note"

press new, select some other title => the new note title is deleted
                                      the note that was on top before the "new" returns on top


searching ...
saving and loading state to the browser memory
deleting a note ...
timestamps
