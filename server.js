const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/calculate', (req, res) => {
    const subjectName = req.body.subjectName;
    const totalClasses = parseInt(req.body.totalClasses);
    const classesTaken = parseInt(req.body.classesTaken);
    const attendedClasses = parseInt(req.body.attendedClasses);
    
    // Calculate current attendance percentage based on classes taken
    const currentPercentage = (attendedClasses / classesTaken) * 100;
    const bunkedClasses = classesTaken - attendedClasses;
    
    // Calculate remaining classes in semester
    const remainingClasses = totalClasses - classesTaken;
    
    // Calculate if 85% is achievable
    const targetPercentage = 85;
    const minimumRequiredAttendance = Math.ceil(totalClasses * (targetPercentage / 100));
    const classesNeededFor85 = minimumRequiredAttendance - attendedClasses;
    
    // Calculate remaining bunkable classes
    const maxBunkableClasses = Math.floor(totalClasses * (1 - targetPercentage / 100));
    const remainingBunkable = maxBunkableClasses - bunkedClasses;
    
    // Determine if 85% is achievable
    const isAchievable = classesNeededFor85 <= remainingClasses;
    
    res.render('results', {
        subjectName: subjectName,
        currentPercentage: currentPercentage.toFixed(2),
        classesNeededFor85: isAchievable ? classesNeededFor85 : 0,
        bunkedClasses: bunkedClasses,
        remainingBunkable: remainingBunkable > 0 ? remainingBunkable : 0,
        classesTaken: classesTaken,
        totalClasses: totalClasses,
        isAchievable: isAchievable,
        remainingClasses: remainingClasses
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 