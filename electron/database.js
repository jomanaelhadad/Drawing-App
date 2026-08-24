import Database from "better-sqlite3";

const db = new Database("drawings.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS drawings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        data TEXT NOT NULL
    )
`);

const insert = db.prepare(`
    INSERT INTO drawings (title, data)
    VALUES (?, ?)
`);

insert.run("Test Drawing", "Hello SQLite!");

console.log("Database test successful!");