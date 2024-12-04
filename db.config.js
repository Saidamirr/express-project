import mysql from 'mysql'

export const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Todo'
})

export async function startApp() {
    try {
        connection.connect();

    } catch (e) {
        console.log(e)
    }
}
