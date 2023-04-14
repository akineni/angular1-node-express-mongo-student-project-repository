# student-project-repository

MEAN stack

node.js
Angular.js (1.8.2)

Student uploads final year project files to application with Name and Matric Number.

Student uploads 2 files each, one is the documentation file (*.doc, *.docx) and the other is the implementation file (*.zip, *.rar).

File upload input field uses the accept attribute to filter the files that can enter the application.

Upload is instant, no page reload.

Student cannot upload twice, so matric number is checked if existing.

Projects/XXXXXXXXX directory is created on the Backend to store uploaded files per student, where XXXXXXXXX is the student's matric number and as a unique identifier.

Student can also see a list of approved students online if they have been approved.


_____________________________________________


ADMIN sees students's submission, download and open the files for confirmation and review, then APPROVE or REJECT the submission.

REJECTION causes the student's XXXXXXXXX directory to be deleted recursively (both directory and it's content) from the backend.
Also database field APPROVED is default (unmodified) as false.