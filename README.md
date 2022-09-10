# The Odin Project JavaScript Exercises

## Debugging

To debug functions, you can run the tests in the Visual Studio Code debugger terminal. You can open this by clicking the "Run and Debug" icon on the left or pressing `ctrl + shift + D`, then clicking JavaScript Debug Terminal. You will be able to set breakpoints as you would in the Chrome DevTools debugger. You can run `npm test exerciseName.spec.js` to then execute your code up until your breakpoint and step through your code as necessary. **NOTE**: To take advantage of the debugger, you **MUST** run the script in the debugger terminal, not the bash or zsh terminal.

## Part 1 Exercises:

- [x] helloWorld
- [x] repeatString
- [x] reverseString
- [x] removeFromArray (understand the logic, but wouldn't be able to write it myself without help)
- [x] sumAll (still looked at answers, but learned a lot in the process.)
- [x] leapYears
- [] tempConversion

3. Cheatsheet for using Git

```
Navigating:
* cd ~/ first few letters of directory, then hit TAB , it should autofill the directory.
* cd .. navigates up one directory
* cd .. navigate to the previous directory (or back)
* cd    navigate to your home directory

Uploading to GitHub:
* git add -A
* git commit -m 'message'
* git push origin main

Downloading from GitHub:
(if updates were rejected because the remote contains work)
* git remote add origin [github url]
* git pull origin main (if conflict, pull changes from github)

Conflict:
* Git force --force - last resort to force upload onto GitHub
```
