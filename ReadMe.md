# <span style="color:#0ec2b8">_ _</span>

#### _  app, 10/23/2020_

#### By _**Nataliya Zhuravleva**_

## <span style="color:#0ec2b8">Description</span>

_ _


## <span style="color:#0ec2b8">Setup/Installation Requirements</span>
### <span style="color:#c4f4ef">View Online</span>
_Visit [ webpage](https://nataliyazhuravleva.github.io/^^^/) at https://nataliyazhuravleva.github.io/^^^/_ to view application on GitHub pages._

### <span style="color:#c4f4ef">Open Locally</span>
1. _Navigate to my [ repo](https://github.com/NataliyaZhuravleva/^^^) at https://github.com/NataliyaZhuravleva/^^^_ to view the project files and commits.
2. _Click on the green button labeled "Code"_ to copy repository URL.
3. _Clone the repository to your local machine_ by opening your machine terminal and using the command "git clone https://github.com/NataliyaZhuravleva/^^^".
4. _Click on index.html file_ to view application.



## <span style="color:#0ec2b8">Known Bugs</span>

_No known bags_

## <span style="color:#0ec2b8">Support and contact details</span>

_If you have any questions, ideas or concerns, please, contact me at [natalindria@gmail.com](mailto:natalindria@gmail.com)_

## <span style="color:#0ec2b8">Specs</span>

Describe: Place():

1. Test: "It returns objects description."<br>
    Expect: (Idaho).toEqual({location: "Idaho", landmarks: Array(2), timeOfYear: Array(2), notes: "great place for outdoors"});

2. Test: "It returns description of place"<br>
    Expect: (Idaho.location).toEqual("Idaho");

3. Test: "It returns description of first element of index 1 landmark"<br>
    Expect: (Idaho.landmarks[1]).toEqual("skiing");

4. Test: "It returns full description of Place properties"<br>
    Expect: (Idaho).toEqual(("Idaho", ["Hotsprings", "Skiing"], ["Winter", "Fall"], "great place for outdoors");

Describe: addPlace();

1. Test: "It adds object place to array placesToGo.places"<br>
    Expect: placesToGo.addPlace(Idaho).toEqual(("Idaho", ["Hotsprings", "Skiing"], ["Winter", "Fall"], "great place for outdoors"));

Describe: printProperties();

1. Test: "It will print the properties for each place"
    Expect: printProperties(Colorado).toEqual("Ouray", "Winter", "great for ice climbing");


## <span style="color:#0ec2b8">Technologies Used</span>

* _VisualStudio Code_
* _Git_
* _GitHub_
* _HTML_
* _CSS_
* _JavaScript_
* _jQuery_
* _Bootstrap_

### <span style="color:#0ec2b8">License</span> 

*This software is licensed under the [MIT](https://choosealicense.com/licenses/mit/) license*

Copyright (c) 2020 **_Nataliya Zhuravleva_**
