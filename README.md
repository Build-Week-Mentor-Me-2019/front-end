# Mentor Me - Build Week 2019

### Developers on Front End
- Sr. Dev: Jesse Tingle <a href="https://github.com/jesse-tingle">github</a>
- Web Dev: Whitney Higgins <a href="https://github.com/whitneyxlachelle">github</a>
- Web Dev: Hutch Crowley <a href="https://github.com/hutchcrowley">github</a>

## PITCH:


## MVP for Web Application
- [ ] An on-boarding process for an entrepreneur
- [ ] On-boarding process for a volunteer experienced business owner
- [ ] Ability to easily create and post a question (including title, question, tagged business type, and optional photos/files)
- [ ] Ability to easily edit / delete a question
- [ ] Ability for anyone to easily search / find posted questions- Ability to respond to a posted question via message



# API info
base URL: https://jesse-tingle-mentor-me.herokuapp.com

Create: POST

- 


Read: GET
https://jesse-tingle-mentor-me.herokuapp.com/api/questions

- Returns an array of post objects
    - Returns an array of objects->each object is an individual question

Update: PUT

Delete: DELETE


## Seed Data - use for testing
    Users:
    username: "elonmusk"
    name: "Elon Musk"
    bio: "Tesla is quite cool, isn't it?"
    password: space
    avatar: https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"

    username: "zuckk"
    name: "Mark Zuckerberg"
    password: plaintext
    bio: "The secret to making money is to run ads!"
    avatar: "https://timedotcom.files.wordpress.com/2018/07/mark-zuckerberg-holocaust.jpg"

    Seed Questions: 
    id: 1
    title: "How to invest in stocks today in 2019 year?
    question: "There are so many tremendous companies out there that I don't even know which ones are worthy. Any advice from the founders?
    business_type: "investing"
    photo: "",
    entrepreneur_username: "tardis"
