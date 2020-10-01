const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Татьяна",
            "id_2": "Дарья",
            "id_3": "Мария",
            "id_4": "Оксана",
            "id_5": "Ирина",
            "id_6": "Наталья",
            "id_7": "Светлана",
            "id_8": "Екатерина",
            "id_9": "Елена",
            "id_10": "Алина"
        }
    }`,
    patronJson: `{
        "count": 10,
        "list": {     
            "id_1": "Вениаминов",
            "id_2": "Спиридонов",
            "id_3": "Фёдоров",
            "id_4": "Ярославов",
            "id_5": "Эдуардов",
            "id_6": "Петров",
            "id_7": "Павлов",
            "id_8": "Михаилов",
            "id_9": "Львов",
            "id_10": "Елисеев"
        }
    }`,
    profMaleJson: `{
        "count": 4,
        "list": {     
            "id_1": "Сварщик",
            "id_2": "Каменщик",
            "id_3": "Электрик",
            "id_4": "Летчик"
        }
    }`,
    profFemaleJson: `{
        "count": 4,
        "list": {     
            "id_1": "Медсестра",
            "id_2": "Стюардесса",
            "id_3": "Швея",
            "id_4": "Воспитатель"
        }
    }`,
    monthJson: `{  
        "count": 12,
        "list": {
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Майя",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }
    }`,

    


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstNameMale: function() {

        return this.randomValue(this.firstNameMaleJson);

    },

    randomFirstNameFemale: function() {

        return this.randomValue(this.firstNameFemaleJson);

    },
     randomSurname: function() {

        return this.randomValue(this.surnameJson);

    },
    randomPatronFemale: function() {

        return this.randomValue(this.patronJson);

    },
    randomPatronMale: function() {

        return this.randomValue(this.patronJson);

    },
    randomProfFemale: function() {

        return this.randomValue(this.profFemaleJson);

    },
    randomProfMale: function() {

        return this.randomValue(this.profMaleJson);

    },
    randomMonth: function() {

        return this.randomValue(this.monthJson);

    },


    randomGender: function() {
        let male = this.randomIntNumber(1, 0);
        if (male == 1) {
            this.male = this.GENDER_MALE;
        } else {
            this.male = this.GENDER_FEMALE;
        }
        return this.male;
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surnaname = this.randomSurname();
        if (this.person.gender == this.GENDER_MALE) {
            this.person.firstName = this.randomFirstNameMale();
            this.person.patron = this.randomPatronMale() + "ич";
            this.person.prof = this.randomProfMale();
        }
        else {
            this.person.surnaname += "a";
            this.person.patron = this.randomPatronFemale() + "на";
            this.person.firstName = this.randomFirstNameFemale();
            this.person.prof = this.randomProfFemale();
        }
        this.person.yar = this.randomIntNumber(1920, 2005);
        this.person.month = this.randomMonth();
        this.person.day = this.randomIntNumber(1, 28);
        return this.person;
    }
};

document.getElementById('btnСlean').addEventListener('click', function () {
    document.getElementById('surnameOutput').innerText = "-";
    document.getElementById('firstNameOutput').innerText = "-";
    document.getElementById('patronOutput').innerText = "-";
    document.getElementById('genderOutput').innerText = "-";
    document.getElementById('birthDayOutput').innerText = "-";
    document.getElementById('birthMonthOutput').innerText = "-";
    document.getElementById('birthYearOutput').innerText = "-";
    document.getElementById('profOutput').innerText = "-";
})

document.getElementById('btnStart').addEventListener('click', function () {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surnaname;
    document.getElementById('patronOutput').innerText = initPerson.patron;
    document.getElementById('birthYearOutput').innerText =  initPerson.yar;
    document.getElementById('birthDayOutput').innerText =  initPerson.day;
    document.getElementById('birthMonthOutput').innerText =  initPerson.month;
    document.getElementById('genderOutput').innerText =  initPerson.gender;
    document.getElementById('profOutput').innerText = initPerson.prof;
    
})