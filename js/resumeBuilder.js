var work = {
    "jobs": [{
            "employer": "Proqod Pte Ltd",
            "title": "Tech founder",
            "location": "Singapore",
            "dates": "May 2015 - Present",
            "description": "Founded Proqod as a tech founder, and built the company from ideation to fund raising, to customer and software development. Proqod is developing an education SaaS to help secondary and tertiary institutes train industry-ready software developers. Proqod has a valuation at S$550,000 in 2015."
        }, {
            "employer": "SUTD-MIT International Design Center",
            "title": "Researcher",
            "location": "Singapore",
            "dates": "June 2012 - Present",
            "description": "Developed a social network model to analyze idea diffusion and collaboration for research institutes In 2015. Attached to IDC Future Living Lab and developed the web front-end of a home utilities monitoring and management system In 2013. Developed and conducted an education experiment in 2012, which integrates Design-based Learning and Active Learning into a Java Course. Published the result in 120th ASEE Annual Conference & Exposition 2013, as the lead author. "
        }

    ]
};

var projects = {
    "projects": [{
        "title": "Proqod",
        "dates": "2015",
        "description": "A cloud-based to enhance learning experience of programming courses.",
        "images": ["images/clap_thumb.png", "images/clap_thumb.png"]
    }]
};

var bio = {
    "name": "Junhua Liu",
    "role": "Founder, Proqod Pte Ltd",
    "contacts": {
        "mobile": "(65)93808239",
        "email": "jeph@proqod.com",
        "github": "junhua",
        "location": "Singapore"
    },
    "bioPic": "images/me.jpg",
    "welcomeMsg": "Hey there.",
    "skills": ["BizDev", "Python", "Java"]
};

var education = {
    "schools": [{
        "school": "Singapore University of Technology and Design",
        "major": "Engineering Systems and Design",
        "minor": "",
        "degree": "BA",
        "year": "2012 - 2015",
        "city": "Singapore"
    }, {
        "school": "Singapore Polytechnic",
        "major": "Information Technology",
        "minor": "Applied Psychology",
        "degree": "Diploma",
        "year": "2009 - 2012",
        "city": "Singapore"
    }],
    "onlineClasses": [{
        "title": "Frond-end Development Nanodegree",
        "school": "Udacity",
        "dates": "2015",
        "url": "http://www.udacity.com"
    }]
};

var gMapString = "https://www.google.com.sg/maps/place/Singapore";

// footer
bio.displayFooter = function() {
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedLocation);
};

// header
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcMsg);


    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#header").append(formattedSkills);
    };
};

// work
work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    for (var i = 0; i < work.jobs.length; i++) {

        var job = work.jobs[i];
        var employer = HTMLworkEmployer.replace("%data%", job.employer);
        var title = HTMLworkTitle.replace("%data%", job.title);
        var dates = HTMLworkDates.replace("%data%", job.dates);
        var loc = HTMLworkLocation.replace("%data%", job.location);
        var desc = HTMLworkDescription.replace("%data%", job.description);

        $(".work-entry").append(employer + title);
        $(".work-entry").append(dates);
        $(".work-entry").append(loc);
        $(".work-entry").append(desc);
    };
};

// projects
projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (var i = 0; i < projects.projects.length; i++) {
        var project = projects.projects[i];
        var title = HTMLprojectTitle.replace("%data%", project.title);
        var dates = HTMLprojectDates.replace("%data%", project.dates);
        var desc = HTMLprojectDescription.replace("%data%", project.description);

        $(".project-entry").append(title);
        $(".project-entry").append(dates);
        $(".project-entry").append(desc);

        var images = project.images;
        for (var i = 0; i < images.length; i++) {
            var img = HTMLprojectImage.replace("%data%", images[i]);
            $(".project-entry").append(img);
        };
    };
};

// schools
education.display = function() {

    for (var i = 0; i < education.schools.length; i++) {
        var school = education.schools[i];
        $("#education").append(HTMLschoolStart);
        var name = HTMLschoolName.replace("%data%", school.school);
        var degree = HTMLschoolDegree.replace("%data%", school.degree);
        var dates = HTMLschoolDates.replace("%data%", school.year);
        var loc = HTMLschoolLocation.replace("%data%", school.city);
        var major = HTMLschoolMajor.replace("%data%", school.major);

        $(".education-entry:last").append(name + degree);
        $(".education-entry:last").append(dates);
        $(".education-entry:last").append(loc);
        $(".education-entry:last").append(major);
    };

    $("#education").append(HTMLonlineClasses);
    // for (var i = 0; i < education.onlineClasses.length; i++) {
    for (var cls in education.onlineClasses) {

        $("#education").append(HTMLschoolStart);

        var onlineClass = education.onlineClasses[cls];
        var title = HTMLonlineTitle.replace("%data%", onlineClass.title);
        var school = HTMLonlineSchool.replace("%data%", onlineClass.school);
        var dates = HTMLonlineDates.replace("%data%", onlineClass.dates);
        var url = HTMLonlineTitle.replace("%data%", onlineClass.url);


        $(".education-entry:last").append(title + school);
        $(".education-entry:last").append(dates);
        $(".education-entry:last").append("<br>");
        $(".education-entry:last").append(url);
    };
};

bio.display();
bio.displayFooter();
work.display();
projects.display();
education.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});
$("#main").append(internationalizeButton);
$("#map-div").append(googleMap);
$("#googleMap").append(gMapString);