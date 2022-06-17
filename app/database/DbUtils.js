import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("machines.db");

export const initDB = () => {

    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql(
                `CREATE TABLE IF NOT EXISTS materials(
                        id INTEGER PRIMARY KEY NOT NULL,
                        title TEXT NOT NULL,
                        amount INTEGER NOT NULL
                    )`
            )
        })
    })

}