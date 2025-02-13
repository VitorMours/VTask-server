# VTaskts Back-end



## Parts of the system
In this part, we gonna dive in the structure of the folders, the files, and some chartacteristics of our elements presentes in our codebase.
We gonna analyze some elements that are curcial for a good development, and a good connection of systems between the back-end and the front-end.
Some of the topics we gonna see about, are:

- **Models**: They are a easy way to see how our database behave, and how we can access and manipulate the data that we gonna save, update, access and delete from.
- **Controllers**: They are the conection between the API itself, and the models that save the data, they are the middle that manipulate the way we can fetch or access data, and the data we gonna send or receive.

### Models
The models in the codebase, are classes developed with the help of an ORM (Object Relation Mapper), to craete in a easier way, our comunication and structure of the database, in the development we gonna use the sqlite database because does not need any type of server configuration, but in production we gonna use MySQL. Them main models of our project are the models that define the entity of the **User** and the entity of the **Task**. We can see how they are based on the next schematic:

#### User Model Schematization
|   | field type | field designation |
| ----- | :------- | :-------- |
| id | UUID | User registration data |
| name | String | User communication data |
| surname | String | User communication data |
| email | String | User authentication and idetification data |
| password | Hash(**String**) | User authentication data |


#### Task Model Schematization
|   | field type | field designation |
| ----- | :------- | :-------- |
| taskName | String | The name used to show the task on the dashboard |
| taskDescription | String | The description of the task with mroe details |
| taskStatus | Boolean | The completition status of the task |
| TaskOwner | ForeignKey(User) | The owner of the task |

### Controllers

### Routes


### Services
