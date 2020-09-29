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

    


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {

        return this.randomValue(this.firstNameMaleJson);

    },


     randomSurname: function() {

        return this.randomValue(this.surnameJson);

    },

    randomDate: function() {

        return this.randomValue(this.surnameJson);

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
        this.person.firstName = this.randomFirstName();
        this.person.surnaname = this.randomSurname();
        this.person.yar = this.randomIntNumber(1920, 2005);
        this.person.month = this.randomIntNumber(1, 12);
        this.person.day = this.randomIntNumber(1, 28);
        return this.person;
    }
};
