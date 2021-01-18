const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async(db) => {
    // inserir dados
    proffyValue = {
        name:"Diego Fernandes",
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp:"89987654534",
        bio:"Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject:"Química",
        cost:"20,00",
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})
    // consultar dados

    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    // consultar as aulas de um proffy e trazer junto os dados
    const selectedClassesAndProffys = await db.all(`
            SELECT classes.*, proffys.*
            FROM proffys
            JOIN classes ON (classes.proffy_id = proffys.id)
            WHERE classes.proffy_id = 1;
    `)
    //console.log(selectedClassesAndProffys)

    // o horário que a pessoa trabalha, por ex, é das 8 as 18
    // o horário do time_from (8h) precisa ser menor ou igual ao solicitado
    // o time_to precisa ser maior

    const selectClassesSchedules = await db.all(`
        SELECT classes_schedule.*
        FROM classes_schedule
        WHERE classes_schedule.class_id = "1"
        AND classes_schedule.weekday = "0"
        AND classes_schedule.time_from <= "420"
        AND classes_schedule.time_to > "420"
    `)

    console.log(selectClassesSchedules)
})