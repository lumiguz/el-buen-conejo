### Download Python

Go to [python.org/downloads](https://www.python.org/downloads/)

### Install

Don't forget to check ✅ `Add python.exe to PATH`
![python installer](https://res.cloudinary.com/dzc8agefr/image/upload/v1696907584/1_efwa83.png)



![python installer](https://res.cloudinary.com/dzc8agefr/image/upload/v1696907584/2_vtuyh3.png)


### Create and activate a virtual environment

1. Move to **backen** folder
`cd ../backend`
2. Create virtual environment
`python3 -m venv env`
3. Activate virtual environment
  Mac: `source ./env/bin/activate`
  Windows: `.\env\Script\activate`
4. Install all the dependencies 
`pip install -r requirements.txt`



## API



### Profiles Schema

|**KEY**|**TYPE**|**REQUIRED**|
|-|-|-|
|`id`|string|not|
|`photo`|string|not|
|`first_name`|string|not|
|`last_name`|string|not|
|`user_name`|string|yes|
|`email`|string|yes, unique|
|`password`|string|yes|
|`state`|string|not|
|`address`|string|not|
|`farm_id`|string|not|
|`qualification`|float|not|
|`is_active`|bool|not|
|`is_farmmer`|bool|not|

### Farms Schema

|**KEY**|**TYPE**|**REQUIRED**|
|-|-|-|
|`id`|string|not|
|`name`|string|yes|
|`address`|string|yes|
|`is_active`|bool|not|

### Cages Schema

|**KEY**|**TYPE**|**REQUIRED**|
|-|-|-|
|`id`|string|not|
|`count_rabbits`|int|not|
|`price`|float|yes|
|`is_public`|bool|not|
|`is_active`|bool|not|
|`farm_id`|string|yes|

### Rabbits Schema

|**KEY**|**TYPE**|**REQUIRED**|
|-|-|-|
|`id`|string|not|
|`breed`|enum|yes|
|`genre`|enum|yes|
|`price`|float|yes|
|`tag`|string|yes, unique|
|`weight`|float|yes|
|`is_active`|float|yes|

**Enums**
- breed: ['', '', '']
- genre: ['Male', 'Female']